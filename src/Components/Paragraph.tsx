import React from "react";

type ParagraphProps = {
  title?: string;
  text: string;
};

export const Paragraph = ({ title, text }: ParagraphProps) => {
  return (
    <div className="p-4">
      {title && <h1 className="text-black">{title}</h1>}
      <p className="text-black">{text}</p>
    </div>
  );
};
