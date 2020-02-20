import React from 'react';
import {View, StyleSheet} from 'react-native';

import CalendarLayout from '../components/Calendar/CalendarLayout';

export default class Calendar extends React.Component {
	render() {
		return (
			<View style={styles.calendarview}>
				<CalendarLayout
					globalLayoutRefresh={this.props.globalLayoutRefresh}
				/>
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
