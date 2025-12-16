"use client";

import React, { useRef, useState } from "react";
import { CloudUpload, LucideIcon } from "lucide-react";
import FormLabel from "@/components/ui/FormLabel";
import { typography, FONT_FAMILY } from "@/theme";

export interface FileUploadProps {
  id: string;
  label?: string;
  accept?: string;
  maxSize?: string;
  icon?: LucideIcon;
  mainText?: string;
  subText?: string;
  onFileSelect?: (file: File | null) => void;
  className?: string;
  labelStyle?: React.CSSProperties;
  uploadTextStyle?: React.CSSProperties;
  uploadSubtextStyle?: React.CSSProperties;
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  label,
  accept = ".pdf,.doc,.docx",
  maxSize = "5MB",
  icon: Icon = CloudUpload,
  mainText = "Click to upload or drag and drop",
  subText,
  onFileSelect,
  className = "",
  labelStyle = {},
  uploadTextStyle = {},
  uploadSubtextStyle = {},
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Default subtext based on accept types
  const getDefaultSubtext = () => {
    if (subText) return subText;
    
    if (accept.includes(".mp4") || accept.includes(".mov") || accept.includes(".avi")) {
      return `MP4, MOV, AVI (Max ${maxSize})`;
    }
    return `PDF, DOC, DOCX (Max ${maxSize})`;
  };


  const defaultUploadTextStyle: React.CSSProperties = {
    ...typography.card.bodyMd,
    color: "#4B5563",
    fontWeight: 500,
    fontFamily: FONT_FAMILY,
    marginBottom: "8px",
  };

  const defaultUploadSubtextStyle: React.CSSProperties = {
    ...typography.card.bodySm,
    color: "#6B7280",
    fontFamily: FONT_FAMILY,
  };

  const handleFileChange = (file: File | null) => {
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileChange(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      handleFileChange(file);
      // Also set it to the input for form submission
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  };

  return (
    <div className={className}>
      {label && (
        <FormLabel labelStyle={labelStyle}>
          {label}
        </FormLabel>
      )}
      <label htmlFor={id} className="block">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
            isDragging ? "border-[#572EEE]" : "border-gray-300 hover:border-[#572EEE]"
          }`}
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Icon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="mb-2" style={{ ...defaultUploadTextStyle, ...uploadTextStyle }}>
            {mainText}
          </p>
          <p style={{ ...defaultUploadSubtextStyle, ...uploadSubtextStyle }}>
            {getDefaultSubtext()}
          </p>
        </div>
      </label>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="hidden"
        id={id}
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default FileUpload;

