import React from 'react';
import {Text, View} from 'react-native';
import PlusButton from '../components/Buttons/PlusButton';
import MainMenu from '../components/Menus/MainMenu';

export default class Diary extends React.Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Text>Diary</Text>
				<PlusButton>
					<MainMenu />
				</PlusButton>
			</View>
		);
	}
}
