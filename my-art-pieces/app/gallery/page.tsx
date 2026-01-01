"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Category = "all" | "portraits" | "abstract" | "landscapes" | "custom";

interface Artwork {
  id: string;
  title: string;
  category: Category;
  image: string;
  size: string;
  medium: string;
}

// Sample artwork data - replace with your actual artworks
const artworks: Artwork[] = [
  {
    id: "1",
    title: "Portrait of Serenity",
    category: "portraits",
    image: "/assets/artwork-1.jpg",
    size: "24\" x 30\"",
    medium: "Oil on Canvas",
  },
  {
    id: "2",
    title: "Abstract Harmony",
    category: "abstract",
    image: "/assets/artwork-2.jpg",
    size: "20\" x 20\"",
    medium: "Acrylic on Canvas",
  },
  {
    id: "3",
    title: "Mountain Vista",
    category: "landscapes",
    image: "/assets/artwork-3.jpg",
    size: "30\" x 40\"",
    medium: "Oil on Canvas",
  },
  {
    id: "4",
    title: "Custom Family Portrait",
    category: "custom",
    image: "/assets/artwork-4.jpg",
    size: "18\" x 24\"",
    medium: "Watercolor",
  },
  {
    id: "5",
    title: "Urban Portrait",
    category: "portraits",
    image: "/assets/artwork-5.jpg",
    size: "16\" x 20\"",
    medium: "Charcoal on Paper",
  },
  {
    id: "6",
    title: "Colorful Abstractions",
    category: "abstract",
    image: "/assets/artwork-6.jpg",
    size: "22\" x 28\"",
    medium: "Mixed Media",
  },
  {
    id: "7",
    title: "Coastal Sunset",
    category: "landscapes",
    image: "/assets/artwork-7.jpg",
    size: "24\" x 36\"",
    medium: "Oil on Canvas",
  },
  {
    id: "8",
    title: "Personalized Pet Portrait",
    category: "custom",
    image: "/assets/artwork-8.jpg",
    size: "12\" x 16\"",
    medium: "Acrylic on Canvas",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All" },
    { id: "portraits", label: "Portraits" },
    { id: "abstract", label: "Abstract" },
    { id: "landscapes", label: "Landscapes" },
    { id: "custom", label: "Custom" },
  ];

  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200/50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 text-center fade-in">
            Gallery
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Explore my collection of original artworks across different styles and mediums.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-16 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2 pl-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {filteredArtworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArtworks.map((artwork) => (
              <Link
                key={artwork.id}
                href={`/gallery/${artwork.id}`}
                className="group cursor-pointer block"
              >
                <div className="rounded-xl overflow-hidden">
                  <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden mb-3 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">{artwork.title}</span>
                    </div>
                  </div>
                  <div className="px-1 pb-1">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {artwork.size} • {artwork.medium}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No artworks found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

