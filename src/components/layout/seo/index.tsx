import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
};
const SEO = ({ title = "", description = "", image = "", article = false }: Props) => {
  // console.log(title, description, image, article);
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            siteUrl
            keywords
            description
            author
            lang
            image
          }
        }
      }
    `,
  );

  // console.log(site);

  const { siteMetadata } = site;

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: `${article ? "" : siteMetadata.siteUrl}${image || siteMetadata.image}`,
    url: `${siteMetadata.siteUrl}${pathname}`,
  };

  const isHomepage = pathname === "/";

  return (
    <Helmet
      title={seo.title}
      titleTemplate={isHomepage ? seo.title : siteMetadata.titleTemplate}
      htmlAttributes={{ lang: siteMetadata.lang }}
    >
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};
export default SEO;

/* 
const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.google}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`;

*/

/* 
<meta name="description" content={description} />
			<meta name="image" content={Thumbnail} />

			<meta property="og:url" content={`${url}${location}/?ref=smakosh.com`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={Thumbnail} />
			<meta property="fb:app_id" content={social.facebook} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={socialLinks.twitter} />
			<meta name="twitter:site" content={social.twitter} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image:src" content={Thumbnail} />
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<link rel="publisher" href={socialLinks.google} />
			<title>{title}</title>
			<html lang="en" dir="ltr" />

*/
