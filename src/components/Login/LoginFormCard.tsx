import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import InputFields from './InputFields';
import PrimaryButton from './PrimaryButton';
import SecondaryLink from './SecondaryLink';
import { cn } from '@/lib/utils';

interface LoginFormCardProps {
  className?: string;
}

const LoginFormCard: React.FC<LoginFormCardProps> = ({ className }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

  const handleLogin = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(''); // Clear previous errors

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
      console.error("Login attempt failed: Username and password are required.");
      return;
    }
    
    console.log('Attempting to log in with:', { username, password });
    // Placeholder for actual login logic (e.g., API call)
    // Simulate API call
    setTimeout(() => {
      if (username === "testuser" && password === "password123") {
        console.log("Login successful");
        // Redirect or update UI state for successful login
      } else {
        setError("Invalid username or password.");
        console.error("Login attempt failed: Invalid username or password.");
      }
    }, 1000);
  }, [username, password]);

  return (
    <Card className={cn(
      "w-[320px] bg-card text-card-foreground shadow-md rounded-md",
      className
    )}>
      <CardContent className="p-8">
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-primaryText">
            Log in
          </h2>
          
          <InputFields
            username={username}
            onUsernameChange={setUsername}
            password={password}
            onPasswordChange={setPassword}
          />

          {error && (
            <p className="text-sm text-destructive text-center -mt-2 mb-2">{error}</p>
          )}
          
          <PrimaryButton type="submit">
            Log in
          </PrimaryButton>
          
          <div className="text-center">
            <SecondaryLink
              text="or, sign up"
              onClick={() => console.log('Navigate to sign up page')}
              // href="/signup" // Example if it's a direct link
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginFormCard;
