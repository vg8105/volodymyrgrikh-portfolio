export function Skills() {
  const coreSkills = [
    "Experience Strategy",
    "Design Systems",
    "Service Design",
    "Omnichannel Experience",
    "Enterprise UX",
    "Data Platforms",
    "Cross-functional Leadership",
  ];

  const tools = [
    "Figma",
    "Businessmap",
    "Jira",
    "Microsoft 365",
    "Adobe Creative Suite",
    "Sketch",
  ];

  const areasOfImpact = [
    {
      title: "Digital Transformation & Service Modernisation",
      description: "Leading the transformation of complex operational workflows into scalable digital experiences across enterprise and public sector platforms.",
    },
    {
      title: "AI-powered Services & Intelligent Systems",
      description: "Designing and launching AI-powered digital assistants and intelligent systems to enhance customer interactions and operational efficiency.",
    },
    {
      title: "Logistics & Omnichannel Platforms",
      description: "Creating seamless experiences across physical and digital channels in nationwide logistics and postal ecosystems.",
    },
    {
      title: "Enterprise Design Systems & Governance",
      description: "Establishing design standards, reusable components and governance frameworks to enable scalable delivery across multiple business units.",
    },
    {
      title: "Agile Operating Models & Team Enablement",
      description: "Implementing agile frameworks and cross-functional collaboration models to improve delivery predictability and team performance.",
    },
    {
      title: "Product Strategy & Delivery Excellence",
      description: "Aligning design, product and engineering through outcome-driven roadmaps and continuous discovery practices.",
    },
    {
      title: "GovTech & Public Services",
      description: "Designing accessible, user-centred digital services for millions of citizens accessing critical government benefits and services.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 text-sm tracking-wide uppercase mb-6">
            Expertise & Capabilities
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-6">Skills & Tools</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Comprehensive expertise across digital experience design, product strategy, and cross-functional team leadership.
          </p>
        </div>

        {/* Core Skills */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-8">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coreSkills.map((skill, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 hover:border-black transition-colors text-center"
              >
                <p className="tracking-wide">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-8">Tools & Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 hover:border-black transition-colors text-center"
              >
                <p className="tracking-wide">{tool}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Impact - Detailed */}
        <div>
          <h2 className="text-2xl md:text-3xl tracking-tight mb-8">Areas of Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areasOfImpact.map((area, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 hover:border-black transition-colors"
              >
                <h3 className="text-lg tracking-tight mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="bg-gray-50 border-y border-gray-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-12">Methodologies & Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-lg tracking-tight mb-4">Design & Research</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• User-Centred Design</li>
                <li>• Design Thinking</li>
                <li>• Service Design</li>
                <li>• Design Systems</li>
                <li>• Accessibility Standards</li>
                <li>• Usability Testing</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-lg tracking-tight mb-4">Product & Delivery</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Agile / Scrum</li>
                <li>• Product Strategy</li>
                <li>• Roadmap Planning</li>
                <li>• Continuous Discovery</li>
                <li>• OKRs & KPIs</li>
                <li>• Stakeholder Management</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-lg tracking-tight mb-4">Leadership & Operations</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Team Building</li>
                <li>• Cross-functional Collaboration</li>
                <li>• Design Governance</li>
                <li>• DesignOps</li>
                <li>• Mentorship & Coaching</li>
                <li>• Change Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
