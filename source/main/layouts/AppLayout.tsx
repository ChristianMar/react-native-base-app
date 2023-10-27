import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { I18n } from 'react-polyglot';

import { it } from '../i18n/it';
import { en } from '../i18n/en';
import { selectCurrentUser } from '../store/slices/userSlice';
import { ILogged } from '../mocks/auth';
import { AppLayout as AppLayoutUI } from '../../ui/common/layouts/AppLayout';
import LanguageContext from '../context/LanguageContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../components/auth/Login';
import { PostsList } from '../components/posts/PostsList';
import { Colors } from '../../ui/styles/UIColors';

const languages = {
  it: it,
  en: en
};

const Stack = createNativeStackNavigator();

export const AppLayout = () => {
  const user: ILogged = useSelector(selectCurrentUser);
  const [language, setLanguage] = useState('en');
  const [messages, setMessages] = useState(en);
  const [error, setError] = useState(false);

  const getLanguage = () => {
    if (user.token) {
      const lang =
        user.language !== 'en' && user.language !== 'it' ? 'en' : user.language;

      setLanguage(lang);
      setMessages(languages[lang]);
    }
  };

  useEffect(() => {
    getLanguage();
  }, []);

  useEffect(() => {
    if (user.token) getLanguage();
  }, [user.token]);

  return (
    <AppLayoutUI>
      <I18n locale={language} messages={messages}>
        <NavigationContainer>
          <LanguageContext.Provider value={{ language: language }}>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: Colors.lightGrey
                },
                headerTintColor: Colors.black,
                contentStyle: {
                  backgroundColor: Colors.defaultBgColor
                }
              }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Posts" component={PostsList} />
            </Stack.Navigator>
          </LanguageContext.Provider>
        </NavigationContainer>
      </I18n>
    </AppLayoutUI>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
