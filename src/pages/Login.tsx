import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder login logic
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md glass-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl gradient-text">Login</CardTitle>
          <CardDescription className="text-muted-foreground">
            Access your developer dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="developer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                data-testid="input-password"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              data-testid="button-submit-login"
            >
              Login
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Demo login for DevSnipahh's portfolio
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}