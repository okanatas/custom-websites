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
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 shadow-2xl ring-4 ring-white">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Portrait</span>
              </div>
            </div>

            {/* Intro */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 mb-4">
                Hello, I&apos;m [Your Name]
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                I&apos;m a passionate artist dedicated to creating meaningful, personalized artworks 
                that tell your story. Through painting and teaching, I help others discover the 
                joy of artistic expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Story Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-8 text-center">
            My Story
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Art has been my constant companion for as long as I can remember. What started as 
              a childhood fascination with colors and shapes has evolved into a lifelong journey 
              of exploration and expression. Every brushstroke tells a story, and every canvas 
              becomes a window into moments that matter.
            </p>
            
            <p>
              <strong className="text-gray-900">Why I Paint:</strong> I paint because art has 
              the power to capture emotions, preserve memories, and connect us to something deeper 
              than words can express. Whether it&apos;s a portrait that captures someone&apos;s essence, a 
              landscape that brings nature&apos;s beauty indoors, or an abstract piece that invites 
              interpretation, each work is created with intention and care.
            </p>
            
            <p>
              <strong className="text-gray-900">My Style:</strong> My artistic style is a blend 
              of realism and expressive interpretation. I believe in honoring the subject while 
              infusing each piece with my unique perspective. From detailed portraits that capture 
              personality to vibrant abstracts that explore color and form, I adapt my technique 
              to serve the story each piece needs to tell.
            </p>
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
            Whether you&apos;re looking for a custom painting or want to develop your artistic skills, 
            I&apos;m here to help bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/request-from-me"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg w-full sm:w-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Work With Me
            </Link>
            <Link
              href="/request-from-me?type=tutoring"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book a Lesson
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

