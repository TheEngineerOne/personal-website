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
    <div className='flex flex-col items-center gap-2'>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-full max-w-xs rounded shadow-md transition-transform hover:scale-105"
        />
      </a>
      <div>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

