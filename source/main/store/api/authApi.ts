import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ILoginData, ILogged } from '../../mocks/auth';
import { setCredentials } from '../slices/userSlice';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/auth'
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<ILogged, ILoginData>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then((response) => {
            // saveState({ user: { user: response.data } });
            dispatch(setCredentials(response.data));
          })
          .catch(() => {});
      }
    })
  })
});

export const { useLoginMutation } = authApi;
