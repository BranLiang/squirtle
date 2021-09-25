import * as React from 'react';
import { useState } from 'react';
import * as enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Button, Form, FormLayout, Page, TextField} from '@shopify/polaris';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AppProvider i18n={enTranslations}>
      <Page>
        <Form onSubmit={() => {}}>
          <FormLayout>
            <TextField
              value={username}
              onChange={(value) => setUsername(value)}
              label="Username"
            />

            <TextField
              value={password}
              onChange={(value) => setPassword(value)}
              label="Password"
              type="password"
            />
    ​
            <Button submit>Login</Button>
          </FormLayout>
        </Form>
      </Page>
    </AppProvider>
  )
}

export default Login;
