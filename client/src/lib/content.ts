import matter from "gray-matter";

// Types
export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: string;
    excerpt: string;
    image: string;
    content: string;
}

export interface CaseStudy {
    slug: string;
    client: string;
    category: string;
    title: string;
    description: string;
    result: string;
    tags: string[];
    image: string;
    color: string;
    content: string;
}

// Helper to load markdown content
async function loadMarkdownContent<T>(globs: Record<string, () => Promise<unknown>>): Promise<T[]> {
    const contentPromises = Object.entries(globs).map(async ([path, resolver]) => {
        const fileContent = (await resolver()) as string; // vite-plugin-string or custom loader? 
        // Wait, import.meta.glob with { as: 'raw' } loads string.

        // We need to assume the globs are loaded with { as: 'raw' }
        const { data, content } = matter(fileContent);
        const slug = path.split("/").pop()?.replace(".md", "") || "";

        return { ...data, slug, content } as T;
    });

    return Promise.all(contentPromises);
}

// Blog Posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const globs = import.meta.glob("@/content/blog/*.md", { as: "raw" });
    const posts = await loadMarkdownContent<BlogPost>(globs);
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const posts = await getAllBlogPosts();
    return posts.find((p) => p.slug === slug);
}

// Case Studies
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
    const globs = import.meta.glob("@/content/work/*.md", { as: "raw" });
    return loadMarkdownContent<CaseStudy>(globs);
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
    const studies = await getAllCaseStudies();
    return studies.find((s) => s.slug === slug);
}

// Static Pages
export async function getPageContent<T>(pageName: string): Promise<T> {
    // Use a switch or specific globs because dynamic import with variable is tricky in Vite/Rollup
    // but we can glob all json files in content/pages
    const globs = import.meta.glob("@/content/pages/*.json", { eager: true });

    // Find the matching file
    const foundPath = Object.keys(globs).find(path => path.includes(`${pageName}.json`));

    if (!foundPath) {
        throw new Error(`Content for page ${pageName} not found`);
    }

    // Eager imports return the module
    return (globs[foundPath] as any).default || (globs[foundPath] as T);
}
