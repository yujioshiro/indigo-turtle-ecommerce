import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }: AvatarProps) => {
  return (
    <div className="avatar">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;