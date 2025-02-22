import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from './context/AuthContext';

export const metadata: Metadata = {
  title: 'CareConne - Healthcare Platform',
  description: 'Bringing healthcare closer to everyone through technology and community support.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
} 