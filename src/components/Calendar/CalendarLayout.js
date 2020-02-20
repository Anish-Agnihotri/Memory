import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import {View, StyleSheet} from 'react-native';

import {returnOnlyMemoryDates} from '../../models/actions';

const daySelectAnimation = {
	type: 'background',
	duration: 200,
	highlightColor: '#ffffff',
};

export default class CalendarLayout extends React.Component {
	constructor() {
		super();

		this.state = {
			markedDates: [],
		};
	}
	updateMarkedDates = () => {
		this.setState({
			markedDates: returnOnlyMemoryDates(),
		});
	};
	componentDidMount() {
		this.updateMarkedDates();
	}
	render() {
		return (
			<View>
				<CalendarStrip
					style={styles.calendarStrip}
					markedDates={this.state.markedDates}
					calendarHeaderStyle={styles.calendarStripHeader}
					calendarHeaderContainerStyle={
						styles.calendarStripHeaderContainer
					}
					highlightDateNameStyle={styles.highlightedDateName}
					highlightDateNumberStyle={styles.highlightedDateNumber}
					dateNameStyle={styles.disabledDateName}
					dateNumberStyle={styles.disabledDateNumber}
					calendarColor={'#cde4e4'}
					calendarHeaderPosition={'above'}
					daySelectionAnimation={daySelectAnimation}
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
