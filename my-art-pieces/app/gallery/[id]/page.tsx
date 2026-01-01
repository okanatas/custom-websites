import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Artwork {
  id: string;
  title: string;
  category: string;
  image: string;
  size: string;
  medium: string;
  story: string;
}

// Sample artwork data - replace with your actual artworks
const artworks: Record<string, Artwork> = {
  "1": {
    id: "1",
    title: "Portrait of Serenity",
    category: "portraits",
    image: "/assets/artwork-1.jpg",
    size: "24\" x 30\"",
    medium: "Oil on Canvas",
    story: "This portrait captures a moment of quiet contemplation. The subject's expression reflects inner peace and tranquility, painted with careful attention to light and shadow. Created during a period of personal reflection, this piece represents the beauty found in stillness.",
  },
  "2": {
    id: "2",
    title: "Abstract Harmony",
    category: "abstract",
    image: "/assets/artwork-2.jpg",
    size: "20\" x 20\"",
    medium: "Acrylic on Canvas",
    story: "A vibrant exploration of color and form, this abstract piece emerged from an intuitive painting session. The flowing shapes and bold colors represent the harmony found in chaos, inviting viewers to find their own meaning in the composition.",
  },
  "3": {
    id: "3",
    title: "Mountain Vista",
    category: "landscapes",
    image: "/assets/artwork-3.jpg",
    size: "30\" x 40\"",
    medium: "Oil on Canvas",
    story: "Inspired by a hiking trip through the mountains, this landscape captures the grandeur of nature. The dramatic lighting and sweeping vistas convey the sense of awe experienced when standing before such majesty.",
  },
  "4": {
    id: "4",
    title: "Custom Family Portrait",
    category: "custom",
    image: "/assets/artwork-4.jpg",
    size: "18\" x 24\"",
    medium: "Watercolor",
    story: "A commissioned piece created for a family celebrating their 50th anniversary. This portrait brings together three generations, capturing not just their likenesses but the love and connection that binds them together.",
  },
  "5": {
    id: "5",
    title: "Urban Portrait",
    category: "portraits",
    image: "/assets/artwork-5.jpg",
    size: "16\" x 20\"",
    medium: "Charcoal on Paper",
    story: "This charcoal portrait explores the character and stories written in the lines of the face. The urban setting and strong contrast create a powerful, intimate connection with the subject.",
  },
  "6": {
    id: "6",
    title: "Colorful Abstractions",
    category: "abstract",
    image: "/assets/artwork-6.jpg",
    size: "22\" x 28\"",
    medium: "Mixed Media",
    story: "An experimental piece combining acrylics, pastels, and collage elements. The layered textures and bold color choices create a dynamic composition that celebrates the joy of creative expression.",
  },
  "7": {
    id: "7",
    title: "Coastal Sunset",
    category: "landscapes",
    image: "/assets/artwork-7.jpg",
    size: "24\" x 36\"",
    medium: "Oil on Canvas",
    story: "Painted from memory after a peaceful evening by the coast, this piece captures the warm glow of sunset over water. The soft brushstrokes and warm palette evoke a sense of calm and nostalgia.",
  },
  "8": {
    id: "8",
    title: "Personalized Pet Portrait",
    category: "custom",
    image: "/assets/artwork-8.jpg",
    size: "12\" x 16\"",
    medium: "Acrylic on Canvas",
    story: "A beloved pet portrait commissioned to capture the unique personality of a family's furry friend. Every detail, from the expressive eyes to the distinctive markings, was carefully rendered to create a lasting tribute.",
  },
};

export default function ArtworkDetail({ params }: { params: { id: string } }) {
  const artwork = artworks[params.id];

  if (!artwork) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Link
          href="/gallery"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm sm:text-base group"
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
          Back to Gallery
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="aspect-square lg:aspect-auto lg:h-[600px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 flex items-center justify-center">
              <span className="text-gray-500 text-sm">{artwork.title}</span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center fade-in">
            <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              {artwork.title}
            </h1>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-20">Size:</span>
                <span className="text-gray-900">{artwork.size}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-20">Medium:</span>
                <span className="text-gray-900">{artwork.medium}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-20">Category:</span>
                <span className="text-gray-900 capitalize">{artwork.category}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-3">The Story</h2>
              <p className="text-gray-600 leading-relaxed">{artwork.story}</p>
            </div>

            {/* CTA Button */}
            <Link
              href={`/request-from-me?type=custom-painting&similar=${artwork.id}`}
              className="inline-block bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-medium text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Request a Similar Painting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

