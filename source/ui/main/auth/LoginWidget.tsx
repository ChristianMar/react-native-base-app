import React from 'react';
import { Field } from 'react-final-form';

import { IErrorsType } from '../../mocks/errorsType';
import { CenteredWidget } from '../../common/containers/CenteredWidget';
import { ErrorList } from '../../common/components/ErrorList';
import { RenderTextField } from '../../common/fields/RenderTextField';
import { Button } from 'react-native';

interface Props {
  labels: {
    username: string;
    password: string;
    login: string;
  };
  onLogin: () => void;
  loading: boolean;
  error?: IErrorsType;
}
export const LoginWidget = ({ labels, onLogin, loading, error }: Props) => {
  return (
    <CenteredWidget>
      <ErrorList errors={error} />
      <Field
        name="username"
        component={RenderTextField}
        label={labels.username}
        fullWidth={true}
        disabled={loading}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <Field
        name="password"
        component={RenderTextField}
        label={labels.password}
        fullWidth={true}
        disabled={loading}
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={true}
      />
      <Button onPress={onLogin} title={labels.login} />
    </CenteredWidget>
  );
};
