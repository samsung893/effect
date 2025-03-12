export const resizeBase64Image = (base64: string, targetSize = 512, quality = 0.8): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        if (!ctx) return reject("Canvas not supported");
  
        // Tính toán tỉ lệ resize
        let { width, height } = img;
        const ratio = targetSize / Math.max(width, height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
  
        // Cập nhật kích thước canvas
        canvas.width = width;
        canvas.height = height;
  
        // Vẽ ảnh lên canvas
        ctx.drawImage(img, 0, 0, width, height);
  
        // Xuất ảnh base64 mới với kích thước nhỏ hơn
        resolve(canvas.toDataURL("image/jpeg", quality)); // Có thể đổi thành "image/png"
      };
      img.onerror = reject;
      img.src = base64;
    });
  };
  