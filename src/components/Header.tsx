import React from 'react';
import { Heart, Menu, X, Phone, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  setCurrentPage, 
  mobileMenuOpen, 
  setMobileMenuOpen,
  isAuthenticated,
  setIsAuthenticated
}) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'symptom-checker', label: 'Symptom Checker', icon: null },
    { id: 'telemedicine', label: 'Consult Doctor', icon: null },
    { id: 'health-records', label: 'Health Records', icon: null },
    { id: 'dashboard', label: 'Dashboard', icon: null },
    { id: 'doctor-portal', label: 'Doctor Portal', icon: null },
  ];

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-200">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                ArogyaX.AI
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Smart Healthcare</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <Globe className="h-4 w-4 mr-1" />
              हिंदी
            </button>
            {isAuthenticated ? (
              <>
                <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency
                </button>
                <button 
                  onClick={handleSignOut}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setCurrentPage('login')}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => setCurrentPage('signup')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <button className="flex items-center w-full px-3 py-2 text-gray-600 hover:text-blue-600">
                  <Globe className="h-4 w-4 mr-2" />
                  हिंदी / English
                </button>
                {isAuthenticated ? (
                  <>
                    <button className="flex items-center w-full px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency Helpline
                    </button>
                    <button 
                      onClick={handleSignOut}
                      className="flex items-center w-full px-3 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => {
                        setCurrentPage('login');
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Sign In
                    </button>
                    <button 
                      onClick={() => {
                        setCurrentPage('signup');
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;