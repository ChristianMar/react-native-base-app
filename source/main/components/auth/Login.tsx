import React from 'react';
import { useTranslate } from 'react-polyglot';
import { Form } from 'react-final-form';

import { AnonymousContext } from '../../context/AnonymousContext';
import { useLoginMutation } from '../../store/api/authApi';
import { ILoginData } from '../../mocks/auth';
import { isRequired } from '../../utils/validationRules';
import { LoginWidget } from '../../../ui/main/auth/LoginWidget';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { IErrorQuery } from '../../mocks/errorQuery';

export const Login = () => {
  const t = useTranslate();
  const [login, { isLoading, error, isError }] = useLoginMutation();

  const onLogin = (data: ILoginData) => {
    console.log('------------------------- login', data);
    login(data);
  };

  return (
    <AnonymousContext>
      <Form
        onSubmit={onLogin}
        validate={(values) => {
          const errors: {
            username?: string;
            password?: string;
          } = {};

          errors['username'] = isRequired(
            t('validation.errors.required', { field: t('login.username') }),
            values['username']
          );

          errors['password'] = isRequired(
            t('validation.errors.required', { field: t('login.password') }),
            values['password']
          );

          return errors;
        }}
        render={({ handleSubmit }) => (
          <LoginWidget
            labels={{
              username: t('login.username'),
              password: t('login.password'),
              login: t('login.login')
            }}
            onLogin={handleSubmit}
            loading={isLoading}
            error={getErrorMessage(isError, error as IErrorQuery)}
          />
        )}
      />
    </AnonymousContext>
  );
};
