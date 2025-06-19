import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <main
      className={cn(
        // Apply overall layout requirements for centering content on the screen.
        // h-screen ensures the layout takes full viewport height.
        // bg-background sets the themed background color for the entire layout area.
        // text-foreground sets the default text color according to the theme.
        "flex justify-center items-center h-screen bg-background text-foreground",
        className
      )}
    >
      {/* Children, such as AuthLayout or other page-specific layouts, will be rendered here. */}
      {children}
    </main>
  );
};

export default MainAppLayout;
