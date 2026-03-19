import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const features = [
    {
      id: 1,
      icon: '📚',
      title: 'Learn Zustand',
      description: 'Master state management with our comprehensive collection of articles and tutorials'
    },
    {
      id: 2,
      icon: '💡',
      title: 'Best Practices',
      description: 'Discover industry best practices and proven patterns for building scalable applications'
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Performance',
      description: 'Learn how to optimize your React applications with efficient state management'
    },
    {
      id: 4,
      icon: '🔐',
      title: 'Type Safety',
      description: 'Explore TypeScript integration and type-safe state management strategies'
    },
    {
      id: 5,
      icon: '🎯',
      title: 'Real Examples',
      description: 'Study practical examples and real-world use cases from community projects'
    },
    {
      id: 6,
      icon: '🤝',
      title: 'Community',
      description: 'Join our growing community of developers learning and sharing knowledge'
    }
  ]

  const stats = [
    { label: 'Articles', value: '1000+' },
    { label: 'Users', value: '50k+' },
    { label: 'Resources', value: '500+' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-96 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 -right-96 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full">
              Welcome to Zustand Learning
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Master State Management
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}with Zustand
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your ultimate platform for learning state management in React. Discover best practices, explore real-world examples, and build better applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/posts"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Explore Articles →
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:shadow-lg border-2 border-blue-600 transition-all duration-300 hover:bg-blue-50 text-center"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive resources and community support to accelerate your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 md:p-16 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -ml-20 -mb-20"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Master State Management?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Start your journey today and join thousands of developers learning Zustand
              </p>
              <Link
                to="/posts"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">Navigation</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/posts" className="hover:text-white transition-colors">Articles</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Community</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2026 Zustand Learning Platform. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
