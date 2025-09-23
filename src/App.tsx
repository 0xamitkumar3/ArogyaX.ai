import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import SymptomChecker from './components/SymptomChecker';
import Telemedicine from './components/Telemedicine';
import HealthRecords from './components/HealthRecords';
import Dashboard from './components/Dashboard';
import DoctorPortal from './components/DoctorPortal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderCurrentPage = () => {
    // Show login/signup pages when not authenticated
    if (!isAuthenticated) {
      switch (currentPage) {
        case 'login':
          return <Login setCurrentPage={setCurrentPage} setIsAuthenticated={setIsAuthenticated} />;
        case 'signup':
          return <Signup setCurrentPage={setCurrentPage} setIsAuthenticated={setIsAuthenticated} />;
        case 'home':
          return <HomePage setCurrentPage={setCurrentPage} />;
        case 'symptom-checker':
          return <SymptomChecker setCurrentPage={setCurrentPage} />;
        case 'telemedicine':
          return <Telemedicine setCurrentPage={setCurrentPage} />;
        default:
          // Redirect to login for protected pages
          return <Login setCurrentPage={setCurrentPage} setIsAuthenticated={setIsAuthenticated} />;
      }
    }

    // Show authenticated pages
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'symptom-checker':
        return <SymptomChecker setCurrentPage={setCurrentPage} />;
      case 'telemedicine':
        return <Telemedicine setCurrentPage={setCurrentPage} />;
      case 'health-records':
        return <HealthRecords setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'doctor-portal':
        return <DoctorPortal setCurrentPage={setCurrentPage} />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} setIsAuthenticated={setIsAuthenticated} />;
      case 'signup':
        return <Signup setCurrentPage={setCurrentPage} setIsAuthenticated={setIsAuthenticated} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  // Don't show header for login/signup pages
  const showHeader = currentPage !== 'login' && currentPage !== 'signup';

  return (
    <div className="min-h-screen bg-gray-50">
      {showHeader && (
        <Header 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;