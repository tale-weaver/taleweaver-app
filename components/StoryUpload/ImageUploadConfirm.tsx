'use client';

import React, { useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button'

interface ImageUploadConfirmProps {
  onClose: () => void; // 声明 onUploadClick 函数的类型
}

const ImageUploadConfirm: React.FC<ImageUploadConfirmProps> = ({ onClose }) => {

  const [storyName, setStoryName] = useState("Harry Potter"); // fake value
  const [page, setPage] = useState(1); // fake value
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // fake value
  const [imageDescription, setImageDescription] = useState<string>(""); // fake value

  const backtoUpload = () => {
    if(onClose){
      onClose();
    }
    
  }

  const handleUpload = () => {
    // upload to DB
    console.log("Uploaded Image:", selectedImage);
    console.log("Image Description:", imageDescription);
  };

  return (
    <div>
      
      <div>
        <h2>準備上傳：{storyName} 第 {page} 頁</h2>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>

          {selectedImage && (
            <div>
              <img src={selectedImage} alt="Uploaded" style={{ maxWidth: "100%" }} />
            </div>
          )}
        </div>

        <div style={{ flex: 1, marginLeft: "20px" }}>
          {imageDescription}
        </div>

      </div>

      <span><Button onClick={backtoUpload}>返回</Button></span>
      <span><Button onClick={handleUpload}>確定上傳</Button> </span>
    </div>

  );
};

export default ImageUploadConfirm;