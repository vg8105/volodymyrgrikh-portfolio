export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  tagline: string;
  overview: string;
  coverImage: string;
  challenge: {
    title: string;
    description: string[];
  };
  approach: {
    title: string;
    description: string[];
    methodology: string[];
  };
  beforeAfter?: {
    title: string;
    before: string[];
    after: string[];
    measurement: string;
  };
  solution: {
    title: string;
    description: string[];
    keyFeatures: string[];
  };
  impact: {
    title: string;
    metrics: {
      value: string;
      label: string;
      description: string;
    }[];
    outcomes: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ctt-helena",
    title: "Omnichannel transformation, Payshop payments and retail hardware modernisation",
    company: "CTT",
    role: "Head of Digital Experience (promoted from Senior Product Designer)",
    period: "April 2024 – Present",
    tagline: "Transforming CTT's nationwide logistics and payments network by connecting in-store operations with digital services, modernising payment infrastructure and enabling seamless omnichannel journeys",
    overview: "CTT operates a nationwide logistics and payments network that combines physical retail stores, self-service points and digital platforms. My work focused on transforming this ecosystem by connecting in-store operations with digital services, modernising payment infrastructure and enabling seamless omnichannel journeys. I led omnichannel logistics and retail services, designed Helena AI assistant for guided self-service, redesigned the Payshop mobile payment experience, and drove the migration from legacy payment terminals to Android-based devices with camera and barcode scanning capabilities.",
    coverImage: "https://images.unsplash.com/photo-1707638841308-252461607951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW1wbGUlMjBsaW5lJTIwYXJ0JTIwaWxsdXN0cmF0aW9uJTIwbW9ub2Nocm9tZSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MTk3OTQ4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
      title: "The Challenge",
      description: [
        "CTT faced fragmented journeys between store and digital channels. Legacy payment terminals were limiting data capture and service speed. Manual data entry was increasing errors and operational overhead. Complex payment flows reduced clarity and customer trust. The business needed to support logistics, payments and identity verification in unified experiences.",
        "Customers were frustrated. They would start a shipping request at a CTT store, only to find they couldn't continue it on their phone. Support teams were overwhelmed with questions that could have been answered digitally. Digital adoption was stagnating because the experiences felt disconnected from the trusted physical network people knew.",
        "The payment infrastructure was outdated. Legacy terminals required manual data entry for every transaction, creating opportunities for errors and slowing down service. Staff had no way to scan barcodes or capture documents, forcing customers to dictate long reference numbers while queues grew behind them.",
      ],
    },
    approach: {
      title: "My Approach",
      description: [
        "I mapped end-to-end service blueprints connecting retail operations and digital touchpoints. I spent weeks in CTT stores across Lisbon, watching real customers struggle with services. I talked to counter staff, observed mobile usage patterns, and mapped every friction point. The insights were clear: people wanted continuity. They wanted to start something digitally and finish it in-store, or vice versa, without repeating themselves.",
        "I redesigned the Payshop payment experience to simplify flows and improve transaction transparency. Payment journeys were too complex, with unclear status and confusing terminology. I stripped away unnecessary steps, rewrote content in plain Portuguese, and introduced real-time validation to catch errors before submission instead of after.",
        "I led UX strategy for migrating legacy payment terminals to Android devices with camera and barcode scanning. This wasn't just a technology upgrade, it was a service transformation. Barcode scanning eliminated manual entry errors. Camera capture enabled document verification. Real-time data sync connected stores with digital systems, enabling true omnichannel continuity.",
        "I introduced Helena AI to guide users through complex services and reduce support dependency. Helena feels less like a chatbot and more like a knowledgeable CTT staff member who happens to be available 24/7. Natural language, contextual responses, and the ability to hand off to a human when needed.",
      ],
      methodology: [
        "Spent 3 weeks observing customers across 12 retail locations to understand real behavior",
        "Mapped end-to-end service blueprints connecting retail operations and digital touchpoints",
        "Redesigned Payshop payment experience with simplified flows and improved transparency",
        "Led UX strategy for Android terminal migration with camera and barcode scanning",
        "Prototyped Helena's conversational flows with real users before any development",
        "Established enterprise design system to standardise patterns and accelerate delivery",
        "Implemented continuous discovery, every design decision validated with real data",
      ],
    },
    beforeAfter: {
      title: "Before vs After — Payments and in-store technology",
      before: [
        "Legacy Payshop terminals with limited scanning capabilities",
        "Manual data entry increasing errors and service time",
        "Fragmented payment flows causing user confusion",
        "No real-time capture of barcodes or documents",
        "Customers restarting journeys between store and digital channels",
      ],
      after: [
        "Android-based payment terminals with camera and barcode scanning",
        "Real-time data capture reducing manual input and errors",
        "Simplified Payshop payment flows with clearer transaction steps",
        "Faster and more accurate in-store service",
        "Seamless store-to-digital journeys improving continuity",
      ],
      measurement: "Measured through task completion time, error rates, support requests and in-store service efficiency.",
    },
    solution: {
      title: "What I Built",
      description: [
        "I enabled real-time data capture to reduce manual entry and improve accuracy. The new Android terminals transformed how staff interact with customers. Scan a barcode instead of typing a 16-digit reference. Capture a document photo instead of photocopying. See customer history instantly instead of asking them to repeat information they already provided online.",
        "The omnichannel transformation required designing new service flows that preserved context across channels. If you started a return request on the app, the store staff could see it instantly and continue from where you left off. This required deep collaboration with engineering and retail operations, alignment I drove through shared customer journey workshops.",
        "I established an enterprise design system to standardise patterns and accelerate delivery. 32 components covering 80% of use cases. Clear governance. Documentation that developers actually used. This accelerated delivery by weeks per initiative and ensured consistency across the entire CTT digital ecosystem.",
      ],
      keyFeatures: [
        "Payshop mobile payment redesign — simplified flows, improved transaction transparency",
        "Android terminal migration — camera and barcode scanning replacing manual data entry",
        "Helena AI Assistant — answers customer questions in Portuguese, 24/7 availability",
        "Cross-channel service flows — start in-store, finish on mobile, or vice versa",
        "Design system (32 components) — core UI patterns ensuring consistency",
        "Real-time data capture — reduced manual entry errors and improved accuracy",
        "Document verification — camera-based capture for identity and payment validation",
      ],
    },
    impact: {
      title: "Real Impact",
      metrics: [
        {
          value: "31%",
          label: "Reduction in support queries",
          description: "Helena handles routine questions, freeing teams for complex cases",
        },
        {
          value: "24%",
          label: "Increase in digital adoption",
          description: "Customers now choose digital for tasks previously done in-store",
        },
        {
          value: "3 weeks",
          label: "Faster feature delivery",
          description: "Design system reduced design-to-development time significantly",
        },
        {
          value: "570+",
          label: "Locations integrated",
          description: "Seamless omnichannel services across entire retail network",
        },
      ],
      outcomes: [
        "Reduced manual entry errors through camera and barcode scanning capabilities",
        "Improved in-store service speed and transaction accuracy across retail network",
        "Increased clarity and trust in digital payment flows through Payshop redesign",
        "Enabled scalable payments infrastructure across nationwide retail network",
        "Improved cross-channel continuity between store and digital services",
        "Reduced service friction through AI-assisted guidance with Helena",
      ],
    },
  },
  {
    id: "epo-patent-platform",
    title: "AI-Powered Enterprise Data Platform",
    company: "European Patent Office",
    role: "Lead UX/UI Designer, Enterprise Data Platforms",
    period: "2022 – 2024",
    tagline: "Designing AI-powered tools that help patent professionals across Europe make sense of millions of complex documents faster and smarter",
    overview: "I joined the European Patent Office to solve a problem that fascinated me: how do you design for people who need to process massive amounts of complex data daily? Patent examiners were drowning in information, spending 40+ minutes per evaluation because the platform wasn't helping them think—it was forcing them to hunt. I led the complete UX redesign of an AI-powered patent workbench, focusing on intelligent document analysis, automated technical drawing recognition, and cognitive load reduction.",
    coverImage: "https://images.unsplash.com/photo-1574359219611-a3031f074b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmUlMjBsaW5lJTIwYXJ0JTIwaWxsdXN0cmF0aW9uJTIwbWluaW1hbCUyMGRyYXdwb25nJTIwYmxhY2slMjB3aGl0ZXxlbnxlMXx8fHwxNzcxOTc5MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
      title: "The Challenge",
      description: [
        "I shadowed patent examiners for weeks and watched them struggle. Not because they weren't skilled—they were experts—but because they were manually reading hundreds of pages of technical documents and analyzing complex engineering drawings for every patent application. The platform had rudimentary AI, but it wasn't surfacing insights where examiners actually needed them.",
        "Critical data was buried. Navigation was a maze. New examiners took 4-6 weeks to become proficient because the learning curve was brutal. But the bigger opportunity I saw: AI could read technical drawings, extract key claims from dense legal text, and surface prior art automatically—if the UX made it useful instead of overwhelming.",
        "The business impact was real: extended review times meant slower patent approvals, which meant inventors waited longer. The UX problem had economic consequences across Europe.",
      ],
    },
    approach: {
      title: "My Approach",
      description: [
        "I embedded myself with 12 patent examiners across three countries, watching them work, asking why they clicked what they clicked, understanding their mental models. I learned their language—prior art, claims analysis, classification codes. I also spent weeks with the AI engineering team, understanding what the technology could actually do versus what it promised.",
        "The breakthrough insight: examiners didn't want AI to replace their expertise—they wanted it to eliminate the tedious manual work so they could focus on complex decision-making. My job was designing how AI insights surfaced at exactly the right moment in their workflow, not buried in separate tabs.",
        "For the technical drawing analysis feature, I prototyped obsessively. How do you show that AI has identified key mechanical components in a patent diagram? 11 iterations before landing on an overlay system that felt natural. Each iteration tested with real users, real patent applications, real tasks.",
      ],
      methodology: [
        "Embedded with 12 examiners across Germany, Netherlands, and France for contextual research",
        "Collaborated daily with AI/ML engineers to understand capabilities and constraints",
        "Built 53 interactive prototypes tested in 2-week validation cycles",
        "Designed AI-powered features: automated document analysis, technical drawing recognition, prior art recommendations",
        "Ran accessibility audits with screen reader users to ensure WCAG 2.1 AA compliance",
        "Created a focused design system (28 components) for AI-assisted data-heavy interfaces",
      ],
    },
    solution: {
      title: "What I Built",
      description: [
        "I redesigned the platform around AI-augmented workflows. AI now reads patent applications automatically, extracting key claims, identifying relevant prior art, and analyzing technical drawings for mechanical components and design patterns. The UX surfaces these insights contextually—exactly when examiners need them, not as separate reports they have to hunt for.",
        "For technical drawing analysis, I designed an overlay system where AI highlights recognized components directly on patent diagrams. Examiners can see what the AI identified, verify accuracy, and dive deeper with one click. This turned a 20-minute manual process into 2 minutes of verification.",
        "I implemented progressive disclosure throughout: AI summaries by default, with ability to drill into technical details. This made the platform approachable for new users while preserving depth for veterans. And critically, I worked with AI engineers to optimize model performance based on UX insights—user research directly improved the AI.",
      ],
      keyFeatures: [
        "AI-powered document analysis — automatic extraction of claims, classifications, and key technical details",
        "Technical drawing recognition — AI identifies mechanical components, design patterns in patent diagrams",
        "Smart prior art recommendations — machine learning surfaces relevant existing patents automatically",
        "Task-based navigation — reorganized around examiner workflows, not technical features",
        "Contextual AI insights — automated analysis surfaced at the right moment in workflow",
        "Progressive disclosure — complexity hidden by default, accessible for power users",
      ],
    },
    impact: {
      title: "Real Impact",
      metrics: [
        {
          value: "45%",
          label: "Faster technical drawing analysis",
          description: "AI recognition reduced manual diagram analysis from 20 minutes to under 2 minutes",
        },
        {
          value: "28%",
          label: "Faster overall task completion",
          description: "Patent evaluations completed in 32 minutes vs. 44 minutes previously",
        },
        {
          value: "65%",
          label: "Faster onboarding",
          description: "New examiners proficient in 10 days instead of 4-6 weeks",
        },
        {
          value: "34 pts",
          label: "NPS increase",
          description: "User satisfaction jumped from 12 to 46 in post-launch surveys",
        },
      ],
      outcomes: [
        "AI eliminated tedious manual work — examiners focus on complex decisions, not document hunting",
        "Technical drawing analysis transformed — what took 20 minutes now takes 2 minutes with AI recognition",
        "Faster, more confident decisions — contextual AI insights reduced second-guessing",
        "Onboarding is no longer a bottleneck — new hires contribute productively in days, not weeks",
        "Users actually enjoy the platform — NPS scores shifted from detractors to promoters",
        "Faster patent processing — reduced evaluation time compounds across thousands of cases annually",
      ],
    },
  },
  {
    id: "govtech-social-security",
    title: "National GovTech Crisis Response",
    company: "Portugal Social Security (Instituto Informática, I.P.)",
    role: "UX/UI Technical Team Leader",
    period: "2020 – 2022",
    tagline: "Designing emergency COVID-19 support flows for millions of Portuguese citizens under brutal time pressure",
    overview: "March 2020. COVID-19 hits Portugal. Millions need emergency financial support, but the Social Security portal wasn't built for this. I led the UX emergency response team, redesigning critical flows under conditions I'd never faced: deploy in days, not months, with lives depending on it. This project taught me what design really means when the stakes are existential.",
    coverImage: "https://images.unsplash.com/photo-1768327239938-e58c33dc4707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGlsbHVzdHJhdGlvbiUyMGxpbmUlMjBhcnQlMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MTk3OTM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
      title: "The Challenge",
      description: [
        "The existing platform had 38% submission error rates. Forms were drowning users in bureaucratic language. Mobile optimization was an afterthought, but 68% of users were on phones—many on older devices with spotty connections. Call centers were overloaded. Physical offices were closed due to lockdown.",
        "Families were panicking. Rent was due. Bills were piling up. Every hour of delay meant someone without income. The pressure was crushing, but it clarified everything: strip away anything that doesn't help someone get support faster.",
        "I had no time for the usual design process. No weeks of research. No lengthy stakeholder alignment. I had to make fast, confident decisions based on fundamentals: clarity, simplicity, accessibility.",
      ],
    },
    approach: {
      title: "My Approach",
      description: [
        "I assembled a crisis team: 3 designers, 2 developers, 1 content strategist, direct line to policy experts. Daily standups. Deploy every 48 hours. Test with real citizens every afternoon. If something confused even one person, I simplified it further.",
        "I rewrote every form question myself. Not delegated, not reviewed—written. Bureaucratic Portuguese became plain language: 'Do you live alone?' instead of 'Indicate household composition status.' Every word earned its place or got cut.",
        "I called the support center daily. 'What are people struggling with right now?' became my most important user research. Their feedback went into designs by evening, deployed by next morning. Tight feedback loops saved lives.",
      ],
      methodology: [
        "Daily user testing with 5-8 citizens representing different demographics and tech literacy",
        "48-hour deployment cycles — design, validate, deploy, repeat",
        "Plain language workshops — rewrote all content with policy teams and legal compliance",
        "Mobile-first, low-bandwidth optimization — 68% of users were on smartphones",
        "Daily support center check-ins — real-time feedback from frontline teams",
        "Accessibility validation with elderly users and assistive technology",
      ],
    },
    solution: {
      title: "What I Built",
      description: [
        "I reduced the emergency support form from 24 fields to 8. I questioned every requirement: 'Is this actually needed, or is it bureaucratic inertia?' If policy teams couldn't justify why it was critical, it got cut. The result: a form most people could complete in under 3 minutes.",
        "I added progress indicators and contextual help at every step. Anxiety was high—people needed to know they were on the right path. Real-time validation caught errors immediately instead of after submission, when fixing them felt impossible.",
        "Mobile optimization wasn't a nice-to-have, it was survival. Large touch targets. Minimal scrolling. Works on 3G. I tested on a 5-year-old Android phone with a cracked screen—if it worked there, it would work anywhere.",
      ],
      keyFeatures: [
        "Simplified emergency forms — reduced from 24 to 8 fields, completion time under 3 minutes",
        "Plain language content — rewrote all copy, eliminated bureaucratic jargon completely",
        "Progress indicators — clear step-by-step guidance reducing anxiety and abandonment",
        "Real-time validation — errors caught before submission, not after",
        "Mobile-optimized for low-end devices — works reliably on 3G, older smartphones",
        "Contextual help at every step — explanations in simple Portuguese where needed",
      ],
    },
    impact: {
      title: "Real Impact",
      metrics: [
        {
          value: "38% → 6%",
          label: "Submission error rate drop",
          description: "Errors reduced from 38% to 6% through simplified forms and real-time validation",
        },
        {
          value: "27%",
          label: "Decrease in support calls",
          description: "Clear guidance reduced call center dependency during peak crisis",
        },
        {
          value: "1.8M+",
          label: "Citizens served",
          description: "Over 1.8 million emergency support applications processed digitally",
        },
        {
          value: "48hrs",
          label: "Deployment cycle",
          description: "Continuous improvements shipped every 2 days during crisis period",
        },
      ],
      outcomes: [
        "Families got support when they needed it most — streamlined process meant faster approvals",
        "Elderly and low-tech users could self-serve — accessibility improvements removed barriers",
        "Support teams focused on complex cases — simple flows reduced call volume significantly",
        "Trust in government digital services increased — crisis response proved systems could work",
        "Sustainable patterns for future services — simplified approach now standard across platform",
      ],
    },
  },
  {
    id: "desatec-design-system",
    title: "Enterprise Design System from Scratch",
    company: "DESATEC GmbH",
    role: "Head of Design",
    period: "2018 – 2019",
    tagline: "Building scalable design infrastructure to align 5 business units and eliminate duplicated work",
    overview: "When I joined DESATEC as Head of Design, chaos was the norm. Five business units, each building B2B platforms independently. Same buttons designed five different ways. Same forms, different patterns. Designers and developers frustrated, delivery slow, quality inconsistent. I built the company's first design system—not because systems are trendy, but because we were bleeding time and money to inefficiency.",
    coverImage: "https://images.unsplash.com/photo-1732997345946-700efbeb42e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaWxsdXN0cmF0aW9uJTIwZHJhd2luZyUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzcxOTc5MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: {
      title: "The Challenge",
      description: [
        "I audited all five platforms in my first month. The findings were stark: 12 different button styles. 7 variations of form inputs. Inconsistent spacing, colors, typography. Every team reinventing every component. Designers spent more time debating pixel perfection than solving user problems.",
        "Engineering was equally frustrated. Every handoff required custom implementation because nothing was reusable. QA struggled because behavior was unpredictable across products. Business was paying for the same work five times over.",
        "The political challenge was harder than the design challenge. Convincing five business units to adopt shared standards meant navigating egos, turf wars, and 'but our users are different' objections. I needed buy-in from leadership, trust from teams, and results fast enough to prove it was worth the effort.",
      ],
    },
    approach: {
      title: "My Approach",
      description: [
        "I started with an audit workshop, bringing all five teams together. I showed them the button chaos side-by-side. The reaction was visceral: 'This is embarrassing.' Embarrassment became motivation. People wanted to fix it.",
        "I didn't try to boil the ocean. I identified the 20 components that appeared in every product: buttons, forms, tables, navigation. If I could standardize those, I'd eliminate 70% of the duplication. The Pareto principle applied to design systems.",
        "I paired designers with front-end developers to build components together—no handoffs, just collaboration. This ensured what I designed could actually be implemented efficiently. It also built relationships that made governance easier later.",
      ],
      methodology: [
        "Cross-team audit workshop identifying inconsistencies and prioritizing pain points",
        "Stakeholder interviews with engineering and business leads to align on ROI and goals",
        "Component prioritization using frequency analysis — focused on top 20 patterns first",
        "Designer-developer pairing to ensure components were buildable and maintainable",
        "Comprehensive documentation with usage guidelines, code examples, and accessibility notes",
        "Governance framework: contribution guidelines and review process to keep system healthy",
      ],
    },
    solution: {
      title: "What I Built",
      description: [
        "I built a lean design system: 26 core components covering buttons, forms, navigation, data tables, and feedback patterns. Not 200 components. Not every possible variation. Just the essentials, done exceptionally well, with clear documentation.",
        "Every component had three levels of documentation: design specs (Figma), implementation code (React), and usage guidelines (when to use, when not to use, accessibility considerations). This meant designers and developers spoke the same language.",
        "Governance was critical. I created a contribution process: propose, review, implement. This kept quality high while allowing teams to extend the system when truly needed. It wasn't about control—it was about consistency with flexibility.",
      ],
      keyFeatures: [
        "26 core components — focused library covering 70% of use cases across all platforms",
        "Design and code in sync — every component designed in Figma, built in React",
        "Comprehensive documentation — usage guidelines, accessibility notes, code examples",
        "Governance framework — clear process for contributions and updates",
        "Cross-team training — workshops ensuring designers and developers could use system effectively",
        "Living system — continuous updates based on real team feedback and usage data",
      ],
    },
    impact: {
      title: "Real Impact",
      metrics: [
        {
          value: "40%",
          label: "Reduction in design time",
          description: "Designers stopped reinventing components and focused on user problems",
        },
        {
          value: "35%",
          label: "Faster development",
          description: "Developers reused components instead of building from scratch each time",
        },
        {
          value: "26",
          label: "Components (not 200)",
          description: "Lean, focused library covering essential patterns used across all products",
        },
        {
          value: "5",
          label: "Business units aligned",
          description: "Unified system across previously siloed teams and platforms",
        },
      ],
      outcomes: [
        "Teams shipped features faster — reusable components accelerated every project",
        "Consistent user experience — customers saw coherent design across all products",
        "Designers focused on problems, not pixels — less time debating button styles, more solving UX",
        "Engineering efficiency improved — shared component library reduced technical debt",
        "Cross-team collaboration increased — shared language broke down silos",
      ],
    },
  },
];