import React, { useState } from 'react';
import { 
  Brain, 
  MessageCircle, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  User, 
  Calendar,
  ArrowRight,
  Mic,
  Send,
  Activity,
  Heart,
  Thermometer
} from 'lucide-react';

interface SymptomCheckerProps {
  setCurrentPage: (page: string) => void;
}

const SymptomChecker: React.FC<SymptomCheckerProps> = ({ setCurrentPage }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [symptoms, setSymptoms] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [userInfo, setUserInfo] = useState({
    age: '',
    gender: '',
    duration: ''
  });

  const commonSymptoms = [
    'Headache', 'Fever', 'Cough', 'Fatigue', 'Nausea', 'Chest Pain',
    'Back Pain', 'Dizziness', 'Shortness of Breath', 'Stomach Pain',
    'Joint Pain', 'Muscle Pain', 'Loss of Appetite', 'Insomnia'
  ];

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      setCurrentStep(4);
    }, 3000);
  };

  const analysisResults = {
    primaryDiagnosis: 'Viral Upper Respiratory Infection',
    confidence: 87,
    severity: 'mild',
    recommendations: [
      'Rest and stay hydrated',
      'Monitor temperature regularly',
      'Take over-the-counter fever reducers as needed',
      'Consult a doctor if symptoms worsen'
    ],
    redFlags: [
      'Difficulty breathing',
      'High fever (>102°F)',
      'Chest pain',
      'Persistent symptoms beyond 7 days'
    ]
  };

  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Symptom Checker</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get preliminary health insights with 85%+ accuracy. Available in 12+ Indian languages.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Activity className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
                <p className="text-sm text-gray-600">Advanced machine learning algorithms trained on millions of cases</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Multilingual Support</h3>
                <p className="text-sm text-gray-600">Describe symptoms in Hindi, English, or any Indian language</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
                <p className="text-sm text-gray-600">Get preliminary diagnosis and recommendations in seconds</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <strong>Important:</strong> This tool provides preliminary insights only. Always consult with a qualified healthcare professional for accurate diagnosis and treatment.
                </div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentStep(2)}
              className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
            >
              Start Health Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Heart className="h-8 w-8 text-red-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Emergency Detection</h3>
              <p className="text-gray-600 text-sm">Automatically identifies emergency situations with 95%+ sensitivity</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Thermometer className="h-8 w-8 text-orange-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Symptom Tracking</h3>
              <p className="text-gray-600 text-sm">Monitor symptom progression over time for better health insights</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Clock className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">Access health insights anytime, anywhere, even offline</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-1/2 transition-all duration-300"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    value={userInfo.age}
                    onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    value={userInfo.gender}
                    onChange={(e) => setUserInfo({...userInfo, gender: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select
                    value={userInfo.duration}
                    onChange={(e) => setUserInfo({...userInfo, duration: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">How long?</option>
                    <option value="few-hours">Few hours</option>
                    <option value="1-2-days">1-2 days</option>
                    <option value="3-7-days">3-7 days</option>
                    <option value="more-than-week">More than a week</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  disabled={!userInfo.age || !userInfo.gender || !userInfo.duration}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue to Symptoms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Describe Your Symptoms</h2>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-3/4 transition-all duration-300"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your symptoms in detail (हिंदी / English)
                </label>
                <div className="relative">
                  <textarea
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={4}
                    placeholder="मुझे सिरदर्द और बुखार है... / I have headache and fever..."
                  />
                  <button className="absolute top-3 right-3 p-2 text-gray-400 hover:text-blue-600">
                    <Mic className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Or select from common symptoms:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {commonSymptoms.map((symptom) => (
                    <button
                      key={symptom}
                      onClick={() => handleSymptomToggle(symptom)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedSymptoms.includes(symptom)
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleAnalyze}
                  disabled={!symptoms && selectedSymptoms.length === 0}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Analyze Symptoms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="animate-spin w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Analyzing Your Symptoms</h2>
            <p className="text-gray-600 mb-6">Our AI is processing your information using advanced medical algorithms...</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-center text-blue-700">
                <Brain className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">AI Medical Intelligence Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (analysisComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Analysis Complete</h2>
              <p className="text-gray-600">Here are your preliminary health insights</p>
            </div>

            <div className="space-y-6">
              {/* Primary Diagnosis */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Primary Diagnosis</h3>
                  <div className="flex items-center text-blue-600">
                    <span className="text-sm font-medium mr-2">Confidence:</span>
                    <span className="text-lg font-bold">{analysisResults.confidence}%</span>
                  </div>
                </div>
                <p className="text-xl font-semibold text-blue-800 mb-2">{analysisResults.primaryDiagnosis}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  analysisResults.severity === 'mild' ? 'bg-green-100 text-green-800' : 
                  analysisResults.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  Severity: {analysisResults.severity.charAt(0).toUpperCase() + analysisResults.severity.slice(1)}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
                <ul className="space-y-2">
                  {analysisResults.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Red Flags */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">⚠️ When to Seek Immediate Care</h3>
                <ul className="space-y-2">
                  {analysisResults.redFlags.map((flag, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentPage('telemedicine')}
                  className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Consult Doctor Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setSymptoms('');
                    setSelectedSymptoms([]);
                    setAnalysisComplete(false);
                    setUserInfo({age: '', gender: '', duration: ''});
                  }}
                  className="px-6 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  New Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SymptomChecker;