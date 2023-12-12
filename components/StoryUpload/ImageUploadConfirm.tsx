'use client';

import React, { useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button';
import { useRouter } from 'next/navigation'

interface ImageUploadConfirmProps {
  bookId: number;
  storyName: string;
  page: number;
  selectedImage: string | null;
  imageDescription: string;
  show: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

// 假設這是一個用於上傳圖片的服務函數
const uploadImageToDatabase = async (data: FormData) => {
  try {
    // 調用你的後端 API 或服務
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      console.log('Uploaded successfully!');
    } else {
      console.error('Upload failed.');
    }
  } catch (error) {
    console.error('Error uploading:', error);
  }
};

const ImageUploadConfirm: React.FC<ImageUploadConfirmProps> = ({
  bookId,
  storyName,
  page,
  selectedImage,
  imageDescription,
  show,
  onCancel,
  onConfirm,
}) => {

  const router = useRouter()

  const uploadConfirm = async () => {
    // 創建一個 FormData 對象，用於包裝需要上傳的數據
    const formData = new FormData();
    formData.append('selectedImage', selectedImage || '');
    formData.append('imageDescription', imageDescription);

    // upload to DB
    try {
      // await uploadImageToDatabase(formData);

      console.log("Uploaded Image:", selectedImage);
      console.log("Image Description:", imageDescription);
      console.log("upload to DB.");

      // 回到那個故事的頁面
      router.push('/story/1'); // + String(bookId));
    } catch (error) {
      console.error("Uploading error:", error)
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h2 className={`mb-3 text-2xl font-semibold`}>準備上傳您的成品至：{storyName} 第 {page} 頁</h2>
      </div>

      <div className="bg-slate-300 rounded-lg flex justify-center p-4">
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
      </div>

      <div className="flex justify-center columns-2">
        <span><Button className="m-2" variant="destructive" onClick={onCancel}>返回</Button></span>
        <span><Button className="m-2" onClick={uploadConfirm}>確定上傳</Button> </span>
      </div>
    </div>

  );
};

export default ImageUploadConfirm;