import React from 'react';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';
import {View, Text, StyleSheet} from 'react-native';

export default class CalendarLayout extends React.Component {
	render() {
		return (
			<View>
				<CalendarStrip
					style={{height: 85}}
					calendarHeaderStyle={{color: 'black'}}
					calendarColor={'#3e7474'}
					calendarHeaderContainerStyle={{marginTop: 10}}
					calendarAnimation={{type: 'sequence', duration: 30}}
					daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
				/>
			</View>
		);
	}
}
