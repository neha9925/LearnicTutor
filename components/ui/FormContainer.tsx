"use client";

import React from "react";

export interface FormContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxWidth?: string;
  padding?: string;
  boxShadow?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  className = "",
  style = {},
  maxWidth = "max-w-3xl",
  padding = "p-6 md:p-8 lg:p-10",
  boxShadow = "0px 25px 50px 0px #00000040",
}) => {
  const defaultStyle: React.CSSProperties = {
    boxShadow,
    ...style,
  };

  const combinedClasses = `${maxWidth} mx-auto bg-white rounded-lg ${padding} ${className}`.trim();

  return (
    <div className={combinedClasses} style={defaultStyle}>
      {children}
    </div>
  );
};

export default FormContainer;

