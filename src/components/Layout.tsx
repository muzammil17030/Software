import React from 'react';
import Sidebar from './Sidebar.tsx';
import Content from './Content.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;