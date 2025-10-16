type UpperFooter = {
    links: FooterLinkGroup[];
    form: FooterForm;
};

type LowerFooter = {
    contactUsLinks: FooterLinkItem[];
    socialMediaLinks: FooterIconLink[];
    governmentLinks: FooterLinkItem[];
};

type FooterForm = {
    title: string;
    description: string;
    buttonText: string;
};

type FooterIconLink = {
    icon: string; // this will be the path to the icon image
    href: string;
    alt: string;
};

type FooterLinkGroup = {
    title: string;
    items: FooterLinkItem[];
};

type FooterLinkItem = {
    text: string;
    href: string;
};