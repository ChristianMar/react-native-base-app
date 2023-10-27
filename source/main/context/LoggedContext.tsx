import React, { ReactNode, useEffect } from 'react';
import { UserContextProvider } from './UserContext';
import { AllPostsContextProvider } from './AllPostsContext';
import { UserPostsContextProvider } from './UserPostsContext';
import { AllUsersContextProvider } from './AllUsersContext';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { ILogged } from '../mocks/auth';
import { selectCurrentUser } from '../store/slices/userSlice';

export const LoggedContext = ({ children }: { children: ReactNode }) => {
  const user: ILogged = useSelector(selectCurrentUser);
  const navigation = useNavigation();

  useEffect(() => {
    if (!user.token) {
      console.log('return to login');
      navigation.navigate('Login' as never);
    }
  }, [user.token]);

  return (
    <UserContextProvider>
      <AllPostsContextProvider>
        <UserPostsContextProvider>
          <AllUsersContextProvider>{children}</AllUsersContextProvider>
        </UserPostsContextProvider>
      </AllPostsContextProvider>
    </UserContextProvider>
  );
};
