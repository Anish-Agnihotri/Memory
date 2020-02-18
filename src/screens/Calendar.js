import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Calendar extends React.Component {
	render() {
		return (
			<View style={styles.calendarview}>
				<Text>Calendar</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	calendarview: {
		flex: 1,
		backgroundColor: '#F0F7F7',
	},
});
