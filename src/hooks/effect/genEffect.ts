import pixelsJS from '../../pixeljs/Pixels.js';

const applyFilter = (imageData: ImageData, effect: string, strength: number) => {
    let newImgData = pixelsJS.filterImgDataStrength(imageData, effect, strength);
    return newImgData;
};
export const applyEffect = (imageBase64: string, effect: string, strength: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageBase64;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject('Canvas context could not be created');
                return;
            }

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // Get image data from canvas
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

            // Apply filter using pixelsJS
            const newImageData = applyFilter(imageData, effect, strength);

            // Update the canvas with the new image data
            ctx.putImageData(newImageData, 0, 0);

            // Convert canvas to base64 image
            const newBase64Image = canvas.toDataURL();
            resolve(newBase64Image); // Return the new base64 image as a result
        };
        img.onerror = reject; // Handle any image loading errors
    });
};