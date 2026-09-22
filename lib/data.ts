export const company = {
  name: "NEXABLOOM",
  tagline: "Build Better. Scale Faster.",
  description:
    "NEXABLOOM helps organizations design, build, modernize, and operate mission-critical software systems.",
  email: "hello@nexa-blooms.com",
  phone: "+1 (270) 555-0148",
  address: "1811 N Dixie Hwy Ste 111, Elizabethtown, KY 42701",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "cloud-engineering",
    title: "Cloud Engineering",
    short: "Scalable, secure, and resilient cloud platforms.",
    description:
      "We design and operate cloud architectures that scale with your business — from landing zones to production workloads.",
    bullets: [
      "Cloud landing zones and governance",
      "Kubernetes and container platforms",
      "Cost optimization and FinOps",
      "High-availability architecture",
    ],
    icon: "cloud",
    tint: "blue",
  },
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom software built around your business.",
    description:
      "From greenfield products to complex enterprise systems, our engineers ship software that is reliable, maintainable, and fast.",
    bullets: [
      "Product engineering and MVPs",
      "Enterprise application development",
      "API and integration platforms",
      "Quality engineering and DevEx",
    ],
    icon: "code",
    tint: "indigo",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Intelligent automation that scales with you.",
    description:
      "We embed AI and workflow automation into real operations so teams move faster with fewer manual steps.",
    bullets: [
      "Generative AI copilots and RAG",
      "Process mining and orchestration",
      "MLOps and model operations",
      "Intelligent document processing",
    ],
    icon: "spark",
    tint: "violet",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    short: "Turn data into decisions your teams can trust.",
    description:
      "Modern data platforms, pipelines, and analytics that give leaders a single source of truth.",
    bullets: [
      "Lakehouse and warehouse design",
      "Real-time streaming pipelines",
      "Analytics and semantic layers",
      "Data quality and governance",
    ],
    icon: "data",
    tint: "teal",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Protect digital assets without slowing delivery.",
    description:
      "Security architecture, identity, and compliance programs built into how you design and ship software.",
    bullets: [
      "Zero-trust architecture",
      "Application and cloud security",
      "Identity and access management",
      "SOC 2 and regulatory readiness",
    ],
    icon: "shield",
    tint: "sky",
  },
  {
    slug: "devops",
    title: "DevOps",
    short: "Faster, more reliable software delivery.",
    description:
      "CI/CD, platform engineering, and SRE practices that shorten lead time and raise reliability.",
    bullets: [
      "CI/CD and release automation",
      "Platform engineering",
      "Observability and SRE",
      "Infrastructure as code",
    ],
    icon: "cycle",
    tint: "cyan",
  },
] as const;

export const solutions = [
  {
    slug: "legacy-modernization",
    title: "Modernize Legacy Systems",
    description:
      "Incrementally replace brittle core systems with cloud-native platforms — without pausing the business.",
    icon: "layers",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Reimagine customer and employee journeys with software, data, and operating-model change.",
    icon: "globe",
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    description:
      "Move workloads with a clear landing zone, cutover plan, and measurable cost and performance gains.",
    icon: "cloud",
  },
  {
    slug: "ai-transformation",
    title: "AI Transformation",
    description:
      "Identify high-ROI use cases and productionize AI with governance, evaluation, and human-in-the-loop design.",
    icon: "spark",
  },
  {
    slug: "enterprise-apps",
    title: "Enterprise Application Development",
    description:
      "Build systems of record and engagement that integrate cleanly with the rest of your landscape.",
    icon: "grid",
  },
  {
    slug: "data-modernization",
    title: "Data Modernization",
    description:
      "Unify siloed data into a governed platform that powers analytics, AI, and operational reporting.",
    icon: "data",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Reduce risk across identity, applications, and cloud with practical controls your teams will actually use.",
    icon: "shield",
  },
  {
    slug: "automation",
    title: "Automation",
    description:
      "Automate repetitive operations across finance, operations, and IT so people focus on higher-value work.",
    icon: "workflow",
  },
] as const;

