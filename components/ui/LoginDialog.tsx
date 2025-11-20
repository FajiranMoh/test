import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle } from '@radix-ui/react-dialog';
import { Button } from './button';

interface LoginDialogProps {
  children?: React.ReactNode;
}

export const LoginDialog = ({ children }: LoginDialogProps) => (
  <Dialog>
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
    <DialogContent className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-auto space-y-4">
        <DialogTitle className="text-lg font-bold">Login</DialogTitle>
        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
        <div className="flex justify-end space-x-2">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button>Login</Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);
