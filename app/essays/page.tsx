"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Lock } from "lucide-react"
import Link from "next/link"

export default function EssaysPage() {
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "okaeri") {
      setIsUnlocked(true)
      setError("")
    } else {
      setError("Incorrect password")
      setPassword("")
    }
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] relative overflow-hidden">
      {/* Muted yellow gradient blobs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-[rgba(218,165,32,0.25)] rounded-full blur-[80px] animate-float" />
      <div className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-[rgba(240,230,140,0.3)] rounded-full blur-[80px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[rgba(255,248,220,0.35)] rounded-full blur-[80px] animate-float-slow" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="p-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors duration-300 text-sm font-light"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          {!isUnlocked ? (
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <Lock className="w-12 h-12 mx-auto mb-4 text-gray-800" />
                <h1 className="text-2xl font-light text-gray-800 mb-2">Personal Essays</h1>
                <p className="text-gray-600 text-sm font-light">This content is password protected</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-3 py-2 text-sm font-light rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  />
                  {error && <p className="mt-2 text-xs font-light text-red-600">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full px-3 py-2 text-sm font-light bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  Unlock
                </button>
              </form>
            </div>
          ) : (
            <div className="w-full max-w-4xl px-6">
              <article className="space-y-8 text-gray-800">
                {/* Title and subtitle */}
                <div className="text-center space-y-3 mb-12">
                  <h1 className="text-3xl font-light">
                    Taste and Architecture: The Human Edge in an Age of Automation
                  </h1>
                  <p className="text-sm font-light italic text-gray-600">
                    AI is quietly rewriting what it means to be capable.
                  </p>
                  <p className="text-sm font-light text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Tasks that once took teams, time, and talent now collapse into a single prompt. The world is
                    reorganizing around a new question: When machines can do almost everything, what remains distinctly
                    human? The answer, I think, is taste and architecture — how we choose, and how we build.
                  </p>
                </div>

                {/* Section 1 */}
                <section className="space-y-3">
                  <h2 className="text-xl font-light">1. Taste: Our Native Form of Alignment</h2>
                  <div className="space-y-3 text-sm font-light leading-relaxed text-gray-700">
                    <p>
                      Taste is often dismissed as aesthetic preference, but in practice it is how we navigate infinite
                      choice. It is a compression of everything we've seen, felt, and believed — our memory, pattern
                      recognition, and values — into a single, intuitive sense of rightness.
                    </p>
                    <p>
                      When execution is abundant, discernment becomes rare. When every product looks good, the
                      difference lies in what it believes. Taste is not decoration; it is direction. It is the invisible
                      hierarchy that decides what deserves to exist.
                    </p>
                    <p>
                      The best founders, designers, and thinkers do not simply optimize. They curate reality. They have
                      a way of saying <em>this, not that</em>, and that selective pressure is what keeps civilization
                      from dissolving into noise.
                    </p>
                    <p>
                      Taste is alignment, embodied. It's how we encode judgment before we can prove it. In that sense,
                      taste is not just about aesthetics; it's about ethics. It's how value becomes visible.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="space-y-3">
                  <h2 className="text-xl font-light">2. Architecture: Structure as Intelligence</h2>
                  <div className="space-y-3 text-sm font-light leading-relaxed text-gray-700">
                    <p>
                      If taste is how we know what feels right, architecture is how we make it real — and keep it alive
                      once we do.
                    </p>
                    <p>
                      We're entering the age of AI slop: code written by machines that don't understand context,
                      deployed by people who don't understand systems. It's the world Lovable was built to critique — a
                      wave of startups shipping faster than they can reason about what they've made.
                    </p>
                    <p>
                      AI can write code, but it still can't architect. It can't decide how pieces should fit together,
                      where boundaries should live, or how data and dependencies should flow. Architecture is what makes
                      intelligence performant, safe, and interpretable. It's what turns a clever prototype into a
                      reliable product. It's what separates the companies that scale from the ones that silently decay
                      under the weight of their own automation.
                    </p>
                    <p>
                      Good architecture compounds clarity. Bad architecture compounds confusion. As AI multiplies
                      output, the challenge won't be writing code — it will be maintaining coherence across millions of
                      invisible decisions. The future systems that thrive will be those whose architectures allow humans
                      and agents to reason about what's happening inside them.
                    </p>
                    <p>
                      This is not just a technical concern. Architecture is how information moves — through code,
                      through teams, through memory. It's how context survives handoffs between people and processes.
                      And as sections of our systems become agentic — self-modifying, self-executing, constantly
                      learning — the need for thoughtful architecture becomes existential.
                    </p>
                    <p>
                      We'll need to design for observability, for modularity, for failure. We'll need patterns that keep
                      agentic behavior safe, auditable, and aligned with intent. AI will eventually help us architect,
                      but that moment is still far away. Right now, architecture remains one of the few forms of
                      leverage that can't be automated.
                    </p>
                    <p>
                      The best builders of this era won't just write code or ship features. They'll architect systems
                      that can learn without breaking. Because in the end, AI can build almost anything. But only humans
                      can ensure that what it builds still makes sense.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="space-y-3">
                  <h2 className="text-xl font-light">3. The Shift: From Labor to Legibility</h2>
                  <div className="space-y-3 text-sm font-light leading-relaxed text-gray-700">
                    <p>
                      For centuries, advantage came from scale — who could mobilize the most hands, capital, and hours.
                      Now it comes from legibility — whose vision can be understood, extended, and embodied by a network
                      of humans and machines.
                    </p>
                    <p>
                      AI doesn't invent meaning; it amplifies it. The clearer your taste and architecture, the more
                      faithfully your agents will execute on your behalf. We're entering a world where your point of
                      view becomes infrastructure — where the structure of your thinking matters as much as the
                      structure of your code.
                    </p>
                    <p>
                      The leaders of the next decade won't be those who manage resources. They'll be those who make
                      meaning scalable.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="space-y-3">
                  <h2 className="text-xl font-light">4. The Great Re-Differentiation</h2>
                  <div className="space-y-3 text-sm font-light leading-relaxed text-gray-700">
                    <p>
                      Technology always flattens before it re-differentiates. AI's first act is sameness: competent
                      copy, standard design, median style. But the second act — the one now emerging — is the return of
                      particularity. Judgment. Atmosphere. Soul.
                    </p>
                    <p>
                      As every workflow automates, we'll crave what can't be templated: things that feel inevitable yet
                      alive. Taste will drive that. Architecture will sustain it. They are how humans reintroduce
                      narrative and identity into the flood.
                    </p>
                    <p>
                      The next wave of value won't come from new tools, but from new sensibilities — from products and
                      people that carry a point of view. When everything can be generated, authenticity becomes
                      structural. We start to recognize coherence as a form of beauty. Taste and architecture protect
                      the possibility of aliveness in systems that would otherwise optimize us to death.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section className="space-y-3">
                  <h2 className="text-xl font-light">5. The Human Remains</h2>
                  <div className="space-y-3 text-sm font-light leading-relaxed text-gray-700">
                    <p>
                      I think a lot of people, reasonably so, fear AI. But I don't believe AI makes us obsolete. It
                      gives us leverage. It removes friction so we can return to the parts of work that are irreducibly
                      human: deciding what matters, and designing worlds that hold together.
                    </p>
                    <p>
                      Taste and architecture are not luxuries. They are governance. They are how we keep intelligence
                      legible to itself. Taste tells us why. Architecture tells us how. Together, they ensure that what
                      we build still has something worth being intelligent about.
                    </p>
                    <p>
                      AI will do the doing. But humans, through taste and architecture, will decide why it matters and
                      how it feels.
                    </p>
                  </div>
                </section>

                {/* The Human Edge */}
                <section className="space-y-3">
                  <h2 className="text-xl font-light">The Human Edge</h2>
                  <div className="space-y-3 text-sm font-light leading-relaxed text-gray-700">
                    <p>
                      Every era of technology redefines what it means to be human. The printing press gave us literacy.
                      The industrial age gave us scale. The information age gave us speed. The age of agents will give
                      us a mirror, machines that reflect our own judgment back at us.
                    </p>
                    <p>
                      And the quality of those mirrors will depend entirely on the clarity of our taste and the
                      integrity of our architecture. The future will belong to those who can make meaning coherent
                      again, who understand that beauty is not surface but structure. Taste and architecture are how we
                      build with soul in a synthetic age. They are how we stay human while teaching the world to think.
                    </p>
                  </div>
                </section>

                {/* Closing note */}
                <section className="pt-8 border-t border-gray-300">
                  <p className="text-xs font-light italic text-gray-600 text-center">
                    If you enjoyed this piece, you might like my future writing on intelligence, systems, and the
                    sociology of technology — how taste, structure, and soul evolve as machines learn to think for us.
                  </p>
                </section>
              </article>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
