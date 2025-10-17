export type UpperFooter = {
    links: FooterLinkGroup[];
    form: FooterForm;
};

export type LowerFooter = {
    contactUsLinks: FooterLinkItem[];
    socialMediaLinks: FooterIconLink[];
    governmentLinks: FooterLinkItem[];
};

export type FooterForm = {
    title: string;
    description: string;
    buttonText: string;
};

export type FooterIconLink = {
    icon: string; // this will be the path to the icon image
    href: string;
    alt: string;
};

export type FooterLinkGroup = {
    title: string;
    items: FooterLinkItem[];
};

export type FooterLinkItem = {
    text: string;
    href: string;
};