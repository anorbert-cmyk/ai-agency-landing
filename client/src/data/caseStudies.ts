export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  category: string;
  title: string;
  description: string;
  result: string;
  tags: string[];
  image: string;
  color: string;
  content: string; // Markdown-like or HTML content for the detail view
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "velvet-and-vine",
    client: "Velvet & Vine",
    category: "Web2 • E-commerce",
    title: "AI-Driven Personalization for Luxury Fashion",
    description: "We implemented a custom machine learning recommendation engine that increased average order value by 35% and conversion rate by 45%.",
    result: "+45% Conversion Rate",
    tags: ["AI Strategy", "UX Design", "Data Analytics"],
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    color: "from-rose-400 to-orange-300",
    content: `
      <h2>The Challenge</h2>
      <p>Velvet & Vine, a premier luxury fashion retailer, was struggling with low conversion rates despite high traffic. Their static product recommendations weren't resonating with their sophisticated clientele, who expected a personalized shopping experience comparable to an in-store visit.</p>
      
      <h2>The Solution</h2>
      <p>Lumina Digital engineered a bespoke AI recommendation engine tailored to the nuances of high fashion. Unlike generic plugins, our model analyzed:</p>
      <ul>
        <li>Visual similarity of garments (cut, fabric, pattern)</li>
        <li>User browsing behavior and dwell time</li>
        <li>Historical purchase data segmented by seasonal trends</li>
      </ul>
      <p>We integrated this engine seamlessly into their existing headless commerce stack, ensuring sub-100ms response times.</p>

      <h2>The Results</h2>
      <p>Within three months of deployment, the results were transformative:</p>
      <ul>
        <li><strong>45% increase</strong> in conversion rate</li>
        <li><strong>35% increase</strong> in Average Order Value (AOV)</li>
        <li><strong>20% reduction</strong> in return rates due to better sizing recommendations</li>
      </ul>
    `
  },
  {
    id: "2",
    slug: "nebula-protocol",
    client: "Nebula Protocol",
    category: "Web3 • DeFi",
    title: "Community Growth & Token Launch Strategy",
    description: "A comprehensive go-to-market strategy for a new lending protocol. We managed the IDO, built a 50k+ Discord community, and secured $12M TVL in 48 hours.",
    result: "$12M TVL in 48 Hours",
    tags: ["Tokenomics", "Community Management", "PR"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    color: "from-indigo-400 to-cyan-300",
    content: `
      <h2>The Challenge</h2>
      <p>Nebula Protocol needed to launch their decentralized lending platform in a crowded DeFi market. They faced the "cold start" problem: needing liquidity to attract users, and users to provide liquidity. Trust and community engagement were non-existent.</p>
      
      <h2>The Solution</h2>
      <p>We devised a multi-phase launch strategy focusing on organic community growth and incentivized participation:</p>
      <ul>
        <li><strong>Community Architecture:</strong> Built a gamified Discord server that rewarded knowledge and helpfulness over spam.</li>
        <li><strong>Tokenomics Design:</strong> Modeled sustainable yield strategies to prevent the "farm and dump" cycle.</li>
        <li><strong>Strategic Partnerships:</strong> Secured partnerships with 3 major DAO treasuries prior to launch.</li>
      </ul>

      <h2>The Results</h2>
      <p>The IDO was oversubscribed by 500%, and the protocol achieved critical mass immediately:</p>
      <ul>
        <li><strong>$12M Total Value Locked (TVL)</strong> within the first 48 hours</li>
        <li><strong>50,000+</strong> active community members across Discord and Twitter</li>
        <li>Zero security incidents during the launch phase</li>
      </ul>
    `
  },
  {
    id: "3",
    slug: "greenchain",
    client: "GreenChain",
    category: "Web3 • ReFi",
    title: "Carbon Credit Marketplace UI/UX",
    description: "Designing an intuitive interface for trading carbon credits on-chain. We simplified complex blockchain interactions into a seamless user experience.",
    result: "User Retention up 60%",
    tags: ["Product Design", "Frontend Dev", "Smart Contract Integration"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    color: "from-emerald-400 to-teal-300",
    content: `
      <h2>The Challenge</h2>
      <p>GreenChain aimed to democratize access to carbon credits, but their initial MVP was too technical for non-crypto natives. The complex wallet connection and transaction signing process was causing a 70% drop-off rate at checkout.</p>
      
      <h2>The Solution</h2>
      <p>We redesigned the platform with a "Web2.5" approach, abstracting away the blockchain complexity:</p>
      <ul>
        <li>Implemented social login and account abstraction wallets</li>
        <li>Designed a clean, dashboard-style interface for tracking impact</li>
        <li>Created educational micro-interactions to explain credit verification</li>
      </ul>

      <h2>The Results</h2>
      <p>The new interface bridged the gap between corporate sustainability officers and decentralized tech:</p>
      <ul>
        <li><strong>60% increase</strong> in user retention</li>
        <li><strong>3x increase</strong> in corporate partnerships</li>
        <li>Awarded "Best UX in ReFi" at EthDenver</li>
      </ul>
    `
  },
  {
    id: "4",
    slug: "apex-logistics",
    client: "Apex Logistics",
    category: "Web2 • Enterprise",
    title: "Predictive Supply Chain Analytics",
    description: "Building an internal dashboard that uses predictive AI to forecast inventory needs, reducing waste by 20% annually.",
    result: "20% Waste Reduction",
    tags: ["Enterprise Software", "AI Modeling", "Dashboard Design"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-400 to-indigo-400",
    content: `
      <h2>The Challenge</h2>
      <p>Apex Logistics was losing millions annually due to inventory mismanagement—overstocking perishable goods and understocking high-demand items. Their legacy Excel-based forecasting was manual, slow, and error-prone.</p>
      
      <h2>The Solution</h2>
      <p>Lumina Digital built a custom predictive analytics dashboard powered by a time-series forecasting model:</p>
      <ul>
        <li>Ingested 5 years of historical sales and logistics data</li>
        <li>Integrated external signals like weather patterns and economic indicators</li>
        <li>Developed a real-time visualization dashboard for warehouse managers</li>
      </ul>

      <h2>The Results</h2>
      <p>The system provided actionable insights that transformed their operations:</p>
      <ul>
        <li><strong>20% reduction</strong> in inventory waste</li>
        <li><strong>15% reduction</strong> in storage costs</li>
        <li>Forecast accuracy improved from 65% to 92%</li>
      </ul>
    `
  }
];
