import React from 'react';

interface ProjectCardProps {
  imageUrl: string;
  altText: string;
  href: string;
  text: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  altText,
  href,
  text
}) => {
  return (
    <div className='flex flex-col items-center gap-2 w-full p-2'>
      <a href={href} target="_blank" rel="noopener noreferrer" className="w-full transiion-transform hover:scale-105">
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-full mx-auto center rounded shadow-md"
        />
        <div className="mx-auto text-center text-xl">
          {text}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;

