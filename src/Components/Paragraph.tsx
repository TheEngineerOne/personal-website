type ParagraphProps = {
  title?: string;
  text: string;
};

export const Paragraph = ({ title, text }: ParagraphProps) => {
  return (
    <div className="p-4">
      {title && <h1 className="text-gray-50">{title}</h1>}
      <p className="text-gray-50">{text}</p>
    </div>
  );
};
