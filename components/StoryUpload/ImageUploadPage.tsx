'use client';

import React, { useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button'

interface ImageUploadPageProps {
  onUploadClick: () => void; // 声明 onUploadClick 函数的类型
}

const ImageUploadPage: React.FC<ImageUploadPageProps> = ({ onUploadClick }) => {
  const [storyName, setStoryName] = useState("Harry Potter"); // fake value
  const [page, setPage] = useState(1); // fake value

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // 将图片数据存储到状态中
        setSelectedImage(reader.result as string);
      };

      // 读取图片数据
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleUpload = () => {
    // upload to DB
    console.log("Uploaded Image:", selectedImage);
    console.log("Image Description:", imageDescription);

    if(onUploadClick){
      onUploadClick();
    }
  };

  return (
    <div>
      
      <div>
        <h2>{storyName}: 第 {page} 頁</h2>
      </div>

      <div style={{ display: "flex" }}>
        <h4>圖片上傳</h4>
        <div style={{ flex: 1 }}>
          <input
            type="file"
            accept="image/*" // image only
            onChange={handleImageChange}
          />

          {selectedImage && (
            <div>
              <img src={selectedImage} alt="Uploaded" style={{ maxWidth: "100%" }} />
              <button onClick={handleRemoveImage}>移除圖片</button>
            </div>
          )}
        </div>

        <div style={{ flex: 1, marginLeft: "20px" }}>
          <h4>輸入文字敘述</h4>
          <textarea
            value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
            placeholder="輸入文字敘述（300 字）"
            style={{ width: "100%", minHeight: "100px" }}
          />
        </div>

      </div>

      <Button variant="default" onClick={handleUpload}>上傳</Button> 
    </div>

  );
};

export default ImageUploadPage;