import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = () => {
  return (
    <main className="content p-4" style={{ backgroundColor: '#f0f8ff' }}>
      <div className='header d-flex justify-content-between align-items-center mb-4 bg-white p-3 rounded shadow-sm'>
        <h1 className='m-0 text-primary'> Al-Hamd Schooling System</h1>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="form-control search-bar" 
            style={{ 
              width: '250px', 
              borderRadius: '20px', 
              paddingLeft: '15px', 
              border: '1px solid #007bff' 
            }} 
          />
        </div>
      </div>
      {/* <div className="content-body bg-white p-4 rounded shadow">
        {children}
        
      </div> */}
    </main>
  );
};

export default Content;