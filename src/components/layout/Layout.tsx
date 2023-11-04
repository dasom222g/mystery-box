import React, { FC } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  // logic
  const { pathname } = useLocation();

  // view
  return (
    <div
      className={`h-full py-10 px-5 overflow-auto ${
        pathname === "/" ? "bg-mb-blue-600" : "bg-mb-gray-800"
      }`}
    >
      {children}
    </div>
  );
};

export default Layout;
