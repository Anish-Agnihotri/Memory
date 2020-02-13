import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Calendar from './src/screens/Calendar';
import Diary from './src/screens/Diary';
import Memories from './src/screens/Memories';

import SettingsButton from './src/components/Buttons/SettingsButton';

// TODO: Add Settings button, make indicator smaller width dynamically

const Tab = createMaterialTopTabNavigator();
const TabBarConfig = {
	inactiveTintColor: '#718888',
	activeTintColor: '#024342',
	labelStyle: {
		fontWeight: '700',
	},
	indicatorStyle: {
		backgroundColor: '#006565',
		height: 2.5,
	},
	style: {
		width: 300,
	},
};

class App extends React.Component {
	render() {
		return (
			<SafeAreaProvider>
				<StatusBar backgroundColor="white" barStyle="dark-content" />
				<SafeAreaView style={{flex: 1}} forceInset={{bottom: 'never'}}>
					<NavigationContainer>
						<Tab.Navigator
							initialRouteName={'Diary'}
							tabBarOptions={TabBarConfig}>
							<Tab.Screen name="My Diary" component={Diary} />
							<Tab.Screen name="Calendar" component={Calendar} />
							<Tab.Screen name="Memories" component={Memories} />
						</Tab.Navigator>
					</NavigationContainer>
					<SettingsButton />
				</SafeAreaView>
			</SafeAreaProvider>
		);
	}
}

export default App;
