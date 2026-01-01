import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-medium text-gray-900 mb-4">Artwork Not Found</h1>
        <p className="text-gray-600 mb-8">
          The artwork you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/gallery"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
        >
          Back to Gallery
        </Link>
      </div>
    </div>
  );
}

