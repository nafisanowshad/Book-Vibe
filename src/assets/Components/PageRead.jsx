import React, { useEffect, useState } from 'react';
import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { getStoredReadBook } from '../../Utility/localstorage';

const PageRead = () => {
  const pageRead = useLoaderData();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedReadBooks = getStoredReadBook();
    const readBooksData = pageRead.filter(book => 
      storedReadBooks.map(id => id.toString()).includes(book.id.toString())
    );

    const chartData = readBooksData.map(read => ({
      name: read.bookName,
      uv: read.totalPages,
    }));

    setData(chartData);
  }, [pageRead]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-red-600 font-mono p-5 relative overflow-hidden">
      
      {/* Background Matrix Effect (Optional Subtle text) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none text-[10px] leading-none overflow-hidden">
        {Array(50).fill("SYSTEM_ERROR_404_RESOURCE_NOT_FOUND_RETRYING_CONNECTION_").join(" ")}
      </div>

      <div className="z-10 bg-red-950/10 p-12 rounded-lg text-center shadow-[0_0_60px_rgba(255,0,0,0.15)] max-w-2xl w-full">
        
        {/* Top Status */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
          <p className="text-xs tracking-[0.3em] font-bold">SYSTEM ERROR</p>
        </div>

        {/* Big 404 Header */}
        <h1 className="text-[120px] md:text-[180px] font-black italic tracking-tighter leading-none mb-2 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-[0.2em]">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 max-w-sm mx-auto mb-10 text-sm leading-relaxed">
          The resource you're looking for has been lost in the void. 
          It may have been moved, deleted, or never existed at all.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="w-full md:w-auto bg-red-600 text-white px-10 py-3 font-bold hover:bg-red-700 transition-all uppercase text-xs flex items-center justify-center gap-2 active:scale-95"
          >
            <span>←</span> GO HOME
          </Link>
          
          <button 
            onClick={() => navigate(-1)} 
            className="w-full md:w-auto border border-red-600 text-red-600 px-10 py-3 font-bold hover:bg-red-600 hover:text-white transition-all uppercase text-xs flex items-center justify-center gap-2 active:scale-95"
          >
            <span>↩</span> GO BACK
          </button>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="mt-8 text-[10px] text-red-900/50 tracking-widest uppercase">
        Book-Vibe Security Protocol v2.0.31
      </div>
    </div>
  );
};

export default PageRead;