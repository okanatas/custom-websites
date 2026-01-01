"use client";

import { useState, useEffect } from "react";

type RequestType = "custom-painting" | "tutoring";

interface RequestFromMeProps {
  defaultType?: RequestType;
}

export default function RequestFromMe({ defaultType = "custom-painting" }: RequestFromMeProps) {
  const [selectedType, setSelectedType] = useState<RequestType>(defaultType);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Update selected type when defaultType prop changes (from URL param)
  useEffect(() => {
    setSelectedType(defaultType);
  }, [defaultType]);

  // Custom Painting Form State
  const [paintingForm, setPaintingForm] = useState({
    name: "",
    email: "",
    paintingType: "",
    size: "",
    deadline: "",
    description: "",
  });

  // Tutoring Form State
  const [tutoringForm, setTutoringForm] = useState({
    name: "",
    email: "",
    experience: "",
    preferredMedium: "",
    schedule: "",
    goals: "",
  });

  const handlePaintingInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPaintingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTutoringInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTutoringForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type: RequestType) => {
    setSelectedType(type);
    // Scroll to top when changing form type
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = selectedType === "custom-painting" ? paintingForm : tutoringForm;
      
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: selectedType,
          formData,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send email");
      }

      // Show success message
      setShowSuccess(true);
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
      // Reset form
      if (selectedType === "custom-painting") {
        setPaintingForm({
          name: "",
          email: "",
          paintingType: "",
          size: "",
          deadline: "",
          description: "",
        });
      } else {
        setTutoringForm({
          name: "",
          email: "",
          experience: "",
          preferredMedium: "",
          schedule: "",
          goals: "",
        });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Error Message */}
      {error && (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="bg-red-500 text-white rounded-lg shadow-xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <p className="font-medium">{error}</p>
              </div>
              <button
                onClick={() => setError(null)}
                className="text-white hover:text-gray-200 transition-colors ml-4"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="bg-green-500 text-white rounded-lg shadow-xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="font-medium">
                  Thank you for your request! I will get back to you within 24-48 hours.
                </p>
              </div>
              <button
                onClick={() => setShowSuccess(false)}
                className="text-white hover:text-gray-200 transition-colors ml-4"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-gray-50 border-b border-gray-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 text-center">
            {selectedType === "custom-painting" ? "Request a Custom Painting" : "Book a Tutoring Session"}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto">
            {selectedType === "custom-painting"
              ? "You don't need to know art terms — just tell me your idea."
              : "Let's start your artistic journey together."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Selection */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 space-y-4 sticky top-20 shadow-lg border border-gray-100">
              <h2 className="text-xl font-medium text-gray-900 mb-4">What would you like?</h2>
              
              <button
                onClick={() => handleTypeChange("custom-painting")}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  selectedType === "custom-painting"
                    ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:shadow-md hover:scale-105"
                }`}
              >
                <div className="font-medium mb-1">Request Custom Painting</div>
                <div className="text-sm opacity-90">Commission a unique piece</div>
              </button>

              <button
                onClick={() => handleTypeChange("tutoring")}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  selectedType === "tutoring"
                    ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:shadow-md hover:scale-105"
                }`}
              >
                <div className="font-medium mb-1">Tutoring</div>
                <div className="text-sm opacity-90">Private painting lessons</div>
              </button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-2">
            {selectedType === "custom-painting" ? (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
                    Custom Painting Request
                  </h2>
                  <p className="text-gray-600">
                    Tell me about your vision. Whether you have a clear idea or just a feeling you want to capture, 
                    I&apos;m here to help bring it to life.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={paintingForm.name}
                        onChange={handlePaintingInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={paintingForm.email}
                        onChange={handlePaintingInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="paintingType" className="block text-sm font-medium text-gray-700 mb-2">
                      What type of painting? *
                    </label>
                    <select
                      id="paintingType"
                      name="paintingType"
                      required
                      value={paintingForm.paintingType}
                      onChange={handlePaintingInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">Select an option...</option>
                      <option value="portrait">Portrait</option>
                      <option value="landscape">Landscape</option>
                      <option value="abstract">Abstract</option>
                      <option value="still-life">Still Life</option>
                      <option value="pet-portrait">Pet Portrait</option>
                      <option value="custom">Something Custom</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                      Size Preference
                    </label>
                    <input
                      type="text"
                      id="size"
                      name="size"
                      value={paintingForm.size}
                      onChange={handlePaintingInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder='e.g., 24" x 30", or medium size for living room'
                    />
                  </div>

                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                      When do you need it by?
                    </label>
                    <input
                      type="text"
                      id="deadline"
                      name="deadline"
                      value={paintingForm.deadline}
                      onChange={handlePaintingInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="e.g., In 3 months or No rush"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell me about your vision *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      value={paintingForm.description}
                      onChange={handlePaintingInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-y transition-all duration-300 hover:border-gray-400"
                      placeholder="Describe what you're envisioning. What colors, mood, or feeling do you want? Any specific elements or subjects?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
                    Book a Tutoring Session
                  </h2>
                  <p className="text-gray-600">
                    Whether you&apos;re a complete beginner or looking to refine your skills, I offer personalized 
                    one-on-one painting lessons tailored to your goals and schedule.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="tutoring-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="tutoring-name"
                        name="name"
                        required
                        value={tutoringForm.name}
                        onChange={handleTutoringInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="tutoring-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="tutoring-email"
                        name="email"
                        required
                        value={tutoringForm.email}
                        onChange={handleTutoringInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Experience Level *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={tutoringForm.experience}
                      onChange={handleTutoringInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">Select your level...</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="some-experience">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredMedium" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Medium
                    </label>
                    <select
                      id="preferredMedium"
                      name="preferredMedium"
                      value={tutoringForm.preferredMedium}
                      onChange={handleTutoringInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">Select a medium...</option>
                      <option value="oil">Oil Painting</option>
                      <option value="acrylic">Acrylic</option>
                      <option value="watercolor">Watercolor</option>
                      <option value="mixed">Mixed Media</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="schedule" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Schedule
                    </label>
                    <input
                      type="text"
                      id="schedule"
                      name="schedule"
                      value={tutoringForm.schedule}
                      onChange={handleTutoringInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="e.g., Weekday evenings, Weekend mornings, Flexible"
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                      What would you like to learn? *
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      required
                      rows={6}
                      value={tutoringForm.goals}
                      onChange={handleTutoringInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-y transition-all duration-300 hover:border-gray-400"
                      placeholder="Tell me about your artistic goals. What techniques do you want to learn? What style interests you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Sending..." : "Book a Lesson"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

