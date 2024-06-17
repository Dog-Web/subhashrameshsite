import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface GalleryLayoutProps {
  showImageOnLeft: boolean;
  textContent: React.ReactNode;
  imageSrc: string;
}

const GalleryLayout: React.FC<GalleryLayoutProps> = ({ showImageOnLeft, textContent, imageSrc }) => {
  return (
    <div className={`flex flex-col md:flex-row ${showImageOnLeft ? 'flex-row-reverse' : ''} items-center justify-between my-8`}>
      <div className="md:w-1/2 p-4">
        <StaticImage src={imageSrc} alt="Gallery Image" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 p-4">
        {textContent}
      </div>
    </div>
  );
};

export default GalleryLayout;