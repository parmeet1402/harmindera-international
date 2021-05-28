import React from "react";
import Navbar from "./desktop/navbar";
import Footer from "./desktop/footer";

interface Props {
  name?: string;
  children: React.ReactNode | React.ReactChildren;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

/* 
 - Layout Component (Master)
 - SEO Component 
 - Navbar Component
 - Footer Component

 - Flex Component
 - Grid Component

 - Section Component

 - Overlay Component
 - Transition Component
 



 Extras
 - Banner Component
 - Breadcrumbs Component


*/
