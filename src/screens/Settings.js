import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Settings extends React.Component {
	render() {
		return (
			<View style={styles.settingsContainer}>
				<Text>Testing</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	settingsContainer: {
		flex: 1,
		backgroundColor: '#F0F7F7',
	},
});
