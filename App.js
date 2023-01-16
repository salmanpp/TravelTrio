// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { createDrawerNavigator }
// 		from '@react-navigation/drawer';
// import { NavigationContainer }
// 		from '@react-navigation/native';

// import Home from './src/screens/Home/index'

// function HomeScreen() {
// return (
// 	<View style={{ flex: 1, alignItems: 'center',
// 				justifyContent: 'center' }}>
// 		{/* <Text>Home page</Text> */}
// 		<Home
		
// 		/>
// 	</View>
// );
// }

// function NotificationsScreen() {
// return (
// 	<View style={{ flex: 1, alignItems: 'center',
// 				justifyContent: 'center' }}>
// 	<Text>Notifications Page</Text>
// 	</View>
// );
// }

// function AboutScreen() {
// return (
// 	<View style={{ flex: 1, alignItems: 'center',
// 				justifyContent: 'center' }}>
// 	<Text>About Page</Text>
// 	</View>
// );
// }
// const Drawer = createDrawerNavigator();

// export default function App() {
// return (
// 	<NavigationContainer>
// 	<Drawer.Navigator initialRouteName="Home" 
// 	 screenOptions={{
//         headerShown: false,
//       }}
// 	>
// 		<Drawer.Screen name="Home" component={HomeScreen} />
// 		<Drawer.Screen name="Notifications"
// 					component={NotificationsScreen} />
// 		<Drawer.Screen name="About" component={AboutScreen} />
// 	</Drawer.Navigator>
// 	</NavigationContainer>
// );
// }

import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({})

export default App;


