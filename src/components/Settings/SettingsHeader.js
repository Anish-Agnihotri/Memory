import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as RootNavigation from '../../utils/navigation';

export default class SettingsHeader extends React.Component {
	render() {
		return (
			<View style={styles.settingsheaderview}>
				<Text style={styles.settingsheadertext}>Settings</Text>
				<TouchableOpacity
					style={styles.settingsheaderbutton}
					onPress={() => RootNavigation.navigate('Memories')}>
					<Text style={styles.settingsheaderbuttontext}>Done</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	settingsheaderview: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		height: 58,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1.5,
		},
		shadowOpacity: 0.07,
		shadowRadius: 1.62,
		elevation: 2,
		textAlign: 'center',
	},
	settingsheadertext: {
		color: '#000',
		fontSize: 18,
		fontWeight: '600',
		alignSelf: 'center',
	},
	settingsheaderbutton: {
		position: 'absolute',
		right: 15,
	},
	settingsheaderbuttontext: {
		fontSize: 17,
		color: '#024342',
	},
});
