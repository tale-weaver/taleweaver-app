'use client';

import React, { useState, useRef } from "react";
import { Button, buttonVariants } from '@/components/ui/button';
// import Image from "next/image";
// import ImageUploadConfirm from './ImageUploadConfirm';

interface ImageUploadPageProps {
  onUpload: (data: UploadData) => void; // onUpload 函數 接受 UploadData 參數
}

interface UploadData {
  bookId: number;
  storyName: string;
  page: number;
  selectedImage: string | null;
  imageDescription: string;
}

const ImageUploadPage: React.FC<ImageUploadPageProps> = ({ onUpload }) => {
  const [bookId, setBookId] = useState(1); // fake value
  const [storyName, setStoryName] = useState("Harry Potter"); // fake value
  const [page, setPage] = useState(1); // fake value

  const fileInputRef = useRef<HTMLInputElement | null>(null); // 指定 ref 的類型為 HTMLInputElement 或 null
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState<string>("");

  const [uploadError, setUploadError] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // 限制文件大小
      if (file.size > 5 * 1024 * 1024) {
        setUploadError('File size exceeds the limit of 5 MB.');
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setUploadError(null);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = () => {
    if (uploadError) {
      // 如果存在上传错误，不执行上传逻辑
      return;
    }

    if (!selectedImage){
      alert("請選擇要上傳的圖片檔案")
      return;
    }

    if (!imageDescription){
      alert("請輸入文字敘述")
      return;
    }

    console.log("Uploaded Image:", selectedImage);
    console.log("Image Description:", imageDescription);

    onUpload({
      bookId,
      storyName,
      page,
      selectedImage,
      imageDescription,
    });

    setShowConfirm(true);
  };

  return (
    <div className="content-center">

      <div className="flex justify-center">
        <h2 className={`mb-3 text-2xl font-semibold`}>{storyName}: 第 {page} 頁</h2>
      </div>

      <div className="flex justify-center grid grid-cols-2 gap-3">
        <div className="border-dashed border-4 rounded-lg" style={{ flex: 1 }}>
          <h4 className={`mb-3 text-xl font-semibold content-center`}>圖片上傳</h4>
          <input
            type="file"
            accept="image/*" // image only
            onChange={handleImageChange}
            ref={fileInputRef}
          />
          {selectedImage && (
          <div>
            <img src={selectedImage} alt="Uploaded" style={{ maxWidth: "100%"}} />
          </div>
        )}
          {uploadError && <div style={{ color: 'red' }}>{uploadError}</div>}
        </div>

        <div className="border-dashed border-4 rounded-lg" style={{ flex: 1, marginLeft: "20px" }}>
          <h4 className={`mb-3 text-xl font-semibold`}>文字敘述</h4>
          <textarea
            value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
            placeholder="輸入文字敘述（300 字內）"
            style={{ width: "95%", minHeight: "300px"}}
          />
        </div>

      </div>

      <div className="flex justify-center">
        {selectedImage && (
          <div>
            <Button className="m-2" variant="destructive" onClick={handleRemoveImage}>移除圖片</Button>
          </div>
        )}
        <Button className="m-2" variant="default" onClick={handleUpload} disabled={uploadError !== null}>上傳</Button>
      </div>

      {/* {selectedImage && (
        <ImageUploadConfirm
          storyName={storyName}
          page={page}
          selectedImage={selectedImage}
          imageDescription={imageDescription}
          show={showConfirm}
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleConfirmUpload}
        />
      )} */}
    </div>

  );
};

export default ImageUploadPage;