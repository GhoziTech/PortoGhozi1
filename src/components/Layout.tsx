import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { MatrixBackground } from './MatrixBackground';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};
