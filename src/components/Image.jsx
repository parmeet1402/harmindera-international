import React from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ fileName, alt, ...restProps }) => (
  <StaticQuery
    query={graphql`
      query BaseImageQuery {
        images: allFile {
          edges {
            node {
              relativePath
              name
              extension
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
    `}
    render={({ images }) => {
      console.log(images);
      const image = images.edges.find((n) => n.node.relativePath.includes(fileName));

      console.log(image);
      if (!image) {
        return null;
      }

      if (!image.node.childImageSharp && image.node.extension === "svg") {
        return <img {...restProps} src={image.node.publicURL} alt={alt} />;
      }

      const imageData = image.node.childImageSharp.gatsbyImageData;
      return <GatsbyImage alt={alt} image={imageData} {...restProps} />;
    }}
  />
);

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: null,
};

export default Image;
