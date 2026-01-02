import Link from "next/link";

const featuredProjects = [
  {
    id: "1",
    title: "Multi-Application SaaS Platform",
    field: "SaaS Platform",
    role: "Founder & Manager",
    period: "Mar 2025 – Present",
    color: "from-gray-900 to-gray-700"
  },
  {
    id: "2",
    title: "Fintech Payment System",
    field: "Fintech Application",
    role: "Software Developer",
    period: "Oct 2021 – Mar 2025",
    color: "from-blue-900 to-blue-700"
  },
  {
    id: "4",
    title: "NFC Card Emulator",
    field: "Mobile Application",
    role: "Android Developer & Open Source",
    period: "May 2021 – Jul 2021",
    color: "from-purple-900 to-purple-700"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-2xl">
            Okan Atas
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto drop-shadow-lg">
            Software Developer & Founder
          </p>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Toronto, ON, Canada
          </p>
          <div className="flex gap-6 justify-center items-center mb-8">
            <a
              href="http://github.com/okanatas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="http://linkedin.com/in/okanatas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Contact"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg w-full sm:w-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 text-lg">A glimpse of my recent work</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {featuredProjects.map((project) => (
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
                    <p className="text-sm text-gray-600">
                      {project.field} • {project.role}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block text-gray-900 font-medium text-lg hover:text-gray-700 transition-all duration-300 border-b-2 border-gray-900 hover:border-gray-700 group"
            >
              View All Projects <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Short About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              I&apos;m a software developer and founder based in Toronto, specializing in building 
              scalable SaaS platforms and fintech solutions. I&apos;ve architected multi-application 
              platforms serving diverse industries, developed secure payment systems with PCI DSS 
              compliance, and created open-source tools with 100K+ downloads. My expertise spans 
              full-stack development, cloud infrastructure (AWS, Docker, Kubernetes), and modern 
              technologies including Next.js, React, TypeScript, Go, and Node.js.
            </p>
            <Link
              href="/about"
              className="inline-block text-gray-900 font-medium hover:text-gray-700 transition-all duration-300 border-b-2 border-gray-900 hover:border-gray-700 group"
            >
              Learn More About Me <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-8 drop-shadow-2xl">
            Let&apos;s Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
