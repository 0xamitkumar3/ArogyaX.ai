import React, { useState } from 'react';
import { 
  TrendingUp, 
  Activity, 
  Heart, 
  Brain, 
  Calendar, 
  Bell,
  Users,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUp,
  ArrowDown,
  Plus,
  Eye,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';

interface DashboardProps {
  setCurrentPage: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentPage }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const healthMetrics = [
    {
      title: 'Heart Rate',
      value: '72 bpm',
      change: '+2.5%',
      trend: 'up',
      status: 'normal',
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      title: 'Blood Pressure',
      value: '120/80',
      change: '-1.2%',
      trend: 'down',
      status: 'normal',
      icon: Activity,
      color: 'bg-blue-500'
    },
    {
      title: 'Sleep Quality',
      value: '85%',
      change: '+5.8%',
      trend: 'up',
      status: 'good',
      icon: Brain,
      color: 'bg-purple-500'
    },
    {
      title: 'Step Count',
      value: '8,542',
      change: '+12.4%',
      trend: 'up',
      status: 'good',
      icon: TrendingUp,
      color: 'bg-green-500'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Priya Sharma',
      specialty: 'Cardiologist',
      date: '2024-01-20',
      time: '2:30 PM',
      type: 'Video Call',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Rajesh Kumar',
      specialty: 'General Physician',
      date: '2024-01-22',
      time: '11:00 AM',
      type: 'In-person',
      status: 'pending'
    }
  ];

  const healthInsights = [
    {
      title: 'Cardiovascular Health',
      risk: 'Low',
      score: 85,
      recommendations: [
        'Continue regular exercise',
        'Monitor blood pressure weekly',
        'Maintain current diet'
      ],
      color: 'green'
    },
    {
      title: 'Diabetes Risk',
      risk: 'Moderate',
      score: 65,
      recommendations: [
        'Reduce sugar intake',
        'Increase fiber consumption',
        'Schedule HbA1c test'
      ],
      color: 'yellow'
    },
    {
      title: 'Mental Health',
      risk: 'Low',
      score: 90,
      recommendations: [
        'Continue meditation practice',
        'Maintain work-life balance',
        'Regular social activities'
      ],
      color: 'green'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'reminder',
      title: 'Medication Reminder',
      message: 'Time to take your blood pressure medication',
      time: '10 minutes ago',
      urgent: true
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Appointment Confirmed',
      message: 'Your consultation with Dr. Priya Sharma is confirmed',
      time: '2 hours ago',
      urgent: false
    },
    {
      id: 3,
      type: 'health',
      title: 'Health Tip',
      message: 'Your step count is 20% below this week\'s average',
      time: '1 day ago',
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's your health overview.</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="week">Last 7 days</option>
              <option value="month">Last 30 days</option>
              <option value="year">Last year</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${metric.color}`}>
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded ${
                  metric.status === 'normal' || metric.status === 'good' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {metric.status}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                <div className={`flex items-center text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Health Insights */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">AI Health Insights</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-6">
                {healthInsights.map((insight, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
                      <div className="flex items-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium mr-3 ${
                          insight.color === 'green' ? 'bg-green-100 text-green-700' :
                          insight.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {insight.risk} Risk
                        </span>
                        <span className="text-2xl font-bold text-gray-900">{insight.score}%</span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className={`h-2 rounded-full ${
                          insight.color === 'green' ? 'bg-green-500' :
                          insight.color === 'yellow' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${insight.score}%` }}
                      ></div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Recommendations:</h4>
                      <ul className="space-y-1">
                        {insight.recommendations.map((rec, recIndex) => (
                          <li key={recIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Health Trends</h2>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <LineChart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <BarChart3 className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <PieChart className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 className="h-12 w-12 mx-auto mb-3" />
                  <p>Interactive health charts and trends</p>
                  <p className="text-sm">Heart rate, blood pressure, and activity data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Upcoming Appointments</h3>
                <button 
                  onClick={() => setCurrentPage('telemedicine')}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Book New
                </button>
              </div>
              
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        appointment.status === 'confirmed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{appointment.specialty}</p>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(appointment.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {appointment.time}
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {appointment.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Schedule Appointment
              </button>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="border-l-4 border-blue-500 bg-blue-50 p-3 rounded-r-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                      </div>
                      {notification.urgent && (
                        <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium">
                View All Notifications
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setCurrentPage('symptom-checker')}
                  className="w-full flex items-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Brain className="h-5 w-5 mr-3" />
                  Check Symptoms
                </button>
                
                <button 
                  onClick={() => setCurrentPage('health-records')}
                  className="w-full flex items-center p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Eye className="h-5 w-5 mr-3" />
                  View Records
                </button>
                
                <button className="w-full flex items-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  <Target className="h-5 w-5 mr-3" />
                  Set Health Goals
                </button>
                
                <button className="w-full flex items-center p-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                  <Users className="h-5 w-5 mr-3" />
                  Family Health
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;