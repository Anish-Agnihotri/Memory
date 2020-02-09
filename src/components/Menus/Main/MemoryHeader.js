import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MemoryHeader extends React.Component {
	render() {
		return (
			<View>
				<Text style={styles.header}>How was your day, today?</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		fontSize: 20,
		marginLeft: 10,
	},
});
