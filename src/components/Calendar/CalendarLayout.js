import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {returnOnlyMemoryDates} from '../../models/actions';

import TodayStats from './Main/TodayStats';
import WeeklyStats from './Main/WeeklyStats';
import MonthlyStats from './Main/YearlyStats';

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
			selectedDate: new Date(),
		};
	}
	updateMarkedDates = () => {
		this.setState({
			markedDates: returnOnlyMemoryDates(),
		});
	};
	updateSelectedDate = date => {
		this.setState({
			selectedDate: date,
		});
	};
	componentDidMount() {
		this.updateMarkedDates();
	}
	UNSAFE_componentWillReceiveProps() {
		this.updateMarkedDates();
	}
	render() {
		const items = [
			<TodayStats date={this.state.selectedDate} />,
			<WeeklyStats date={this.state.selectedDate} />,
			<MonthlyStats date={this.state.selectedDate} />,
		];
		return (
			<View>
				<CalendarStrip
					style={styles.calendarStrip}
					markedDates={this.state.markedDates}
					ref={this.strip}
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
					onDateSelected={date => this.updateSelectedDate(date)}
				/>
				<ScrollView style={styles.marginfix}>
					{items.map((item, idx) => {
						return <View key={idx}>{item}</View>;
					})}
				</ScrollView>
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
	marginfix: {
		paddingTop: 7.5,
	},
});
