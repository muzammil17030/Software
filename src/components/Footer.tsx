import React from 'react';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem 0',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const topSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    width: '100%',
    color: '#3498db',
  };

  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  };

  const listItemStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
    width: 'calc(25% - 1rem)',
  };

  const listTitleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    marginBottom: '0.75rem',
    color: '#e74c3c',
  };

  const linkStyle: React.CSSProperties = {
    color: '#bdc3c7',
    display: 'block',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const bottomSectionStyle: React.CSSProperties = {
    borderTop: '1px solid #34495e',
    marginTop: '2rem',
    paddingTop: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
    color: '#95a5a6',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <section style={topSectionStyle}>
          <h1 style={titleStyle}>Al-Hamd Schooling System</h1>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <h3 style={listTitleStyle}>Qualities</h3>
              <a href="#" style={linkStyle}>Teaching with fun</a>
              <a href="#" style={linkStyle}>Quality Teacher</a>
              <a href="#" style={linkStyle}>Online Teaching</a>
              <a href="#" style={linkStyle}>Learning Tools</a>
            </li>
            <li style={listItemStyle}>
              <h3 style={listTitleStyle}>Pricing</h3>
              <a href="#" style={linkStyle}>Overview</a>
              <a href="#" style={linkStyle}>Flexible Data</a>
              <a href="#" style={linkStyle}>High Volume</a>
              <a href="#" style={linkStyle}>Enterprise</a>
            </li>
            <li style={listItemStyle}>
              <h3 style={listTitleStyle}>Developers</h3>
              <a href="#" style={linkStyle}>Muzammil khan</a>
              <a href="#" style={linkStyle}>Mahad Khan</a>
              <a href="#" style={linkStyle}>Noman Sarfaraz</a>
            </li>
            <li style={listItemStyle}>
              <h3 style={listTitleStyle}>About Us</h3>
              <a href="#" style={linkStyle}>Contact</a>
              <a href="#" style={linkStyle}>Blog</a>
              <a href="#" style={linkStyle}>Partnerships</a>
              <a href="#" style={linkStyle}>Careers</a>
            </li>
          </ul>
        </section>
        <section style={bottomSectionStyle}>
          © 2024 all rights reserved AL-HAMD
        </section>
      </div>
    </footer>
  );
};

export default Footer;