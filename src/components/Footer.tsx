import React from 'react';
import logoImage from '../assets/file_000000005d0462309eb434f4f4fd873d copy.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 backdrop-blur-sm text-white mt-16 border-t border-red-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src={logoImage}
              alt="Red Set Logo" 
              className="h-8 w-8"
            />
            <div>
              <h3 className="font-bold text-lg text-white">Red Set</h3>
              <p className="text-sm text-red-400">AI Security Assessment Platform</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-white mb-1">Red Set. Deploy.</p>
            <p className="text-sm text-red-400">Autonomous • Adversarial • Comprehensive</p>
          </div>
        </div>
        <div className="border-t border-red-500/30 mt-6 pt-6 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            Professional AI security assessment for responsible deployment and vulnerability testing.
          </p>
          <a 
            href="https://bolt.new" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="mr-1">⚡</span>
            Made by Bolt
          </a>
        </div>
      </div>
    </footer>
  );
};