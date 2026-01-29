"use client";

import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="px-6 md:px-12 lg:px-24 xl:px-32 relative" style={{ backgroundColor: '#D3D3D3' }}>
      {children}
    </div>
  );
}
