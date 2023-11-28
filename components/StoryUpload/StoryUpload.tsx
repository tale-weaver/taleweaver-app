"use client";

import React, { useState } from 'react';
import ImageUploadPage from './ImageUploadPage';
import ImageUploadConfirm from './ImageUploadConfirm';

const StoryUpload = () => {
  // control visiaility of ImageUploadConfirm
  const [isImageUploadConfirmVisible, setIsImageUploadConfirmVisible] = useState(false);

  // upload button 
  const handleUploadClick = () => {
    // 设置 ImageUploadConfirm 的可见性为 true
    setIsImageUploadConfirmVisible(true);
  };

  // 处理 ImageUploadConfirm 关闭事件
  const handleConfirmClose = () => {
    // 设置 ImageUploadConfirm 的可见性为 false
    setIsImageUploadConfirmVisible(false);
  };

  return (
    <div>
      <ImageUploadPage onUploadClick={handleUploadClick} />

      {isImageUploadConfirmVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80">
          <ImageUploadConfirm onClose={handleConfirmClose} />
        </div>
      )}
    </div>
  );
};

export default StoryUpload;
