import React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "w-full bg-accent text-accent-foreground hover:bg-accent/90",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", // Ensure focus styles are visible
        props.disabled && "opacity-70 cursor-not-allowed", // Standard disabled style
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
