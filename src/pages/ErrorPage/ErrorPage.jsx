import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-[#0D1117] flex flex-col justify-center items-center text-center px-4">
            {/* 404 Visual */}
            <h1 className="text-[120px] md:text-[180px] font-extrabold text-white tracking-tighter opacity-10 leading-none select-none">
                404
            </h1>

            {/* Content Area */}
            <div className="absolute flex flex-col items-center">
                <div className="mb-6">
                    {/* Apni chaile ekhane choto ekta SVG ba Icon dite paren */}
                    <span className="text-6xl animate-bounce">🚀</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Lost in Space?
                </h2>
                
                <p className="text-gray-400 max-w-md mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                        to="/" 
                        className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 ease-in-out shadow-lg shadow-red-500/20"
                    >
                        Return Home
                    </Link>
                    
                    <button 
                        onClick={() => window.location.reload()} 
                        className="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold rounded-full transition duration-300"
                    >
                        Try Again
                    </button>
                </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute w-64 h-64 bg-red-600 rounded-full blur-[120px] opacity-20 -z-10"></div>
        </div>
    );
};

export default ErrorPage;