export const industries = [
  {
    slug: "financial-services",
    title: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    summary: "Core banking, payments, and risk platforms that meet regulatory demands.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    summary: "Interoperable clinical and operational systems with privacy by design.",
  },
  {
    slug: "retail",
    title: "Retail & E-commerce",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    summary: "Commerce platforms, personalization, and supply-aware digital experiences.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
    summary: "Connected operations, MES integrations, and plant-floor visibility.",
  },
  {
    slug: "government",
    title: "Government",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    summary: "Secure citizen services and modernization of mission systems.",
  },
  {
    slug: "logistics",
    title: "Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    summary: "Visibility, routing, and warehouse systems that keep goods moving.",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    summary: "Delivery platforms, knowledge systems, and client collaboration tools.",
  },
  {
    slug: "energy",
    title: "Energy & Utilities",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    summary: "Grid, asset, and customer platforms built for reliability and scale.",
  },
] as const;

export const caseStudies = [
  {
    slug: "financial-platform-modernization",
    title: "Financial Platform Modernization",
    client: "Northshore Capital",
    industry: "Financial Services",
    summary:
      "We rebuilt a 20-year core origination platform into a cloud-native system, cutting release cycles from months to days.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "40%", label: "faster releases" },
      { value: "31%", label: "lower run cost" },
      { value: "99.9%", label: "platform uptime" },
    ],
    challenge:
      "A regional lender was trapped on a monolithic origination stack that could not support new products or regulatory reporting without multi-month releases.",
    approach:
      "We decomposed the monolith around bounded contexts, stood up a Kubernetes platform, and introduced an event-driven integration layer so lines of business could ship independently.",
    outcome:
      "Product teams now release weekly. Operational cost dropped, and the bank launched two new digital products in the first two quarters after go-live.",
  },
  {
    slug: "healthcare-data-platform",
    title: "Healthcare Data Platform",
    client: "Aurelia Health",
    industry: "Healthcare",
    summary:
      "A unified clinical data platform gave care teams a real-time view of patients across 14 hospitals.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "60%", label: "faster insights" },
      { value: "55%", label: "less manual reporting" },
      { value: "99.9%", label: "pipeline reliability" },
    ],
    challenge:
      "Clinical, claims, and operational data lived in disconnected systems, delaying quality reporting and care coordination.",
    approach:
      "We delivered a HIPAA-ready lakehouse, FHIR-aligned pipelines, and a governed semantic layer consumed by analytics and care-management apps.",
    outcome:
      "Quality teams closed reporting cycles in days instead of weeks, and care managers gained a longitudinal patient view.",
  },
  {
    slug: "retail-commerce-rebuild",
    title: "Retail Commerce Rebuild",
    client: "Harbor & Co.",
    industry: "Retail",
    summary:
      "A composable commerce stack lifted conversion and gave merchandising teams same-day catalog control.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "22%", label: "higher conversion" },
      { value: "3x", label: "faster catalog updates" },
      { value: "18%", label: "lower cart abandonment" },
    ],
    challenge:
      "A tightly coupled ecommerce monolith blocked experimentation and could not keep up with peak traffic.",
    approach:
      "We introduced a headless storefront, API-first catalog, and autoscaling edge delivery with progressive cutover from the legacy stack.",
    outcome:
      "Peak events ran without incident, and merchandisers launched campaigns without engineering tickets.",
  },
];

