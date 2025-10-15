//Create a footerconfig file with typings
// There will be two exports: upperfooter and lowerfooter
// upper footer will have two properties: links and form
// the upper footer links will be an array of dictionaries with the title being the string key and the value being an array of objects with text and href properties
// the form will have form title, form description, and form button text

/*
** First Column
About
About C3DC - /about
About CCDI - https://www.cancer.gov/research/areas/childhood/childhood-cancer-data-initiative
Contact Us - NCIChildhoodCancerDataInitiative@mail.nih.gov
Release Notes - https://clinicalcommons.ccdi.cancer.gov/release_notes_pdf?existingUser
** Second Column
Resources - 
C3DC Data Model - https://github.com/CBIIT/c3dc-model
Bento - https://cbiit.github.io/bento-docs/master/index.html
** Policies
Accessibility - https://www.cancer.gov/policies/accessibility
FOIA - https://www.cancer.gov/policies/accessibility
Privacy & Security - https://www.cancer.gov/policies/accessibility
Disclaimer - https://www.cancer.gov/policies/disclaimer
Vulnerability Disclosure- https://www.hhs.gov/vulnerability-disclosure-policy/index.html
*/

//create the types for the footer config
type FooterLinkItem = {
    text: string;
    href: string;
};

type FooterLinkColumn = {
    title: string;
    items: FooterLinkItem[];
};

type FooterForm = {
    title: string;
    description: string;
    buttonText: string;
};

type UpperFooter = {
    links: FooterLinkColumn[];
    form: FooterForm;
};

//export the upperfooter config

export const upperfooter:UpperFooter = {
    links: [
        {
            title: "About",
            items: [
                { text: "About C3DC", href: "/about" },
                { text: "About CCDI", href: "https://www.cancer.gov/research/areas/childhood/childhood-cancer-data-initiative" },
                { text: "Contact Us", href: "mailto:NCIChildhoodCancerDataInitiative@mail.nih.gov" },
                { text: "Release Notes", href: "https://clinicalcommons.ccdi.cancer.gov/release_notes_pdf?existingUser" },
            ],
        },
        {
            title: "Resources",
            items: [
                { text: "C3DC Data Model", href: "https://github.com/CBIIT/c3dc-model" },
                { text: "Bento", href: "https://cbiit.github.io/bento-docs/master/index.html" },
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
        buttonText: "Sign Up",
    },
};