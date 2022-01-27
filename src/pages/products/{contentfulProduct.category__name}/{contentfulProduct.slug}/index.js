import React from "react";
import { graphql } from "gatsby";
import Layout, { SEO } from "@components/layout";
import SingleProductContainer from "@containers/single-product";

/* 




Required Properties
code: string
slug: string
name: string
category:{
  name: string
}
sizes: [string, string]
material: [{name: string}, {name: string}]
brand: {
  name: string
}
finish: [{name: string}, {name: string}]
packagingQuantity: number
"packagingType": {
  "name": string
},

id: string
slug: string

Optional Properties
images: [{original_url:string}, {original_url:string}]
threadType: {
  name: string
}
"headType": {
  name: string
}
"tensileStrength": number,
"shape": {
  name: string
},
"whole": integer
"quantityUnit": {
  "unit": string
},




{
  "contentfulProduct": {
    "id": "b9314081-f741-5cfb-a4f3-59f6b604af46",
    "name": "Hub Bolt - Rear & Front",
    "brand": {
      "name": "Avi"
    },
    "category": {
      "name": "JCB Parts"
    },
    "finish": [
      {
        "name": "Auto Black"
      },
      {
        "name": "Golden"
      }
    ],
    "sizes": [
      "70mm",
      "80mm"
    ],
    "slug": "hub-bolt-rear-and-front",
    "threadType": null,
    "material": [
      {
        "name": "EN8D"
      }
    ],
    "images": [
      {
        "original_url": "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859552/website/images/gdjqdrjmznzvongsgj1k.png"
      }
    ],
    "headType": {name: string},
    "packagingType": {
      "name": "Bag"
    },
    "quantityUnit": {
      "unit": "Pcs"
    },
    "shape": null,
    "whole": null
  }
}

*/

const normalizeData = data => {};

const SingleProduct = ({ data: { contentfulProduct: product } }) => {
  // console.log(JSON.stringify(data, null, 2));

  //
  return (
    <Layout>
      <SEO />
      <SingleProductContainer product={product} />
    </Layout>
  );
};

// DONE: get single product data
export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      id
      name
      brand {
        name
      }
      category {
        name
      }
      finish {
        name
      }
      sizes
      slug
      threadType {
        name
      }
      material {
        name
      }
      images {
        original_url
      }
      headType {
        name
      }
      packagingType {
        name
      }
      quantityUnit {
        unit
      }
      shape {
        name
      }
      whole
      packagingQuantity
    }
  }
`;

export default SingleProduct;