export const jobs = [
  {
    slug: "senior-net-software-engineer",
    title: "Senior .NET Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "5+ years",
    posted: "2 days ago",
    salary: "$160k – $195k",
    about:
      "You will design and ship enterprise applications and cloud services that our clients run in production. You will mentor engineers, own quality, and help shape how we deliver .NET work at NEXABLOOM.",
    responsibilities: [
      "Design, build, and operate .NET services and APIs for client programs",
      "Collaborate with architects, product, and client stakeholders on technical direction",
      "Raise the bar on testing, observability, and secure coding practices",
      "Mentor mid-level engineers and contribute to internal playbooks",
      "Participate in architecture reviews and estimation",
    ],
    requirements: [
      "5+ years of professional .NET / C# experience",
      "Strong grasp of distributed systems, APIs, and SQL/NoSQL data stores",
      "Experience deploying to Azure or AWS",
      "Comfort working with clients in a consulting environment",
      "Excellent written and verbal communication",
    ],
    niceToHave: [
      "Kubernetes, Terraform, or Azure DevOps",
      "Experience modernizing legacy .NET Framework systems",
    ],
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    department: "Data",
    type: "Full-time",
    location: "Hybrid · New York",
    experience: "4+ years",
    posted: "5 days ago",
    salary: "$150k – $185k",
    about:
      "Help clients stand up modern data platforms — from ingestion to trusted analytics — with reliability and governance built in.",
    responsibilities: [
      "Design batch and streaming pipelines on cloud data platforms",
      "Model data for analytics and operational use cases",
      "Implement data quality, lineage, and access controls",
      "Partner with analysts and data scientists to productionize workloads",
    ],
    requirements: [
      "4+ years of data engineering experience",
      "Python or Scala plus SQL at a high level",
      "Hands-on with Spark, dbt, Snowflake, BigQuery, or Databricks",
      "Experience with orchestration (Airflow, Dagster, or similar)",
    ],
    niceToHave: ["Streaming (Kafka, Kinesis, Pub/Sub)", "Healthcare or financial data domains"],
  },
  {
    slug: "full-stack-engineer",
    title: "Full-stack Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "3+ years",
    posted: "1 week ago",
    salary: "$140k – $175k",
    about:
      "Build product-quality web applications for clients who need to move quickly without accumulating chaos.",
    responsibilities: [
      "Ship features across React/Next.js frontends and Node or .NET APIs",
      "Own accessibility, performance, and component quality",
      "Work in short feedback loops with designers and product owners",
      "Contribute to internal starter kits and delivery standards",
    ],
    requirements: [
      "3+ years building production web applications",
      "Strong TypeScript and modern React",
      "Experience with REST/GraphQL APIs and relational databases",
      "A bias for clean, tested, well-documented code",
    ],
    niceToHave: ["Next.js App Router", "Design systems", "Consulting experience"],
  },
  {
    slug: "frontend-developer-react",
    title: "Frontend Developer (React)",
    department: "Engineering",
    type: "Contract",
    location: "Remote",
    experience: "3+ years",
    posted: "1 week ago",
    salary: "$90 – $125 / hr",
    about:
      "A 6–9 month engagement building a design-system-driven interface for a Fortune 500 operations portal.",
    responsibilities: [
      "Implement complex, accessible UI from Figma",
      "Extend a shared component library",
      "Partner with UX on interaction details and states",
      "Instrument the UI for product analytics",
    ],
    requirements: [
      "3+ years of React experience",
      "Deep CSS/Tailwind or CSS-in-JS fluency",
      "Accessibility (WCAG) experience",
      "Comfort in a distributed consulting team",
    ],
    niceToHave: ["Storybook", "Playwright", "Figma Dev Mode"],
  },
  {
    slug: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    department: "Cloud",
    type: "Full-time",
    location: "Hybrid · Austin",
    experience: "8+ years",
    posted: "3 days ago",
    salary: "$185k – $220k",
    about:
      "Lead cloud strategy and architecture for transformation programs spanning migration, platform, and security.",
    responsibilities: [
      "Shape target-state architecture and migration waves",
      "Lead workshops with client architecture and security teams",
      "Guide landing zone, identity, and networking decisions",
      "Coach delivery teams and review infrastructure designs",
    ],
    requirements: [
      "8+ years in software or infrastructure, 4+ in architecture",
      "Deep AWS or Azure architecture experience",
      "Ability to communicate trade-offs to executives",
      "Hands-on with IaC (Terraform or Bicep/CloudFormation)",
    ],
    niceToHave: ["Security architecture", "FinOps", "Kubernetes platforms"],
  },
];

export const benefits = [
  "Remote-friendly work",
  "Medical, dental, and vision",
  "401(k) with match",
  "Learning stipend",
  "Flexible time off",
  "Competitive compensation",
];

