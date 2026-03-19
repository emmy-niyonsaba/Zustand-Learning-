import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Lead Instructor',
      bio: 'Expert in React and state management with 8+ years of experience',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Content Creator',
      bio: 'Passionate about teaching and building educational resources',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Community Manager',
      bio: 'Dedicated to fostering an inclusive and supportive community',
      avatar: '👩‍🔬'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Technical Lead',
      bio: 'Building robust platforms and ensuring code quality standards',
      avatar: '👨‍🏫'
    }
  ]

  const values = [
    {
      icon: '💎',
      title: 'Quality',
      description: 'We maintain the highest standards in our educational content and resources'
    },
    {
      icon: '🎓',
      title: 'Education',
      description: 'Empowering developers through comprehensive learning experiences'
    },
    {
      icon: '🌍',
      title: 'Inclusivity',
      description: 'Building a welcoming community for developers at all skill levels'
    },
    {
      icon: '🔬',
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge techniques and best practices'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Platform Founded' },
    { year: '2021', event: 'Reached 10k Users' },
    { year: '2022', event: 'Published 500+ Articles' },
    { year: '2023', event: 'Expanded Global Community' },
    { year: '2024', event: 'Launched Advanced Courses' },
    { year: '2026', event: 'Celebrating 50k+ Members' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full">
              About Us
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Learn State Management
            <span className="block text-blue-600">The Right Way</span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            We're on a mission to make learning state management accessible to everyone. Our platform combines expert knowledge, practical examples, and community support to help you master Zustand.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To empower developers worldwide with the knowledge and tools needed to master modern state management in React.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We believe that learning should be accessible, practical, and community-driven. Through high-quality content, real-world examples, and direct community support, we help developers at all levels achieve their goals.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're just starting or looking to deepen your expertise, we're here to guide you every step of the way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl min-h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold">Empower & Educate</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Passionate experts dedicated to your learning success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
              >
                <div className="text-7xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600">
              Growing together with our community
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-600 -translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                      {milestone.year}
                    </div>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{milestone.event}</p>
                  </div>
                  <div className="hidden md:flex flex-1 justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">50k+</div>
              <p className="text-blue-100 text-lg">Active Users</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-100 text-lg">Resources</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-blue-100 text-lg">Articles</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-blue-100 text-lg">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Join Us Today</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Start learning state management and become part of our growing community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/posts"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Explore Articles →
            </Link>
            <Link
              to="/"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:shadow-lg border-2 border-blue-600 transition-all duration-300 hover:bg-blue-50"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-t border-slate-700">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            &copy; 2026 Zustand Learning Platform. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Designed with ❤️ for developers, by developers
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
