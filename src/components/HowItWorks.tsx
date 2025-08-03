"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Users, Code, Rocket, ArrowRight, Zap, Globe, Shield } from "lucide-react"

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stepsData = [
    {
      id: 1,
      title: "Create Your Space",
      subtitle: "Instant Setup",
      description: "Launch your collaborative coding environment in seconds with intelligent room creation.",
      features: [
        "One-click room creation",
        "Smart privacy controls",
        "Team invitation system",
        "Custom workspace settings",
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      id: 2,
      title: "Code Together",
      subtitle: "Real-time Magic",
      description:
        "Experience seamless collaboration with live cursors, instant sync, and intelligent conflict resolution.",
      features: ["Live cursor tracking", "Real-time code sync", "Smart conflict resolution", "Multi-language support"],
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 3,
      title: "Execute & Deploy",
      subtitle: "Instant Results",
      description: "Run code instantly across 5+ languages and deploy with seamless CI/CD integration.",
      features: ["Instant code execution", "Multi-language runtime", "One-click deployment", "CI/CD integration"],
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-stagger")
    elements.forEach((el, index) => {
      ;(el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  // Auto-rotate steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 bg-gray-950 relative overflow-hidden" id="how-it-works" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20 opacity-0 fade-in-stagger">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            How Livelet Works
          </div>
          <h2 className="section-title mb-6 text-white">
            From Idea to
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Deployment
            </span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-400">
            Experience the future of collaborative development with our innovative three-step workflow
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transform -translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {stepsData.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "relative opacity-0 fade-in-stagger cursor-pointer group",
                  "transition-all duration-700 ease-out",
                  activeStep === index ? "scale-105" : "hover:scale-102",
                )}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Card */}
                <div
                  className={cn(
                    "relative rounded-3xl p-8 border transition-all duration-500",
                    "bg-gray-900/50 backdrop-blur-sm",
                    activeStep === index
                      ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/10"
                      : "border-gray-800/50 hover:border-cyan-500/30",
                  )}
                >
                  {/* Active Glow Effect */}
                  {activeStep === index && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
                  )}

                  {/* Step Number */}
                  <div className="relative z-10">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
                        activeStep === index
                          ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                          : "bg-gray-800 text-gray-400 group-hover:bg-gray-700",
                      )}
                    >
                      {step.icon}
                    </div>

                    {/* Step Info */}
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <span
                          className={cn(
                            "text-xs font-bold px-3 py-1 rounded-full",
                            activeStep === index ? "bg-cyan-500/20 text-cyan-400" : "bg-gray-800 text-gray-500",
                          )}
                        >
                          STEP {step.id}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-cyan-400 font-medium text-sm mb-4">{step.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div
                            className={cn(
                              "w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-300",
                              activeStep === index ? "bg-cyan-400" : "bg-gray-600",
                            )}
                          ></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connection Arrow (Desktop) */}
                  {index < stepsData.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <ArrowRight
                        className={cn(
                          "w-6 h-6 transition-colors duration-300",
                          activeStep === index ? "text-cyan-400" : "text-gray-600",
                        )}
                      />
                    </div>
                  )}
                </div>

                {/* Step Indicator (Mobile) */}
                <div className="lg:hidden flex justify-center mt-4">
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors duration-300",
                      activeStep === index ? "bg-cyan-400" : "bg-gray-600",
                    )}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {stepsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeStep === index ? "bg-cyan-500 scale-125" : "bg-gray-600 hover:bg-gray-500",
                )}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 opacity-0 fade-in-stagger">
          <div className="inline-flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Globe className="w-4 h-4" />
              <span>Global CDN</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Zap className="w-4 h-4" />
              <span>99.9% Uptime</span>
            </div>
          </div>
          <button className="mt-8 group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 active:scale-95 animate-button-pulse">
            Experience the Magic
            <ArrowRight className="ml-2 w-5 h-5 inline transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
