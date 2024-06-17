
import './Gallery.css'
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './Gallery.css';


const images = [
  
  'images/RoyalJaipur.JPG',
  
];

const Gallery: React.FC = () => {

  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        name
      }
    }
  }
`);
const images = data.allFile.nodes;
  return (
    <div className="overflow-hidden  z-0">
    <div className=" inset-0 flex animate-scroll">
      {images.map((image: any, index: any) => {
        const img = getImage(image.childImageSharp.gatsbyImageData);
        return (
          <div key={image.id} className="flex-shrink-0 w-full h-full opacity-75 hover:opacity-100 transition-opacity duration-1000">
            <GatsbyImage image={img} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Gallery;