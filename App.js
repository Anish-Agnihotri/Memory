import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Calendar from './src/screens/Calendar';
import Diary from './src/screens/Diary';
import Memories from './src/screens/Memories';

// TODO: Add Settings button, make indicator smaller width dynamically

const Tab = createMaterialTopTabNavigator();
const TabBarConfig = {
	inactiveTintColor: '#B5BFC5',
	activeTintColor: '#167CE6',
	labelStyle: {
		fontWeight: '700',
	},
	indicatorStyle: {
		backgroundColor: '#167CE6',
		height: 2.5,
	},
	style: {
		shadowOffset: {
			height: 2,
		},
		shadowColor: '#000000',
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 2,
	},
};

function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{flex: 1}}>
				<NavigationContainer>
					<Tab.Navigator
						initialRouteName={'Diary'}
						tabBarOptions={TabBarConfig}>
						<Tab.Screen name="My Diary" component={Diary} />
						<Tab.Screen name="Calendar" component={Calendar} />
						<Tab.Screen name="Memories" component={Memories} />
					</Tab.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

export default App;
