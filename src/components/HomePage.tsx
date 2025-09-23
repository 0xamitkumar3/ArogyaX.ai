import React from 'react';
import { 
  Brain, 
  Video, 
  FileText, 
  TrendingUp, 
  Users, 
  Shield, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Clock
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: Brain,
      title: 'AI Symptom Checker',
      description: '85%+ accuracy in preliminary diagnosis across 12+ Indian languages',
      color: 'bg-blue-500',
      page: 'symptom-checker'
    },
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'Connect with 5000+ verified doctors instantly via video consultation',
      color: 'bg-green-500',
      page: 'telemedicine'
    },
    {
      icon: FileText,
      title: 'Smart EHR',
      description: 'Secure, portable health records with blockchain-based security',
      color: 'bg-purple-500',
      page: 'health-records'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered health insights and disease risk predictions',
      color: 'bg-orange-500',
      page: 'dashboard'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Patients Served', icon: Users },
    { number: '5000+', label: 'Verified Doctors', icon: Shield },
    { number: '12+', label: 'Languages Supported', icon: Globe },
    { number: '85%+', label: 'Diagnostic Accuracy', icon: Zap }
  ];

  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Cardiologist, AIIMS Delhi',
      content: 'ArogyaX.AI has revolutionized how I manage my patients. The AI insights help me make better decisions.',
      rating: 5,
      location: 'Delhi'
    },
    {
      name: 'Raj Kumar',
      role: 'Patient from Rural Maharashtra',
      content: 'Finally, quality healthcare is accessible in my village. The Hindi support makes it so easy to use.',
      rating: 5,
      location: 'Maharashtra'
    },
    {
      name: 'Dr. Sarah Augustine',
      role: 'General Physician',
      content: 'The platform has increased my patient throughput by 25% while maintaining quality care.',
      rating: 5,
      location: 'Bangalore'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Gen-AI Powered HealthCare Assistant
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Democratizing
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Healthcare </span>
              with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Bridging the healthcare gap across India with AI-powered diagnostics, telemedicine, 
              and predictive analytics. Accessible in 12+ Indian languages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setCurrentPage('symptom-checker')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center group shadow-lg hover:shadow-xl"
              >
                Start Health Checkup
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setCurrentPage('telemedicine')}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 flex items-center shadow-md"
              >
                <Video className="mr-2 h-5 w-5" />
                Consult Doctor Now
              </button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 mb-4">Trusted by healthcare professionals nationwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-lg font-semibold">AIIMS</div>
                <div className="text-lg font-semibold">Fortis</div>
                <div className="text-lg font-semibold">Apollo</div>
                <div className="text-lg font-semibold">Max Healthcare</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Healthcare Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From AI diagnostics to telemedicine, everything you need for modern healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                onClick={() => setCurrentPage(feature.page)}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Heroes
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from doctors and patients across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="flex items-center mt-2 text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join millions of Indians who trust ArogyaX.AI for their healthcare needs. 
            Start your health journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('symptom-checker')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center group shadow-lg"
            >
              Start Free Health Checkup
              <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
            
            <button 
              onClick={() => setCurrentPage('doctor-portal')}
              className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
            >
              Join as Healthcare Provider
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-6 text-blue-200">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Available 24/7
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              100% Secure
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              12+ Languages
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
