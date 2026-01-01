import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-medium text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/projects"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

