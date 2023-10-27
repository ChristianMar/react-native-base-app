import React, { ReactNode, createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ILogged } from '../mocks/auth';
import { logout, selectCurrentUser } from '../store/slices/userSlice';

export const UserContext = createContext<{
  onLogout: () => void;
}>({
  onLogout: () => {
    return;
  }
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const user: ILogged = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLogout = () => {
    // deleteState();
    dispatch(logout());
    setTimeout(() => {
      navigation.navigate('Login' as never);
    }, 100);
  };

  useEffect(() => {
    if (user.token) navigation.navigate('Posts' as never);
  }, [user.token]);

  return (
    <UserContext.Provider
      value={{
        onLogout: onLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
