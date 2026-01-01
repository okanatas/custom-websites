import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Portrait */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200/50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 fade-in">
            {/* Portrait */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden flex-shrink-0 shadow-2xl ring-4 ring-white">
              <Image
                src="https://avatars.githubusercontent.com/u/59907594?v=4"
                alt="Okan Atas"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Intro */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 mb-4">
                Okan Atas
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">
                Software Developer & Founder
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                Toronto, ON, Canada
              </p>
              <div className="flex gap-6 justify-center md:justify-start">
                <a
                  href="http://github.com/okanatas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
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
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
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
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
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
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-8 text-center">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I&apos;m a software developer and founder with expertise in building scalable SaaS platforms, 
              fintech applications, and payment systems. My journey has been one of continuous learning and growth, 
              evolving from a passion into a career dedicated to excellence and innovation.
            </p>
            
            <p>
              <strong className="text-gray-900">My Approach:</strong> I believe in combining 
              creativity with practical solutions. Whether it&apos;s bringing a vision to life or solving 
              complex challenges, I approach each project with dedication, attention to detail, and 
              a commitment to delivering exceptional results.
            </p>
            
            <p>
              <strong className="text-gray-900">What I Do:</strong> I specialize in creating work 
              that matters. Through years of experience, I&apos;ve developed a unique perspective that 
              allows me to adapt to different needs and challenges, always striving to exceed expectations 
              and deliver value.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block text-gray-900 font-medium hover:text-gray-700 transition-all duration-300 border-b-2 border-gray-900 hover:border-gray-700 group"
            >
              View My Projects <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 drop-shadow-2xl">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you and 
            discuss how we can work together.
          </p>
          
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
