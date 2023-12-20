// 'use client';

import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

interface ImageUploadConfirmProps {
  bookId: number;
  bookname: string;
  page: number;
  imageFile: File;
  selectedImage: string | null;
  imageDescription: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ImageUploadConfirm: React.FC<ImageUploadConfirmProps> = ({
  bookname,
  page,
  selectedImage,
  imageFile,
  imageDescription,
  onCancel,
  onConfirm,
}) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const params = searchParams.get("book_id");

  // console.log("Now book_id:", params);

  const uploadConfirm = async () => {
    // 創建一個 FormData 對象，用於包裝需要上傳的數據
    const formData = new FormData();

    // if (selectedImage && selectedImage instanceof File) {

    if (selectedImage && imageFile instanceof File) {
      formData.append("file", imageFile);
      // formData.append('file', selectedImage);
      formData.append("text_description", imageDescription);
      // console.log(formData.values)
    } else {
      console.error("Invalid or missing file");
      return;
    }

    console.log("Uploaded Image:", selectedImage);
    console.log("Image file:", imageFile);
    console.log("Image Description:", imageDescription);

    // upload to DB
    try {
      await axios.post(
        `http://127.0.0.1:5000/story/upload/${params}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("upload to DB.");

      // 回到那個故事的頁面
      router.push(`/story/book_id?book_id=${params}`);
    } catch (error) {
      console.error("Uploading error:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          準備上傳您的成品至：{bookname} 第 {page} 頁
        </h2>
      </div>

      <div className="bg-slate-300 rounded-lg flex justify-center p-4">
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            {selectedImage && (
              <div>
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            )}
          </div>

          <div style={{ flex: 1, marginLeft: "20px" }}>{imageDescription}</div>
        </div>
      </div>

      <div className="flex justify-center columns-2">
        <span>
          <Button className="m-2" variant="destructive" onClick={onCancel}>
            返回
          </Button>
        </span>
        <span>
          <Button className="m-2" onClick={uploadConfirm}>
            確定上傳
          </Button>{" "}
        </span>
      </div>
    </div>
  );
};

export default ImageUploadConfirm;
