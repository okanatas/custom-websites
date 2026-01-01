"use client";

import Link from "next/link";

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

const projects: Project[] = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200/50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 text-center fade-in">
            Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on across different fields and technologies.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group cursor-pointer block"
            >
              <div className="rounded-xl overflow-hidden">
                <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-xl overflow-hidden mb-3 shadow-md transition-shadow duration-300 group-hover:shadow-xl relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-medium opacity-50">{project.field}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">{project.period}</span>
                  </div>
                </div>
                <div className="px-1 pb-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {project.field} • {project.role}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

