import { describe, it, expect } from 'vitest';
import type {
    HomeContent,
    ServicesContent,
    AboutContent,
    HeroContent,
    TeamMember
} from '../types';

describe('Content Types', () => {
    it('HeroContent has required fields', () => {
        const hero: HeroContent = {
            title: 'Test Title',
            subtitle: 'Test Subtitle',
            cta_primary: 'Primary CTA',
            cta_secondary: 'Secondary CTA',
        };

        expect(hero.title).toBeDefined();
        expect(hero.subtitle).toBeDefined();
        expect(hero.cta_primary).toBeDefined();
        expect(hero.cta_secondary).toBeDefined();
    });

    it('TeamMember has required fields', () => {
        const member: TeamMember = {
            name: 'John Doe',
            role: 'Developer',
            bio: 'A great developer',
            image: '/images/john.jpg',
        };

        expect(member.name).toBeDefined();
        expect(member.role).toBeDefined();
        expect(member.bio).toBeDefined();
        expect(member.image).toBeDefined();
    });

    it('ServicesContent structure is valid', () => {
        const services: ServicesContent = {
            header: {
                title: 'Services',
                subtitle: 'Our offerings',
            },
            services_list: [
                {
                    category: 'Web Development',
                    items: [
                        {
                            title: 'React Apps',
                            description: 'Building React applications',
                            icon: 'Code',
                        },
                    ],
                },
            ],
            cta: {
                title: 'Get Started',
                subtitle: 'Contact us today',
                button_text: 'Contact',
            },
        };

        expect(services.header.title).toBe('Services');
        expect(services.services_list).toHaveLength(1);
        expect(services.services_list[0].items).toHaveLength(1);
    });
});
