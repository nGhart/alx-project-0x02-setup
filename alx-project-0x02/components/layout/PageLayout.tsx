import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}
const PageLayout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <h1 className="text-3xl font-bold">{title}</h1>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
