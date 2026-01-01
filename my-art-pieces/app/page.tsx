import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image - placeholder, replace with your strongest work */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-2xl">
            Original Paintings & Personalized Art
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Custom artworks and one-on-one painting tutoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/request-from-me"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg w-full sm:w-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Request Custom Painting
            </Link>
            <Link
              href="/request-from-me?type=tutoring"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Painting Tutoring
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">Featured Works</h2>
            <p className="text-gray-600 text-lg">A glimpse of my recent creations</p>
          </div>
          
          {/* Grid of featured images - placeholder images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer card-hover group"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">Art Piece {item}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block text-gray-900 font-medium text-lg hover:text-gray-700 transition-all duration-300 border-b-2 border-gray-900 hover:border-gray-700 group"
            >
              View Full Gallery <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">What I Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Custom Paintings Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">🎨</div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Custom Paintings</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Commission a unique piece made just for you.
              </p>
              <Link
                href="/request-from-me?type=custom-painting"
                className="inline-block text-gray-900 font-medium hover:text-gray-700 transition-all duration-300 group mt-auto"
              >
                Request Now <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Painting Tutoring Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">🧑‍🎨</div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Painting Tutoring</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Private lessons for beginners and intermediate artists.
              </p>
              <Link
                href="/request-from-me?type=tutoring"
                className="inline-block text-gray-900 font-medium hover:text-gray-700 transition-all duration-300 group mt-auto"
              >
                Book a Lesson <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">A simple, transparent process</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-medium mx-auto mb-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                1
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Request</h3>
              <p className="text-gray-600">
                Reach out with your vision or interest in lessons.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-medium mx-auto mb-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                2
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Discussion</h3>
              <p className="text-gray-600">
                We discuss your needs, style, and expectations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-medium mx-auto mb-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                3
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Creation / Lessons</h3>
              <p className="text-gray-600">
                I create your artwork or guide you through lessons.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-medium mx-auto mb-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                4
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Delivery / Follow-up</h3>
              <p className="text-gray-600">
                Receive your piece or continue your artistic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Short About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Portrait - placeholder */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 shadow-xl ring-4 ring-white">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Portrait</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                I&apos;m a passionate artist dedicated to creating meaningful, personalized artworks that tell your story. 
                With years of experience, I bring creativity and expertise to every piece and lesson.
              </p>
              <Link
                href="/about"
                className="inline-block text-gray-900 font-medium hover:text-gray-700 transition-all duration-300 border-b-2 border-gray-900 hover:border-gray-700 group"
              >
                Learn More About Me <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-8 drop-shadow-2xl">
            Let&apos;s Create Something Together
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/request-from-me"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg w-full sm:w-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Request Custom Painting
            </Link>
            <Link
              href="/request-from-me?type=tutoring"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Tutoring
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
