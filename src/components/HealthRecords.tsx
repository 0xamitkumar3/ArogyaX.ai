import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Download, 
  Share2, 
  Lock, 
  Calendar, 
  User, 
  Activity,
  QrCode,
  Eye,
  Plus,
  Filter,
  Search,
  Shield,
  Zap,
  Clock,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

interface HealthRecordsProps {
  setCurrentPage: (page: string) => void;
}

const HealthRecords: React.FC<HealthRecordsProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('records');
  const [showQRCode, setShowQRCode] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  const records = [
    {
      id: 1,
      type: 'Lab Report',
      title: 'Complete Blood Count (CBC)',
      date: '2024-01-15',
      doctor: 'Dr. Priya Sharma',
      hospital: 'AIIMS New Delhi',
      status: 'Normal',
      category: 'lab',
      file: 'cbc_report.pdf',
      size: '2.3 MB'
    },
    {
      id: 2,
      type: 'Prescription',
      title: 'Hypertension Medication',
      date: '2024-01-10',
      doctor: 'Dr. Rajesh Kumar',
      hospital: 'Max Hospital Bangalore',
      status: 'Active',
      category: 'prescription',
      file: 'prescription.pdf',
      size: '1.1 MB'
    },
    {
      id: 3,
      type: 'X-Ray',
      title: 'Chest X-Ray',
      date: '2024-01-08',
      doctor: 'Dr. Sarah Augustine',
      hospital: 'Fortis Mumbai',
      status: 'Clear',
      category: 'imaging',
      file: 'chest_xray.jpg',
      size: '5.2 MB'
    },
    {
      id: 4,
      type: 'Consultation',
      title: 'Cardiology Follow-up',
      date: '2024-01-05',
      doctor: 'Dr. Priya Sharma',
      hospital: 'AIIMS New Delhi',
      status: 'Completed',
      category: 'consultation',
      file: 'consultation_notes.pdf',
      size: '0.8 MB'
    }
  ];

  const immunizations = [
    { vaccine: 'COVID-19 Booster', date: '2023-12-15', nextDue: '2024-12-15', status: 'Complete' },
    { vaccine: 'Flu Shot', date: '2023-10-20', nextDue: '2024-10-20', status: 'Complete' },
    { vaccine: 'Hepatitis B', date: '2020-03-15', nextDue: '2030-03-15', status: 'Complete' },
    { vaccine: 'Tetanus', date: '2019-07-10', nextDue: '2029-07-10', status: 'Due Soon' }
  ];

  const vitals = [
    { metric: 'Blood Pressure', value: '120/80 mmHg', date: '2024-01-15', status: 'Normal' },
    { metric: 'Heart Rate', value: '72 bpm', date: '2024-01-15', status: 'Normal' },
    { metric: 'Temperature', value: '98.6°F', date: '2024-01-15', status: 'Normal' },
    { metric: 'Weight', value: '70 kg', date: '2024-01-10', status: 'Normal' },
    { metric: 'Height', value: '175 cm', date: '2023-01-01', status: 'Recorded' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <FileText className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Health Records</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, portable, and blockchain-verified health records accessible anytime, anywhere.
          </p>
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8 text-white">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Shield className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Blockchain Security</h3>
              <p className="text-purple-100 text-sm">End-to-end encrypted with immutable audit trails</p>
            </div>
            <div>
              <QrCode className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Instant Sharing</h3>
              <p className="text-purple-100 text-sm">Share records instantly via QR codes</p>
            </div>
            <div>
              <Zap className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI Insights</h3>
              <p className="text-purple-100 text-sm">Smart analysis and trend detection</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setShowQRCode(true)}
            className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group"
          >
            <QrCode className="h-6 w-6 text-purple-600 mr-3 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-900">Share via QR</span>
          </button>
          <button className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <Upload className="h-6 w-6 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-900">Upload Record</span>
          </button>
          <button className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <Download className="h-6 w-6 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-900">Export All</span>
          </button>
          <button className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <Share2 className="h-6 w-6 text-orange-600 mr-3 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-900">Share Access</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'records', name: 'Medical Records', icon: FileText },
                { id: 'vitals', name: 'Vital Signs', icon: Activity },
                { id: 'immunizations', name: 'Immunizations', icon: Shield },
                { id: 'timeline', name: 'Health Timeline', icon: Clock }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'records' && (
              <div>
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search medical records..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <Filter className="h-5 w-5 mr-2" />
                    Filter
                  </button>
                  <button className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    <Plus className="h-5 w-5 mr-2" />
                    Add Record
                  </button>
                </div>

                {/* Records List */}
                <div className="space-y-4">
                  {records.map((record) => (
                    <div key={record.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center mb-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                                  record.category === 'lab' ? 'bg-blue-100 text-blue-700' :
                                  record.category === 'prescription' ? 'bg-green-100 text-green-700' :
                                  record.category === 'imaging' ? 'bg-purple-100 text-purple-700' :
                                  'bg-orange-100 text-orange-700'
                                }`}>
                                  {record.type}
                                </span>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  record.status === 'Normal' || record.status === 'Complete' || record.status === 'Clear' 
                                    ? 'bg-green-100 text-green-700' 
                                    : record.status === 'Active' 
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                  {record.status}
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{record.title}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {new Date(record.date).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1" />
                                  {record.doctor}
                                </div>
                                <span>{record.hospital}</span>
                              </div>
                            </div>
                            <div className="text-right text-sm text-gray-500">
                              <div>{record.size}</div>
                              <div className="mt-1">{record.file}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <button 
                              onClick={() => setSelectedRecord(record)}
                              className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </button>
                            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </button>
                            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'vitals' && (
              <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vitals.map((vital, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{vital.metric}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          vital.status === 'Normal' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {vital.status}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">{vital.value}</div>
                      <div className="text-sm text-gray-600">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        {new Date(vital.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'immunizations' && (
              <div>
                <div className="space-y-4">
                  {immunizations.map((immunization, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold text-gray-900 mr-3">{immunization.vaccine}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            immunization.status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {immunization.status}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <strong>Last Dose:</strong> {new Date(immunization.date).toLocaleDateString()}
                          </div>
                          <div>
                            <strong>Next Due:</strong> {new Date(immunization.nextDue).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      {immunization.status === 'Due Soon' && (
                        <AlertCircle className="h-6 w-6 text-yellow-500 ml-4" />
                      )}
                      {immunization.status === 'Complete' && (
                        <CheckCircle className="h-6 w-6 text-green-500 ml-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                  <div className="space-y-6">
                    {records.map((record, index) => (
                      <div key={record.id} className="relative flex items-start">
                        <div className="absolute left-0 w-8 h-8 bg-white border-4 border-purple-500 rounded-full"></div>
                        <div className="ml-12 bg-white rounded-xl p-6 shadow-lg border border-gray-200 flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-900">{record.title}</h3>
                              <p className="text-gray-600 text-sm">{record.type} • {record.doctor}</p>
                            </div>
                            <span className="text-sm text-gray-500">{new Date(record.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-gray-700 text-sm">{record.hospital}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* QR Code Modal */}
        {showQRCode && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Health Records</h3>
                <div className="bg-gray-100 w-64 h-64 mx-auto rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="h-32 w-32 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-6">
                  Scan this QR code to instantly share your health records with healthcare providers.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowQRCode(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Download QR
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthRecords;