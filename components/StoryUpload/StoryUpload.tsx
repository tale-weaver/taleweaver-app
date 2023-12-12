"use client";

import React, { useState } from 'react';
import ImageUploadPage from './ImageUploadPage';
import ImageUploadConfirm from './ImageUploadConfirm';

const StoryUpload: React.FC = () => {
  const [uploadData, setUploadData] = useState<UploadData | null>(null);

  const handleUpload = (data: UploadData) => {
    setUploadData(data);
  };

  const handleConfirm = () => {
    // 好像沒有跑進這裡
    
    // 在這裡處理確認上傳後的邏輯，可以發送到後端等
    console.log("Confirmed Upload:", uploadData);
    // 清空上傳數據，以便下次使用
    setUploadData(null);

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {uploadData ? (
        <div className="fixed flex items-center justify-center bg-white bg-opacity-80">
          <ImageUploadConfirm
            storyName={uploadData.storyName}
            page={uploadData.page}
            selectedImage={uploadData.selectedImage}
            imageDescription={uploadData.imageDescription}
            show={true}
            onCancel={() => setUploadData(null)}
            onConfirm={handleConfirm}
          />
        </div>
      ) : (
        <div>
          <ImageUploadPage onUpload={handleUpload} />
        </div>
      )}

    </div>
  );
};

export default StoryUpload;
