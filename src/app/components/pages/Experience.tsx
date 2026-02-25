import { ExternalLink, TrendingUp } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  links?: string[];
  description: string[];
  impact?: string[];
}

function ExperienceItem({ title, company, period, links, description, impact }: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-gray-200 pl-8 pb-12 last:pb-0 relative">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full" />
      
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl tracking-tight mb-1">{title}</h3>
        <p className="text-lg text-gray-600 mb-2">{company}</p>
        <p className="text-sm text-gray-500 tracking-wide">{period}</p>
      </div>

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-black border border-gray-300 hover:border-black px-2 py-1 transition-colors"
            >
              <ExternalLink size={12} />
              Link
            </a>
          ))}
        </div>
      )}

      <div className="space-y-3 mb-6">
        {description.map((paragraph, index) => (
          <p key={index} className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {impact && impact.length > 0 && (
        <div className="bg-gray-50 p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={20} />
            <h4 className="text-sm tracking-wide uppercase">Impact</h4>
          </div>
          <ul className="space-y-2">
            {impact.map((item, index) => (
              <li key={index} className="text-gray-600 text-sm leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Experience() {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Head of Digital Experience, Logistics & Omnichannel",
      company: "CTT",
      period: "2025 – Present",
      links: [
        "https://www.ctt.pt",
        "https://www.ctt.pt/particulares/app-ctt",
        "https://www.ctt.pt/empresas/index",
      ],
      description: [
        "At CTT, I lead digital experience transformation across logistics, payments and retail operations. This includes the redesign of the Payshop mobile payment experience and the migration from legacy payment terminals to Android-based devices with camera and barcode scanning capabilities.",
        "Leading Digital Experience strategy across a nationwide logistics and postal ecosystem supporting consumer and enterprise services, including parcel tracking, in-store services and business operations.",
        "Driving omnichannel transformation by aligning retail store experiences with digital platforms, enabling customers to start, continue and complete services seamlessly across physical and digital touchpoints.",
        "Led the design and rollout of Helena, an AI-powered digital assistant available to end users, improving customer support, service navigation and operational efficiency across CTT's digital channels.",
        "Implemented agile ways of working and cross-functional collaboration models to align design, product and engineering teams, improving delivery predictability and reducing rework across digital initiatives.",
        "Manage a multidisciplinary team of 7 designers and 1 front-end developer, defining experience governance, standards and long-term design strategy across multiple business units.",
      ],
      impact: [
        "Modernised retail payments infrastructure across nationwide network",
        "Improved service continuity between physical stores and digital channels",
        "Increased digital adoption by simplifying logistics workflows and service entry points",
        "Reduced friction in customer support journeys through AI-assisted guidance",
        "Improved cross-channel consistency across retail and digital touchpoints",
        "Accelerated delivery through reusable components and governance",
      ],
    },
    {
      title: "Senior Product Designer, Logistics Platforms",
      company: "CTT",
      period: "Apr 2024 – Jan 2025",
      links: ["https://www.ctt.pt", "https://www.ctt.pt/particulares/app-ctt"],
      description: [
        "Led end-to-end product design for the CTT mobile app, corporate website and B2B platforms, improving user journeys across shipping, tracking and business service management.",
        "Focused on simplifying complex service flows and aligning digital experiences with real-world logistics operations through prototyping, validation and cross-functional collaboration.",
      ],
      impact: [
        "Improved task success rates by 20–30% across key service flows",
        "Reduced development rework by approximately 25%",
        "Enhanced usability across mobile and web platforms",
      ],
    },
    {
      title: "Lead UX/UI Designer, Enterprise Data Platforms",
      company: "European Patent Office",
      period: "2022 – Apr 2024",
      links: ["https://www.epo.org/en"],
      description: [
        "Led UX/UI design for an enterprise patent workbench platform enabling professionals to manage, analyse and evaluate large volumes of intellectual property data in a complex, data-intensive environment.",
        "Redesigned information architecture, navigation and data visualisation patterns to reduce cognitive load and improve discoverability.",
      ],
      impact: [
        "Reduced task completion time by 25–35%",
        "Decreased onboarding time by around 30%",
        "Improved decision confidence through clearer interaction models",
      ],
    },
    {
      title: "UX/UI Technical Team Leader, GovTech Services",
      company: "Instituto Informática, I.P.",
      period: "2020 – 2022",
      links: ["https://app.seg-social.pt/ptss/pssd/home"],
      description: [
        "Led UX/UI delivery for Portugal's Social Security Direct portal, a national GovTech platform used by millions of citizens to access benefits, manage contributions and interact with public services.",
        "Designed COVID-19 emergency support flows under tight timelines and high demand, improving accessibility and usability.",
      ],
      impact: [
        "Reduced submission errors by 30–40%",
        "Decreased call centre dependency by up to 30%",
        "Improved access to critical public services",
      ],
    },
    {
      title: "UX/UI Product Designer",
      company: "Bee Engineering",
      period: "2019 – 2020",
      links: ["https://www.bee-eng.pt"],
      description: [
        "Led the UX redesign of the corporate website to improve service discoverability, lead generation and user engagement across engineering and ICT services.",
        "Improved information architecture, navigation clarity and responsive behaviour to strengthen the company's digital presence.",
      ],
    },
    {
      title: "Head of Design",
      company: "DESATEC GmbH",
      period: "2018 – 2019",
      links: ["https://www.desatec.de/en/desatec-english/"],
      description: [
        "Led design across multiple business units, including B2B platforms, distribution systems and digital tools.",
        "Established design methodologies and introduced a design system to improve consistency, scalability and collaboration between business, product and engineering teams.",
      ],
      impact: [
        "Increased design efficiency by 20–30%",
        "Improved cross-team collaboration and delivery predictability",
      ],
    },
    {
      title: "Digital Designer",
      company: "MSTF Partners (Dentsu Group)",
      period: "2015 – 2018",
      links: ["https://www.dentsu.com/?global=true"],
      description: [
        "Designed digital campaigns and high-conversion landing pages for major brands across telecommunications, banking, mobility and energy sectors.",
        "Collaborated with marketing and development teams to create user-centred designs aligned with business goals.",
      ],
      impact: [
        "Improved conversion rates by 15–25%",
        "Reduced revision cycles by approximately 20%",
        "Enabled faster campaign launches",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 text-sm tracking-wide uppercase mb-6">
            Professional Journey
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-6">Experience</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Over 10 years leading digital product design and transformation across enterprise platforms, logistics systems, and GovTech services serving millions of users.
          </p>
        </div>

        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </section>
    </div>
  );
}