import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class SettingsSection extends React.Component {
	render() {
		return (
			<View style={styles.settingssectionview}>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	settingssectionview: {
		backgroundColor: '#fff',
		padding: 20,
		marginTop: 5,
		marginBottom: 5,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#deeded',
		alignItems: 'center',
	},
});
