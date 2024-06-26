"use client";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";

interface FileUploadWithOutCropWithOutMultipleProps {
  onChange?: (file: File | null) => void;
  nameofFile?: string;
  fileId?: string;
  error?: boolean;
}

export const FileUploadWithOutCropWithOutMultiple: React.FC<
  FileUploadWithOutCropWithOutMultipleProps
> = (props) => {
  const { onChange } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      if (onChange) {
        onChange(file);
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewImage(null);
    if (onChange) {
      onChange(null);
    }
    // Clear the value of the existing input to remove the selected file
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {}, [selectedFile]);

  return (
    <div className={"max-h-auto cursor-pointer"}>
      <label htmlFor={props.fileId}>
        {!selectedFile && (
          <div className={"drop-content-upper"}>
            <img src={"/module/upload-icon.png"} />
            <div className={"drop-content"}>
              <h3>Drop file to upload or <span className="browse-name">browse</span></h3>
              <p>Maximum file size 5000 pixel</p>
            </div>
          </div>
        )}
        <input
          accept="image/png, image/jpeg, image/jpg"
          className={"hidden"}
          id={props.fileId}
          type="file"
          onChange={handleFileChange}
          ref={(ref: HTMLInputElement | null) => {
            if (ref) {
              fileInputRef.current = ref;
            }
          }}
         
        />
      </label>
      {previewImage && (
        <img
          className={"object-cover"}
          src={previewImage}
          alt="Preview"
          style={{ maxWidth: "100%", maxHeight: "200px" }}
        />
      )}
      {props.error && (
        <div className="font-semibold mt-2 text-red-700">Required</div>
      )}
      {selectedFile && (
        <button
          className={"font-semibold mt-2 text-red-700"}
          type="button"
          onClick={handleRemoveFile}
        >
          Remove
        </button>
      )}
    </div>
  );
};
