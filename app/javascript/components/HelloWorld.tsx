import React from "react"
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';

function HelloWorld() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Example app">
        <Card sectioned>
          <Button onClick={() => alert('Button clicked!')}>Example button</Button>
        </Card>
      </Page>
    </AppProvider>
  )
}

export default HelloWorld
