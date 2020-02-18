import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {View, Text, StyleSheet} from 'react-native';

export default class CalendarLayout extends React.Component {
	render() {
		return (
			<View>
				<Agenda
					items={{
						'2020-02-07': [],
						'2020-02-06': [],
					}}
				/>
			</View>
		);
	}
}
