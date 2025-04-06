// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/AppNavigator';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar style="auto" />
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }

//App.js
import React from "react";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/AppNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigator />
    </>
  );
}
