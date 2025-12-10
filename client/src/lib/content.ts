// Helper to parse frontmatter without gray-matter (which requires Node Buffer)
function parseFrontmatter(text: string) {
    if (typeof text !== 'string') return { data: {}, content: '' };

    // Normalize newlines
    const normalized = text.replace(/\r\n/g, '\n');

    // Check if it starts with frontmatter delimiter
    if (!normalized.startsWith('---\n')) {
        return { data: {}, content: text };
    }

    // Find the end delimiter
    // We look for \n---\n starting from index 3
    const endDelimiterIndex = normalized.indexOf('\n---\n', 3);

    if (endDelimiterIndex === -1) {
        // Fallback: maybe it ends with just --- at EOF
        if (normalized.endsWith('\n---')) {
            const endIdx = normalized.length - 4;
            const frontmatterRaw = normalized.slice(4, endIdx).trim();
            const content = "";
            return parseFrontmatterBlock(frontmatterRaw, content);
        }
        return { data: {}, content: text };
    }

    const frontmatterRaw = normalized.slice(4, endDelimiterIndex).trim();
    const content = normalized.slice(endDelimiterIndex + 5).trim();

    return parseFrontmatterBlock(frontmatterRaw, content);
}

function parseFrontmatterBlock(frontmatterRaw: string, content: string) {
    const data: Record<string, any> = {};

    frontmatterRaw.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) return;

        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();

        if (!value) return;

        // Handle arrays like ["a", "b"]
        if (value.startsWith('[') && value.endsWith(']')) {
            try {
                data[key] = JSON.parse(value);
            } catch (e) {
                // simple fallback for comma separated
                data[key] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
            }
        } else {
            // Handle quoted strings
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            data[key] = value;
        }
    });

    return { data, content };
}

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
        const fileContent = (await resolver()) as string;
        const { data, content } = parseFrontmatter(fileContent);
        const slug = path.split("/").pop()?.replace(".md", "") || "";

        return { ...data, slug, content } as T;
    });

    return Promise.all(contentPromises);
}

// Blog Posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const globs = import.meta.glob("../content/blog/*.md", { query: "?raw", import: "default" });
    const posts = await loadMarkdownContent<BlogPost>(globs);
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const posts = await getAllBlogPosts();
    return posts.find((p) => p.slug === slug);
}

// Case Studies
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
    const globs = import.meta.glob("../content/work/*.md", { query: "?raw", import: "default" });
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
    const globs = import.meta.glob("../content/pages/*.json", { eager: true });

    // Find the matching file
    const foundPath = Object.keys(globs).find(path => path.includes(`${pageName}.json`));

    if (!foundPath) {
        throw new Error(`Content for page ${pageName} not found`);
    }

    // Eager imports return the module
    return (globs[foundPath] as any).default || (globs[foundPath] as T);
}
