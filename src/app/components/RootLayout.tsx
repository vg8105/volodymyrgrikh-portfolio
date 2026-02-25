import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    // Update page title and meta description based on route
    const titles: Record<string, string> = {
      "/": "Volodymyr Grikh | Head of Digital Experience | Logistics, Payments & GovTech",
      "/work": "Case Studies | Volodymyr Grikh | Digital Product Design",
      "/about": "About | Volodymyr Grikh | Design Leader",
      "/experience": "Experience | Volodymyr Grikh | 10+ Years Digital Transformation",
      "/skills": "Skills | Volodymyr Grikh | Product Design & Leadership",
      "/contact": "Contact | Volodymyr Grikh | Let's Connect",
    };

    const descriptions: Record<string, string> = {
      "/": "Head of Digital Experience designing logistics platforms, payment systems and GovTech services. Leading digital transformation, retail tech modernisation and AI-assisted services at CTT.",
      "/work": "Case studies showcasing digital transformation projects across logistics, payments, GovTech and enterprise platforms serving millions of users.",
      "/about": "Design leader with 10+ years experience building scalable digital platforms across logistics, payments and public services.",
      "/experience": "Professional experience leading digital transformation across CTT, European Patent Office, Portugal Social Security and enterprise platforms.",
      "/skills": "Core capabilities in digital transformation, product strategy, design systems, enterprise UX and cross-functional leadership.",
      "/contact": "Get in touch for opportunities in product design, digital transformation and design leadership.",
    };

    document.title = titles[location.pathname] || titles["/"];
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descriptions[location.pathname] || descriptions["/"]);

    // Add keywords meta
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Digital Transformation, Payments UX, Retail Tech, Omnichannel CX, Enterprise UX, Platform Design, AI Integration, Service Design, DesignOps, Product Strategy, UX Design, Product Design, Design Leadership');

    // Add author meta
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', 'Volodymyr Grikh');

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: titles[location.pathname] || titles["/"] },
      { property: 'og:description', content: descriptions[location.pathname] || descriptions["/"] },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `https://volodymyrgrikh.vercel.app${location.pathname}` },
    ];

    ogTags.forEach(({ property, content }) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navigation />
      <main id="main-content" className="flex-1" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}