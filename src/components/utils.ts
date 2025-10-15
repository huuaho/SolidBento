export function isExternalLink(href: string): boolean {
    return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}