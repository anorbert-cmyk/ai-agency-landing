// Content Types for CMS-managed pages

// ============ HOME PAGE ============
export interface HeroContent {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    icon: string;
    image?: string;
}

export interface ServicesSectionContent {
    title: string;
    subtitle: string;
    web2_tab: string;
    web3_tab: string;
    web2_items: ServiceItem[];
    web3_items: ServiceItem[];
}

export interface BridgeSectionContent {
    title: string;
    subtitle: string;
    web2_label: string;
    web2_sublabel: string;
    web3_label: string;
    web3_sublabel: string;
}

export interface TestimonialItem {
    quote: string;
    author: string;
    role: string;
    image: string;
}

export interface TestimonialsSectionContent {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQSectionContent {
    title: string;
    subtitle: string;
    items: FAQItem[];
}

export interface CTASectionContent {
    title: string;
    subtitle: string;
    button_text: string;
    button_link: string;
}

export interface HomeContent {
    hero: HeroContent;
    services_section: ServicesSectionContent;
    bridge_section: BridgeSectionContent;
    testimonials_section: TestimonialsSectionContent;
    faq_section: FAQSectionContent;
    cta_section: CTASectionContent;
}

// ============ SERVICES PAGE ============
export interface ServicesListItem {
    title: string;
    description: string;
    icon: string;
}

export interface ServicesCategory {
    category: string;
    items: ServicesListItem[];
}

export interface ServicesCTAContent {
    title: string;
    subtitle: string;
    button_text: string;
}

export interface ServicesContent {
    header: {
        title: string;
        subtitle: string;
    };
    services_list: ServicesCategory[];
    cta: ServicesCTAContent;
}

// ============ ABOUT PAGE ============
export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

export interface AboutContent {
    header: {
        title: string;
        subtitle: string;
    };
    mission: {
        title: string;
        content_1: string;
        content_2: string;
        image: string;
    };
    team: {
        title: string;
        members: TeamMember[];
    };
}
