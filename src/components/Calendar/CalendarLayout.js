import React from 'react';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

export default class CalendarLayout extends React.Component {
	render() {
		return (
			<View>
				<CalendarStrip
					style={styles.calendarStrip}
					calendarHeaderStyle={styles.calendarStripHeader}
					calendarHeaderContainerStyle={styles.calendarStripHeaderContainer}
					highlightDateNameStyle={styles.highlightedDateName}
					highlightDateNumberStyle={styles.highlightedDateNumber}
					dateNameStyle={styles.disabledDateName}
					dateNumberStyle={styles.disabledDateNumber}
					calendarColor={'#cde4e4'}
					calendarHeaderPosition={'above'}
					daySelectionAnimation={{type: 'background', duration: 200, highlightColor: '#fff'}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	calendarStrip: {
		height: 90,
	},
	calendarStripHeader: {
		color: '#003333',
		fontSize: 15,
	},
	calendarStripHeaderContainer: {
		marginTop: 7.5,
		paddingBottom: 2.5,
	},
	highlightedDateName: {
		color: '#003333',
	},
	highlightedDateNumber: {
		color: '#003333',
	},
	disabledDateName: {
		color: '#509595',
	},
	disabledDateNumber: {
		color: '#509595',
	},
});
