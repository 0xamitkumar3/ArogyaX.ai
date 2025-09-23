import React, { useState } from 'react';
import { 
  Stethoscope, 
  Calendar, 
  Users, 
  FileText, 
  Clock,
  Video,
  MessageSquare,
  TrendingUp,
  Star,
  Award,
  Bell,
  Settings,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
  Filter
} from 'lucide-react';

interface DoctorPortalProps {
  setCurrentPage: (page: string) => void;
}

const DoctorPortal: React.FC<DoctorPortalProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const doctorStats = [
    { title: 'Total Patients', value: '1,247', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { title: 'Today\'s Appointments', value: '18', change: '+3', icon: Calendar, color: 'bg-green-500' },
    { title: 'Consultations This Month', value: '342', change: '+8%', icon: Video, color: 'bg-purple-500' },
    { title: 'Patient Rating', value: '4.9', change: '+0.1', icon: Star, color: 'bg-yellow-500' }
  ];

  const todayAppointments = [
    {
      id: 1,
      patient: 'Priya Singh',
      age: 32,
      time: '9:00 AM',
      type: 'Video Call',
      reason: 'Follow-up consultation',
      status: 'confirmed'
    },
    {
      id: 2,
      patient: 'Rajesh Kumar',
      age: 45,
      time: '10:30 AM',
      type: 'In-person',
      reason: 'Blood pressure check',
      status: 'waiting'
    },
    {
      id: 3,
      patient: 'Sarah Johnson',
      age: 28,
      time: '11:15 AM',
      type: 'Video Call',
      reason: 'General consultation',
      status: 'confirmed'
    },
    {
      id: 4,
      patient: 'Amit Patel',
      age: 55,
      time: '2:00 PM',
      type: 'Video Call',
      reason: 'Diabetes management',
      status: 'confirmed'
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: 'Priya Singh',
      age: 32,
      gender: 'Female',
      lastVisit: '2024-01-15',
      condition: 'Hypertension',
      status: 'Stable'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      age: 45,
      gender: 'Male',
      lastVisit: '2024-01-12',
      condition: 'Diabetes Type 2',
      status: 'Monitoring'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      age: 28,
      gender: 'Female',
      lastVisit: '2024-01-10',
      condition: 'Anxiety',
      status: 'Improving'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Doctor Portal</h1>
              <p className="text-gray-600">Sign in to access your medical dashboard</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical License Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your license number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsAuthenticated(true)}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                New to ArogyaX.AI?{' '}
                <button className="text-blue-600 hover:text-blue-500 font-medium">
                  Register as Healthcare Provider
                </button>
              </p>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Benefits of Joining</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Access to AI-powered diagnostic tools</li>
                <li>• Streamlined patient management</li>
                <li>• Telemedicine platform integration</li>
                <li>• Comprehensive health records</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Doctor Portal Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center mr-8">
                <Stethoscope className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Dr. Priya Sharma</h1>
                  <p className="text-sm text-gray-600">Cardiologist, AIIMS Delhi</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <Settings className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: TrendingUp },
              { id: 'appointments', name: 'Appointments', icon: Calendar },
              { id: 'patients', name: 'Patients', icon: Users },
              { id: 'consultations', name: 'Consultations', icon: Video },
              { id: 'records', name: 'Records', icon: FileText }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {doctorStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Today's Schedule */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      Add Slot
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Manage Schedule
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="font-semibold text-gray-900 mr-3">{appointment.patient}</h3>
                            <span className="text-sm text-gray-600">Age: {appointment.age}</span>
                            <span className={`ml-3 px-2 py-1 rounded text-xs font-medium ${
                              appointment.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                              appointment.status === 'waiting' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {appointment.status}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{appointment.reason}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {appointment.time}
                            </div>
                            <div className="flex items-center">
                              {appointment.type === 'Video Call' ? (
                                <Video className="h-4 w-4 mr-1" />
                              ) : (
                                <User className="h-4 w-4 mr-1" />
                              )}
                              {appointment.type}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {appointment.type === 'Video Call' && (
                            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                              Start Call
                            </button>
                          )}
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions & Recent Patients */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                      <Video className="h-5 w-5 mr-3" />
                      Start Consultation
                    </button>
                    <button className="w-full flex items-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                      <Plus className="h-5 w-5 mr-3" />
                      Add Patient
                    </button>
                    <button className="w-full flex items-center p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                      <FileText className="h-5 w-5 mr-3" />
                      Create Prescription
                    </button>
                    <button className="w-full flex items-center p-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                      <MessageSquare className="h-5 w-5 mr-3" />
                      Patient Messages
                    </button>
                  </div>
                </div>

                {/* Recent Patients */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Recent Patients</h3>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {recentPatients.map((patient) => (
                      <div key={patient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{patient.name}</h4>
                          <p className="text-sm text-gray-600">{patient.condition}</p>
                          <p className="text-xs text-gray-500">Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          patient.status === 'Stable' ? 'bg-green-100 text-green-700' :
                          patient.status === 'Monitoring' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {patient.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs content would go here */}
        {activeTab !== 'dashboard' && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-gray-400 mb-4">
              {activeTab === 'appointments' && <Calendar className="h-16 w-16 mx-auto" />}
              {activeTab === 'patients' && <Users className="h-16 w-16 mx-auto" />}
              {activeTab === 'consultations' && <Video className="h-16 w-16 mx-auto" />}
              {activeTab === 'records' && <FileText className="h-16 w-16 mx-auto" />}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              This section would contain detailed {activeTab} management features for healthcare professionals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorPortal;