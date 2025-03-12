export function getBase64(base64: string | null) {
    if (!base64) return "";

    return `data:image/png;base64,${base64}`
}