import React, { useState } from 'react';
import { 
  Video, 
  Calendar, 
  Star, 
  MapPin, 
  Clock, 
  User, 
  Phone, 
  MessageSquare,
  Filter,
  Search,
  Heart,
  Brain,
  Eye,
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Award
} from 'lucide-react';

interface TelemedicineProps {
  setCurrentPage: (page: string) => void;
}

const Telemedicine: React.FC<TelemedicineProps> = ({ setCurrentPage }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);

  const specialties = [
    { id: 'all', name: 'All Specialties', icon: Stethoscope, count: 5000 },
    { id: 'general', name: 'General Medicine', icon: User, count: 1200 },
    { id: 'cardiology', name: 'Cardiology', icon: Heart, count: 300 },
    { id: 'neurology', name: 'Neurology', icon: Brain, count: 200 },
    { id: 'ophthalmology', name: 'Ophthalmology', icon: Eye, count: 180 }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialty: 'Cardiologist',
      experience: 15,
      rating: 4.9,
      reviews: 1247,
      location: 'AIIMS, New Delhi',
      languages: ['English', 'Hindi', 'Punjabi'],
      education: 'MBBS, MD (Cardiology)',
      consultationFee: 500,
      nextAvailable: '2:30 PM Today',
      avatar: '👩‍⚕️',
      verified: true,
      bio: 'Leading cardiologist with expertise in interventional cardiology and heart disease prevention.'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Kumar',
      specialty: 'General Physician',
      experience: 12,
      rating: 4.8,
      reviews: 892,
      location: 'Max Hospital, Bangalore',
      languages: ['English', 'Hindi', 'Tamil', 'Kannada'],
      education: 'MBBS, MD (Internal Medicine)',
      consultationFee: 300,
      nextAvailable: '4:00 PM Today',
      avatar: '👨‍⚕️',
      verified: true,
      bio: 'Experienced general physician specializing in preventive healthcare and chronic disease management.'
    },
    {
      id: 3,
      name: 'Dr. Sarah Augustine',
      specialty: 'Neurologist',
      experience: 18,
      rating: 4.9,
      reviews: 756,
      location: 'Fortis Hospital, Mumbai',
      languages: ['English', 'Hindi', 'Marathi'],
      education: 'MBBS, DM (Neurology)',
      consultationFee: 800,
      nextAvailable: 'Tomorrow 10:00 AM',
      avatar: '👩‍⚕️',
      verified: true,
      bio: 'Specialist in neurological disorders, stroke management, and epilepsy treatment.'
    }
  ];

  const filteredDoctors = selectedSpecialty === 'all' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty.toLowerCase().includes(selectedSpecialty));

  const handleBookConsultation = (doctor: any) => {
    setSelectedDoctor(doctor);
    setShowBooking(true);
    setBookingStep(1);
  };

  if (showBooking && selectedDoctor) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Doctor Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
              <div className="flex items-center">
                <div className="text-4xl mr-4">{selectedDoctor.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h2 className="text-2xl font-bold text-white mr-3">{selectedDoctor.name}</h2>
                    {selectedDoctor.verified && (
                      <div className="bg-green-500 rounded-full p-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-blue-100 text-lg">{selectedDoctor.specialty}</p>
                  <div className="flex items-center text-blue-200 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedDoctor.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">₹{selectedDoctor.consultationFee}</div>
                  <p className="text-blue-200 text-sm">Consultation Fee</p>
                </div>
              </div>
            </div>

            {/* Booking Steps */}
            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Book Consultation</h3>
                  <button
                    onClick={() => setShowBooking(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step <= bookingStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 h-1 mx-2 ${
                          step < bookingStep ? 'bg-blue-600' : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>Select Time</span>
                  <span>Patient Details</span>
                  <span>Payment</span>
                </div>
              </div>

              {bookingStep === 1 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Consultation Time</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Today</h5>
                      <div className="space-y-2">
                        {['2:30 PM', '3:00 PM', '4:30 PM'].map((time) => (
                          <button
                            key={time}
                            className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{time}</span>
                              <span className="text-sm text-green-600">Available</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Tomorrow</h5>
                      <div className="space-y-2">
                        {['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM'].map((time) => (
                          <button
                            key={time}
                            className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{time}</span>
                              <span className="text-sm text-green-600">Available</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setShowBooking(false)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setBookingStep(2)}
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {bookingStep === 2 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter patient name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                        <input
                          type="number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter age"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>Select gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Consultation</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Brief description of your health concern..."
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setBookingStep(1)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setBookingStep(3)}
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment & Confirmation</h4>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h5 className="font-semibold text-gray-900 mb-4">Consultation Summary</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Doctor:</span>
                        <span className="font-medium">{selectedDoctor.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date & Time:</span>
                        <span className="font-medium">Today, 2:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Consultation Type:</span>
                        <span className="font-medium">Video Call</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-300 pt-2 mt-4">
                        <span className="font-semibold">Total Amount:</span>
                        <span className="font-bold text-lg">₹{selectedDoctor.consultationFee}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Payment Method</h5>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" defaultChecked />
                        <span>UPI / Digital Wallet</span>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" />
                        <span>Credit / Debit Card</span>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" />
                        <span>Net Banking</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setBookingStep(2)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        alert('Consultation booked successfully! You will receive a video call link via SMS.');
                        setShowBooking(false);
                        setCurrentPage('dashboard');
                      }}
                      className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center"
                    >
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Confirm & Pay ₹{selectedDoctor.consultationFee}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Video className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Telemedicine Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with 5000+ verified doctors instantly. Available 24/7 with multilingual support.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-2xl font-bold text-green-600">5000+</div>
            <div className="text-sm text-gray-600">Verified Doctors</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Availability</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-2xl font-bold text-purple-600">₹300</div>
            <div className="text-sm text-gray-600">Starting From</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-2xl font-bold text-orange-600">12+</div>
            <div className="text-sm text-gray-600">Languages</div>
          </div>
        </div>

        {/* Specialties Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Doctors by Specialty</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                onClick={() => setSelectedSpecialty(specialty.id)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                  selectedSpecialty === specialty.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <specialty.icon className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium text-center">{specialty.name}</span>
                <span className="text-xs opacity-75">{specialty.count} doctors</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name, specialty, or location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Doctors List */}
        <div className="space-y-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row">
                {/* Doctor Info */}
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{doctor.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900 mr-3">{doctor.name}</h3>
                        {doctor.verified && (
                          <div className="bg-green-500 rounded-full p-1" title="Verified Doctor">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <Award className="h-4 w-4 text-yellow-500 ml-2" title="Top Rated" />
                      </div>
                      <p className="text-blue-600 font-semibold text-lg">{doctor.specialty}</p>
                      <p className="text-gray-600 text-sm">{doctor.education}</p>
                      <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {doctor.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {doctor.experience} years exp.
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{doctor.bio}</p>

                  {/* Languages */}
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">Languages: </span>
                    {doctor.languages.map((lang, index) => (
                      <span key={lang} className="text-sm text-blue-600">
                        {lang}{index < doctor.languages.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold text-gray-900">{doctor.rating}</span>
                      <span className="ml-1 text-sm text-gray-600">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Booking Section */}
                <div className="md:w-80 mt-6 md:mt-0 md:ml-6 md:border-l md:pl-6">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-bold text-green-600 mb-1">₹{doctor.consultationFee}</div>
                    <p className="text-sm text-gray-600 mb-4">Video Consultation</p>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center text-green-700">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Next available: {doctor.nextAvailable}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookConsultation(doctor)}
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center mb-3"
                    >
                      <Video className="mr-2 h-5 w-5" />
                      Book Video Consultation
                    </button>

                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm flex items-center justify-center">
                        <Phone className="mr-1 h-4 w-4" />
                        Call
                      </button>
                      <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm flex items-center justify-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-200 rounded-lg font-semibold hover:border-blue-300 hover:bg-blue-50 transition-colors">
            Load More Doctors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;