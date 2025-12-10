export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-marketing-2025",
    title: "The Future of AI Marketing: Beyond Generative Text",
    excerpt: "Why 2025 will be the year of agentic workflows and hyper-personalized customer journeys.",
    author: "Alex Rivera",
    date: "Dec 10, 2025",
    category: "AI Strategy",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Generative AI has changed the game for content creation, but the next frontier is far more exciting: <strong>Agentic Marketing</strong>.</p>
      
      <h2>From Chatbots to Agents</h2>
      <p>While 2023-2024 was defined by LLMs that could write copy, 2025 is seeing the rise of autonomous agents that can execute complex multi-step workflows. Imagine an AI that doesn't just write an email, but analyzes your CRM, segments your audience based on real-time behavior, drafts personalized variants, sends them, and optimizes the next batch based on open rates—all without human intervention.</p>
      
      <h2>Hyper-Personalization at Scale</h2>
      <p>The "segment of one" is finally becoming a reality. With the cost of inference dropping, brands can now generate unique landing pages, video assets, and value propositions for every single visitor.</p>
      
      <blockquote>"The brands that win in 2025 won't just use AI to work faster; they'll use it to know their customers better than ever before."</blockquote>
      
      <h2>The Human Element</h2>
      <p>Paradoxically, as AI handles more execution, the premium on human creativity and strategy skyrockets. The "why" becomes more important than the "how."</p>
    `
  },
  {
    id: "2",
    slug: "web3-community-building-guide",
    title: "Community Architecture: Building for Retention in Web3",
    excerpt: "Stop buying users. Start building tribes. A guide to sustainable community growth.",
    author: "Elena Kova",
    date: "Nov 28, 2025",
    category: "Web3",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    content: `
      <p>The "airdrop hunter" era is over. Projects that rely on mercenary capital are finding themselves ghost towns post-TGE. The new meta is <strong>Community Architecture</strong>.</p>
      
      <h2>The 3 Pillars of Retention</h2>
      <ul>
        <li><strong>Shared Identity:</strong> Does holding your token say something about who I am?</li>
        <li><strong>Participatory Governance:</strong> Do I have a real voice, or is it just theater?</li>
        <li><strong>Tangible Utility:</strong> Can I do something with this asset today?</li>
      </ul>
      
      <h2>Gamification Done Right</h2>
      <p>We've moved past "click to earn." The most successful DAOs are implementing reputation systems that reward contribution quality, not just volume. This filters for missionaries over mercenaries.</p>
    `
  },
  {
    id: "3",
    slug: "tokenomics-red-flags",
    title: "5 Tokenomics Red Flags to Watch Out For",
    excerpt: "How to spot a sustainable economy vs. a ponzi scheme in disguise.",
    author: "Elena Kova",
    date: "Nov 15, 2025",
    category: "DeFi",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop",
    content: `
      <p>Not all tokens are created equal. Before you invest or build, check for these structural weaknesses.</p>
      
      <h2>1. High Insider Allocation</h2>
      <p>If the team and VCs control >40% of the supply with short vesting schedules, you are the exit liquidity.</p>
      
      <h2>2. Inflationary Rewards without Revenue</h2>
      <p>Paying out 100% APY in a native token is easy. Sustaining value when everyone sells that reward is impossible without real protocol revenue.</p>
      
      <h2>3. Lack of Sink Mechanisms</h2>
      <p>Tokens need a reason to be taken out of circulation. Whether it's buybacks, burning, or locking for utility, a sinkless token is destined for zero.</p>
    `
  },
  {
    id: "4",
    slug: "generative-ui-design",
    title: "Generative UI: The End of Static Interfaces",
    excerpt: "Why design systems are evolving into prompt-based interface generation.",
    author: "Marcus Thorne",
    date: "Oct 30, 2025",
    category: "Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    content: `
      <p>We are moving from "responsive design" to "generative design." Instead of building one interface that stretches to fit screens, we are building systems that generate the perfect interface for the user's current intent.</p>
      
      <h2>Context-Aware Components</h2>
      <p>Imagine a dashboard that simplifies itself when you're on mobile and in a rush, but reveals deep analytics tools when you're on a desktop during work hours. This isn't just hiding divs; it's rewriting the UI layer on the fly.</p>
    `
  }
];
