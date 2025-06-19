import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface InputFieldsProps {
  username: string;
  onUsernameChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  className?: string;
}

const InputFields: React.FC<InputFieldsProps> = ({
  username,
  onUsernameChange,
  password,
  onPasswordChange,
  className
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <Input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          className="bg-card border-input text-card-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
          autoComplete="username"
          required
        />
      </div>
      <div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          className="bg-card border-input text-card-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
          autoComplete="current-password"
          required
        />
      </div>
    </div>
  );
};

export default InputFields;
