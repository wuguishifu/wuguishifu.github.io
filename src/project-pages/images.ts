export default function getImageUrl(fileName: string) {
    return new URL(`../assets/projects/${fileName}`, import.meta.url).href
}