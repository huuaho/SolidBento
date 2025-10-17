import type { UpperFooter, LowerFooter } from '../typings/footer';

export const upperfooter: UpperFooter = {
    links: [
        {
            title: "About",
            items: [
                { text: "About CCDI Hub", href: "/about" },
                { text: "About CCDI", href: "https://www.cancer.gov/research/areas/childhood/childhood-cancer-data-initiative" },
                { text: "Contact Us", href: "mailto:NCIChildhoodCancerDataInitiative@mail.nih.gov" },
                { text: "Release Notes", href: "https://ccdi.cancer.gov/release-notes" },
            ],
        },
        {
            title: "Policies",
            items: [
                { text: "Accessibility", href: "https://www.cancer.gov/policies/accessibility" },
                { text: "FOIA", href: "https://www.cancer.gov/policies/accessibility" },
                { text: "Privacy & Security", href: "https://www.cancer.gov/policies/accessibility" },
                { text: "Disclaimer", href: "https://www.cancer.gov/policies/disclaimer" },
                { text: "Vulnerability Disclosure", href: "https://www.hhs.gov/vulnerability-disclosure-policy/index.html" },
            ],
        },
    ],
    form: {
        title: "Sign up for email updates",
        description: "Enter your email address",
        buttonText: "Sign up",
    },
};

export const lowerfooter: LowerFooter = {

    contactUsLinks: [
        { text: "NCIChildhoodCancerDataInitiative@mail.nih.gov", href: "mailto:NCIChildhoodCancerDataInitiative@mail.nih.gov" },
    ],
    
    socialMediaLinks: [
        { icon: "assets/footer/instagram-logo.svg", href: "https://www.instagram.com/nationalcancerinstitute/", alt: "Instagram Icon" },
        { icon: "assets/footer/x-logo.svg", href: "https://twitter.com/thenci", alt: "X (Twitter) Icon" },
        { icon: "assets/footer/facebook-logo.svg", href: "https://www.facebook.com/cancer.gov", alt: "Facebook Icon" },
        { icon: "assets/footer/youtube-logo.svg", href: "https://www.youtube.com/NCIgov", alt: "YouTube Icon" },
        { icon: "assets/footer/linkedin-logo.svg", href: "https://www.linkedin.com/company/nationalcancerinstitute/", alt: "LinkedIn Icon" },
    ],

    governmentLinks: [
        { text: "U.S. Department of Health and Human Services", href: "https://www.hhs.gov" },
        { text: "National Institutes of Health", href: "https://www.nih.gov" },
        { text: "National Cancer Institute", href: "https://www.cancer.gov" },
        { text: "USA.gov", href: "https://www.usa.gov" },
    ]
};