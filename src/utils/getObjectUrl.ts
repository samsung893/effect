export function getObjectUrl(file: File) {
    const fileUrl = URL.createObjectURL(file);
    return fileUrl;
}