export const culture = [
  {
    title: "Remote-Friendly",
    description: "Hire and work from where people do their best thinking.",
    icon: "globe",
  },
  {
    title: "Engineering Culture",
    description: "Craft, code review, and production ownership are the default.",
    icon: "code",
  },
  {
    title: "Learning & Development",
    description: "Budget, time, and mentorship to stay sharp.",
    icon: "book",
  },
  {
    title: "Flexible Work",
    description: "Outcomes over hours. Life happens — we plan around it.",
    icon: "clock",
  },
  {
    title: "Meaningful Projects",
    description: "Work that ships to real users in regulated, high-impact domains.",
    icon: "spark",
  },
];

export const insights = [
  {
    slug: "modernizing-core-systems-without-the-big-bang",
    title: "Modernizing core systems without the big bang",
    category: "Engineering",
    date: "Sep 8, 2026",
    excerpt:
      "A strangler-fig approach lets you replace legacy platforms in production while the business keeps running.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "what-good-looks-like-in-enterprise-ai",
    title: "What good looks like in enterprise AI",
    category: "AI",
    date: "Aug 21, 2026",
    excerpt:
      "Most AI programs stall in pilot. Here is the operating model we use to get use cases into production.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cloud-cost-is-an-architecture-problem",
    title: "Cloud cost is an architecture problem",
    category: "Cloud",
    date: "Jul 14, 2026",
    excerpt:
      "FinOps dashboards help, but durable savings come from how you design platforms, data, and release trains.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
];

export const techLogos = [
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  ".NET",
  "Java",
  "React",
  "Python",
  "Snowflake",
  "Databricks",
  "Terraform",
  "Salesforce",
];

export const values = [
  {
    title: "Outcomes over theater",
    text: "We measure success by what is running in production, not by slide count.",
  },
  {
    title: "Senior people on the work",
    text: "Clients get practitioners, not a bait-and-switch staffing model.",
  },
  {
    title: "Security by default",
    text: "Identity, data protection, and operability are designed in from the first sprint.",
  },
  {
    title: "Partnership, not a black box",
    text: "We leave teams stronger — with code, docs, and the judgment to keep going.",
  },
];

export const clientProjects = [
  {
    id: "platform-modernization",
    name: "Platform Modernization",
    status: "On Track",
    progress: 75,
    health: "good",
    budgetUsed: 62,
    start: "Jan 12, 2026",
    due: "Nov 30, 2026",
    manager: "Priya Shah",
    description:
      "Replace the core origination and servicing stack with a cloud-native platform, migrating products in waves.",
  },
  {
    id: "data-foundation",
    name: "Data Foundation",
    status: "At Risk",
    progress: 48,
    health: "risk",
    budgetUsed: 71,
    start: "Mar 3, 2026",
    due: "Oct 15, 2026",
    manager: "Marcus Hale",
    description:
      "Stand up a governed lakehouse, historical backfill, and executive reporting for finance and operations.",
  },
  {
    id: "customer-portal",
    name: "Customer Portal",
    status: "In Progress",
    progress: 33,
    health: "good",
    budgetUsed: 29,
    start: "Jun 1, 2026",
    due: "Feb 28, 2027",
    manager: "Elena Voss",
    description:
      "A self-service portal for onboarding, documents, and case tracking across retail and commercial lines.",
  },
];

export const applications = [
  {
    role: "Senior .NET Software Engineer",
    slug: "senior-net-software-engineer",
    applied: "Sep 12, 2026",
    status: "Under Review",
    tone: "blue",
  },
  {
    role: "Data Engineer",
    slug: "data-engineer",
    applied: "Sep 4, 2026",
    status: "Interview Scheduled",
    tone: "green",
  },
  {
    role: "Full-stack Engineer",
    slug: "full-stack-engineer",
    applied: "Aug 22, 2026",
    status: "In Progress",
    tone: "amber",
  },
  {
    role: "Frontend Developer (React)",
    slug: "frontend-developer-react",
    applied: "Aug 2, 2026",
    status: "Not Selected",
    tone: "red",
  },
];
