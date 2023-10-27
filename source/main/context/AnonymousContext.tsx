import React, { ReactNode } from 'react';
import { UserContextProvider } from './UserContext';

export const AnonymousContext = ({ children }: { children: ReactNode }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};
