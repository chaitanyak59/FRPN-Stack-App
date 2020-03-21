export function transformDate(date: string): string {
    const dateX = new Date(date);
    return `${dateX.toLocaleDateString()}`
}