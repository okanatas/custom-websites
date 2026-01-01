import Link from "next/link";
import { notFound } from "next/navigation";

interface Project {
  id: string;
  title: string;
  field: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  color: string;
  website?: string;
  github?: string;
}

const projects: Record<string, Project> = {
  "5": {
    id: "5",
    title: "NFC Tags Platform",
    field: "SaaS Platform",
    role: "Founder & Manager",
    period: "December 2025 – Present",
    description: "Built a comprehensive SaaS platform for NFC tags and cards, enabling users to share contacts, showcase custom pages, and connect instantly. The platform supports multiple formats including NFC cards, stickers, keychains, and tags for individuals, professionals, and businesses.",
    highlights: [
      "Developed platform for sharing contact information and custom pages via NFC tags",
      "Implemented subscription-based pricing with Free, Pro, and Team tiers",
      "Built analytics dashboard tracking tags sold, pages created, taps made, and uptime",
      "Designed user-friendly interface for configuring NFC tags and managing digital profiles",
      "Created support for multiple NFC tag formats (cards, stickers, keychains, tags)",
      "Implemented secure and reliable NFC tag management system"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "NFC", "SaaS", "Subscription Management", "Analytics", "Payment Integration"],
    color: "from-orange-900 to-orange-700"
  },
  "1": {
    id: "1",
    title: "Multi-Application SaaS Platform",
    field: "SaaS Platform",
    role: "Founder & Manager",
    period: "Mar 2025 – Present",
    description: "Founded and lead a multi-application SaaS platform for service-based businesses (healthcare, fitness, education, hospitality). Leading full-stack development, cloud deployment, and scalable infrastructure.",
    highlights: [
      "Architected scalable SaaS platform with microservices, multi-provider booking, CRM, and analytics dashboards",
      "Developed client portals, website builder, and marketing websites with SEO optimization",
      "Implemented Stripe Connect for multi-provider payments and subscriptions",
      "Designed RESTful APIs and backend services (Go/Echo, Node.js)",
      "Deployed containerized applications on AWS EKS with CI/CD pipelines"
    ],
    technologies: ["Next.js", "React", "TypeScript", "MUI", "Go", "Node.js", "MySQL", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "Auth0", "Supabase", "Firebase"],
    color: "from-gray-900 to-gray-700"
  },
  "2": {
    id: "2",
    title: "Fintech Payment System",
    field: "Fintech Application",
    role: "Software Developer",
    period: "Oct 2021 – Mar 2025",
    description: "Developed fintech applications and payment systems, focusing on secure, compliant, and scalable operations.",
    highlights: [
      "Integrated payment gateways and processors including Global Payments, Moneris, WorldPay, Cybersource, Datacap, Finix, Elavon, TSYS, Stripe, PayPal",
      "Designed and developed robust APIs and microservices for payment workflows and settlement automation",
      "Ensured compliance with PCI DSS, AML, KYC and implemented EMV, tokenization, and fraud mitigation strategies",
      "Streamlined cross-border and multi-currency transaction processing with optimized routing and reconciliation",
      "Containerized and orchestrated services using Docker and Kubernetes, automated with GitHub Actions and GitLab CI/CD",
      "Analyzed transaction metrics and built tooling to optimize success rates and reduce chargeback risk"
    ],
    technologies: ["Java", "Spring Boot", "RESTful APIs", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Kafka", "NSQ", "Elastic APM", "GitHub Actions", "GitLab CI", "OAuth", "JWT", "TLS/SSL"],
    color: "from-blue-900 to-blue-700"
  },
  "6": {
    id: "6",
    title: "Knowledge Based System with Remote Database Server",
    field: "IoT & Database System",
    role: "Full-Stack Developer",
    period: "July 2024",
    description: "Designed and implemented a knowledge-based system with a remote personal database server running on Raspberry Pi. The system enables intelligent data management, query processing, and remote access capabilities for personal knowledge organization.",
    highlights: [
      "Built a knowledge-based system with intelligent data organization and retrieval capabilities",
      "Deployed remote database server on Raspberry Pi for cost-effective, low-power hosting",
      "Implemented secure remote access protocols for database connectivity",
      "Designed efficient data storage and query optimization for knowledge management",
      "Created user interface for interacting with the knowledge base system",
      "Configured network services and remote access for Raspberry Pi deployment"
    ],
    technologies: ["Python", "Raspberry Pi", "Database Systems", "Knowledge Base", "IoT", "Remote Access", "Linux", "Network Configuration"],
    color: "from-teal-900 to-teal-700"
  },
  "3": {
    id: "3",
    title: "Booking Management Platform",
    field: "SaaS Platform",
    role: "Developer & Integrator",
    period: "Jul 2021 – Oct 2021",
    description: "Developed a SaaS platform for camp, activity, and workshop bookings. Handled admin and user workflows, booking management, and secure multi-role access.",
    highlights: [
      "Frontend built with React and Next.js; backend with Node.js and Express.js",
      "Integrated role-based access control (RBAC) and secure admin/user operations",
      "Deployed on AWS with CI/CD pipelines"
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Authentication", "RBAC", "AWS", "ECR", "ECS", "EC2", "S3", "CI/CD"],
    color: "from-green-900 to-green-700"
  },
  "4": {
    id: "4",
    title: "NFC Card Emulator",
    field: "Mobile Application",
    role: "Android Developer & Open Source",
    period: "May 2021 – Jul 2021",
    description: "Developed an open-source Android Host-Based Card Emulation (HCE) app for businesses to test their POS systems. The app simulates real NFC transactions using APDU commands and is publicly available on Google Play with 100K+ downloads.",
    highlights: [
      "Enables POS owners to test contactless payment systems safely without using real cards",
      "Open-source contribution available on GitHub",
      "Designed reliable transaction logging and dynamic testing tools for developers"
    ],
    technologies: ["Java", "Android SDK", "NFC/HCE", "APDU Commands", "Log4j", "Google Play", "UI Design", "Open Source"],
    color: "from-purple-900 to-purple-700",
    github: "https://github.com/okanatas/NFCCardEmulator"
  }
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects[params.id];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Project Image */}
          <div className={`aspect-video lg:aspect-auto lg:h-[600px] bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden shadow-xl flex items-center justify-center`}>
            <span className="text-white text-3xl font-medium opacity-50">{project.field}</span>
          </div>

          {/* Project Details */}
          <div className="flex flex-col justify-center fade-in">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-2">
                  {project.title}
                </h1>
                <p className="text-gray-600 mb-1">{project.field}</p>
                <p className="text-gray-600 text-sm mb-4">{project.role} • {project.period}</p>
              </div>
              {project.github && (
                <div className="flex gap-2 flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <h2 className="text-xl font-medium text-gray-900 mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray-900 mb-3">Key Highlights</h2>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-3">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

