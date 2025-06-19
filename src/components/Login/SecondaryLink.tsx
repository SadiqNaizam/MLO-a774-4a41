import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryLinkProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  href?: string;
  className?: string;
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({ text, onClick, href, className }) => {
  const commonClasses = cn(
    "text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors",
    className
  );

  if (href && !onClick) {
    return (
      <a href={href} className={commonClasses}>
        {text}
      </a>
    );
  }

  // Use a button for accessibility if it performs an action but isn't a traditional link
  // Or span if it's purely for display triggering an action handled by parent
  return (
    <button
      type="button"
      onClick={onClick}
      className={commonClasses}
      // If it should look exactly like a link, ensure button styles are reset
      style={{ background: 'none', border: 'none', padding: 0, margin: 0, textDecoration: 'none' }}
    >
      {text}
    </button>
  );
};

export default SecondaryLink;
