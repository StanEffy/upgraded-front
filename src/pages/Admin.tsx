import '@aws-amplify/ui-react/styles.css'
import React from 'react'
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card
} from '@aws-amplify/ui-react'
// @ts-ignore
// eslint-disable-next-line react/prop-types
function Admin ({ signOut }) {
  return (
        <View className="App">
            <Card>
                <Heading level={1}>We now have Auth!</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
  )
}

// @ts-ignore
export default withAuthenticator(Admin)
