import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Press() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-[#faf9f6]">
      {/* Light blue blob */}
      <div
        className="absolute left-[-5%] top-[15%] h-[500px] w-[500px] animate-float"
        style={{
          background: "radial-gradient(circle at center, rgba(173, 216, 230, 0.4) 0%, rgba(173, 216, 230, 0) 70%)",
          filter: "blur(70px)",
          transform: "rotate(-15deg)",
        }}
      />

      {/* Sky blue blob */}
      <div
        className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] animate-float-delayed"
        style={{
          background: "radial-gradient(circle at center, rgba(135, 206, 235, 0.4) 0%, rgba(135, 206, 235, 0) 70%)",
          filter: "blur(70px)",
          transform: "rotate(20deg)",
        }}
      />

      {/* Powder blue blob */}
      <div
        className="absolute left-[30%] bottom-[10%] h-[550px] w-[550px] animate-float-slow"
        style={{
          background: "radial-gradient(circle at center, rgba(176, 224, 230, 0.5) 0%, rgba(176, 224, 230, 0) 70%)",
          filter: "blur(70px)",
          transform: "rotate(-10deg)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Press content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Press</h1>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Coverage</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="font-medium text-gray-800">
                    <a
                      href="https://www.washingtonpost.com/business/2025/07/26/ai-boom-san-francisco-tech-workers-housing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors duration-300"
                    >
                      Featured in The Washington Post
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">July 2025</p>
                  <p className="text-gray-600 mt-2">
                    "AI boom drives San Francisco tech workers to seek new housing solutions..."
                  </p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="font-medium text-gray-800">
                    <a
                      href="https://www.businessinsider.com/san-francisco-oldest-hacker-house-startups-2025-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors duration-300"
                    >
                      Featured in Business Insider
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">April 2025</p>
                  <p className="text-gray-600 mt-2">
                    "Inside San Francisco's oldest hacker house and the startups it spawned..."
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact</h2>
              <p className="text-gray-600 mb-4">For press inquiries, interviews, or speaking opportunities:</p>
              <a href="mailto:jessica@okaeri.ai" className="text-blue-600 hover:text-blue-700 font-medium">
                jessica@okaeri.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
