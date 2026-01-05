import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Cloud Services",
      icon: "☁️",
      description:
        "Comprehensive cloud solutions including migration, infrastructure management, and optimization.",
      features: [
        "Cloud Migration & Strategy",
        "Multi-cloud Management",
        "Cloud Security & Compliance",
        "Cost Optimization",
        "Disaster Recovery",
      ],
      link: "/solutions/cloud",
    },
    {
      title: "Cybersecurity",
      icon: "🔒",
      description:
        "Advanced security solutions to protect your business from evolving cyber threats.",
      features: [
        "Security Audits & Assessment",
        "Penetration Testing",
        "SIEM & SOC Services",
        "Identity & Access Management",
        "Compliance Management",
      ],
      link: "/solutions/cybersecurity",
    },
    {
      title: "IT Consulting",
      icon: "💼",
      description:
        "Strategic technology consulting to align IT initiatives with business objectives.",
      features: [
        "Digital Transformation",
        "Enterprise Architecture",
        "IT Strategy & Planning",
        "Technology Roadmap",
        "Vendor Selection",
      ],
      link: "/solutions/consulting",
    },
    {
      title: "Managed Services",
      icon: "🛠️",
      description:
        "Proactive IT management and support to keep your business running smoothly.",
      features: [
        "24/7 Monitoring & Support",
        "Infrastructure Management",
        "Help Desk Services",
        "Patch Management",
        "Performance Optimization",
      ],
      link: "/solutions/managed-services",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Solutions</h1>
          <p className="text-xl text-gray-600">
            Comprehensive IT solutions designed to meet the unique needs of your
            business and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4">{solution.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h2>
              <p className="text-gray-600 mb-6">{solution.description}</p>

              <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={solution.link}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
