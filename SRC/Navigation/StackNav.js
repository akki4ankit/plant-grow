import React, { Suspense } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';

// Lazy load all screen components
const Login = React.lazy(() => import('../Screens/Auth/Login'));
const Signup = React.lazy(() => import('../Screens/Auth/Signup'));

// Loading component for Suspense fallback
const LoadingScreen = () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
);

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
    </Suspense>
  )
}
export default StackNav;