export default function DevOpsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-120 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r  z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{

            backgroundImage: "url('https://techtweekinfotech.com/wp-content/uploads/2024/09/DevOps-Consulting-Service.png')",}}
        ></div>
        <div className="relative z-20 max-w-6xl mx-auto px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">DevOps Transformation Services</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Accelerate software delivery and improve collaboration with comprehensive DevOps practices, automation pipelines, and continuous integration/deployment solutions that bridge development and operations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Transform Your Software Delivery Pipeline
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            CoreNet's DevOps services help organizations achieve faster time-to-market, improved quality, and enhanced collaboration between development and operations teams. We implement industry-leading practices and tools to automate your entire software delivery lifecycle.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From continuous integration to infrastructure as code, our DevOps experts design and implement solutions that align with your business objectives and technical requirements.
          </p>
        </div>

        {/* DevOps Pillars */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Core DevOps Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">CI/CD</h3>
                  <p className="text-emerald-100">Continuous Integration</p>
                </div>
              </div>
              <p className="text-emerald-50 mb-4">
                Automated build, test, and deployment pipelines that enable rapid, reliable software releases.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-emerald-50">Jenkins, GitLab CI/CD</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-emerald-50">Automated testing</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-emerald-50">Blue-green deployments</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Infrastructure</h3>
                  <p className="text-teal-100">As Code (IaC)</p>
                </div>
              </div>
              <p className="text-teal-50 mb-4">
                Version-controlled infrastructure provisioning with Terraform, Ansible, and CloudFormation.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-teal-50">Terraform automation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-teal-50">Configuration management</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-teal-50">Immutable infrastructure</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Monitoring</h3>
                  <p className="text-cyan-100">& Observability</p>
                </div>
              </div>
              <p className="text-cyan-50 mb-4">
                Comprehensive monitoring, logging, and alerting with Prometheus, Grafana, and ELK stack.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-cyan-50">Real-time metrics</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-cyan-50">Log aggregation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span className="text-cyan-50">Performance analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Comprehensive DevOps Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pipeline Automation</h3>
              <p className="text-gray-600">
                End-to-end automation of build, test, and deployment processes with custom pipeline configurations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Container Orchestration</h3>
              <p className="text-gray-600">
                Kubernetes and Docker implementation for scalable, portable application deployments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Security Integration</h3>
              <p className="text-gray-600">
                DevSecOps practices with automated security scanning, vulnerability assessment, and compliance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Version Control</h3>
              <p className="text-gray-600">
                Git workflow optimization, branching strategies, and repository management best practices.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Performance Optimization</h3>
              <p className="text-gray-600">
                Application and infrastructure performance tuning with continuous optimization and scaling.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Team Training</h3>
              <p className="text-gray-600">
                Comprehensive DevOps training and knowledge transfer to empower your teams with best practices.
              </p>
            </div>
          </div>
        </div>

        {/* DevOps Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            DevOps Transformation Journey
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-bold text-lg mb-2">Assessment</h4>
              <p className="text-gray-600 text-sm">Evaluate current processes, tools, and team capabilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-bold text-lg mb-2">Strategy Design</h4>
              <p className="text-gray-600 text-sm">Create customized DevOps roadmap and toolchain selection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-bold text-lg mb-2">Implementation</h4>
              <p className="text-gray-600 text-sm">Deploy tools, automate pipelines, and establish practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-bold text-lg mb-2">Optimization</h4>
              <p className="text-gray-600 text-sm">Monitor, measure, and continuously improve processes</p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg shadow-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">DevOps Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-bold text-xl mb-2">Faster Delivery</h4>
              <p className="text-emerald-100">Reduce deployment time from weeks to hours with automated pipelines</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold text-xl mb-2">Higher Quality</h4>
              <p className="text-emerald-100">Catch bugs early with automated testing and continuous feedback</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🤝</div>
              <h4 className="font-bold text-xl mb-2">Better Collaboration</h4>
              <p className="text-emerald-100">Break down silos between development and operations teams</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Accelerate Your Development?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Transform your software delivery with modern DevOps practices and automation.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Start DevOps Journey
          </button>
        </div>
      </div>
    </main>
  );
}