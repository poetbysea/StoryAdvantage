'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AuthButtons() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<'google' | 'email' | null>(null);
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleGoogleSignIn = async () => {
    setIsLoading('google');
    try {
      const result = await signIn('google', { 
        redirect: false,
        callbackUrl: '/dashboard' 
      });
      
      if (result?.error) {
        throw new Error(result.error);
      }
      
      // Redirect handled by NextAuth if successful
      if (result?.url) {
        router.push(result.url);
      }
    } catch (error) {
      toast.error('Failed to sign in with Google', {
        description: 'Please try again or use another method.',
      });
      console.error('Google sign in error:', error);
    } finally {
      setIsLoading(null);
    }
  };

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleMagicLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateEmail(email)) return;
    
    setIsLoading('email');
    try {
      const result = await signIn('email', { 
        email, 
        redirect: false,
        callbackUrl: '/dashboard'
      });
      
      if (result?.error) {
        throw new Error(result.error);
      }
      
      toast.success('Magic link sent!', {
        description: 'Check your email for the sign-in link.',
        duration: 10000,
        action: {
          label: 'Open Email',
          onClick: () => window.open('https://mail.google.com', '_blank')
        },
      });
      
      setShowEmailInput(false);
      setEmail('');
    } catch (error) {
      toast.error('Failed to send magic link', {
        description: error instanceof Error ? error.message : 'Please try again later.',
      });
      console.error('Magic link error:', error);
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="grid gap-4 w-full max-w-sm mx-auto" role="region" aria-label="Authentication options">
      <Button 
        variant="default"
        size="lg"
        onClick={handleGoogleSignIn}
        disabled={isLoading === 'google'}
        className="w-full flex items-center justify-center gap-2"
        aria-label="Continue with Google"
      >
        {isLoading === 'google' ? (
          <Icons.spinner className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Icons.google className="h-4 w-4" aria-hidden="true" />
        )}
        Continue with Google
      </Button>

      <div className="relative" aria-hidden="true">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      {showEmailInput ? (
        <form onSubmit={handleMagicLink} className="space-y-4">
          <div className="grid gap-1">
            <div className="space-y-1">
            <label htmlFor="email" className="sr-only">Email address</label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading === 'email'}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) validateEmail(e.target.value);
              }}
              onBlur={() => validateEmail(email)}
              className={`bg-background ${emailError ? 'border-red-500' : ''}`}
              aria-invalid={!!emailError}
              aria-describedby={emailError ? 'email-error' : undefined}
            />
            {emailError && (
              <p id="email-error" className="text-sm text-red-500">
                {emailError}
              </p>
            )}
          </div>
          </div>
          <Button 
            type="submit" 
            disabled={isLoading === 'email' || !email || !!emailError}
            className="w-full"
            aria-live="polite"
          >
            {isLoading === 'email' ? (
              <>
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : 'Send Magic Link'}
          </Button>
        </form>
      ) : (
        <Button 
          variant="outline" 
          size="lg" 
          onClick={() => setShowEmailInput(true)}
          className="w-full"
          aria-expanded={showEmailInput}
          aria-controls="email-auth-form"
        >
          <Icons.mail className="mr-2 h-4 w-4" aria-hidden="true" />
          Continue with Email
        </Button>
      )}
    </div>
  );
}
