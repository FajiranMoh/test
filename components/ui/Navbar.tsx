import React from 'react';
import { LoginDialog } from './LoginDialog';
import { Button } from './button';

export const Navbar = () => (
  <nav className="flex justify-between items-center p-4">
    <div>Logo</div>
    <LoginDialog>
      <Button>Login</Button>
    </LoginDialog>
  </nav>
);
