import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

const filterOptionsDay = {
	sameDay: '[today]',
	nextDay: '[tomorrow]',
	lastDay: '[yesterday]',
	lastWeek: 'MMM Do',
	nextWeek: 'MMM Do',
	sameElse: 'MMM Do',
};

export default class Placeholder extends React.Component {
	constructor() {
		super();

		this.state = {
			returnedString: '',
		};
	}
	setDateText = (date, type) => {
		let returnedString = '';
		let sentDate = moment(date);

		if (type === 'day') {
			returnedString = sentDate.calendar(null, filterOptionsDay);
		}

		if (type === 'week' && sentDate.isSame(moment(), 'isoWeek')) {
			returnedString = 'this week';
		} else if (type === 'week') {
			let beginDay = moment(date)
				.startOf('isoWeek')
				.format('Do');
			let finishDay = moment(date)
				.startOf('isoWeek')
				.add(6, 'day')
				.format('Do');
			returnedString = beginDay + ' to ' + finishDay;
		}

		// last month, next month, this month, full month
		if (type === 'month' && sentDate.isSame(moment(), 'month')) {
			returnedString = 'this month';
		} else if (type === 'month') {
			returnedString = sentDate.format('MMMM');
		}

		this.setState({returnedString: returnedString});
	};
	componentDidMount() {
		this.setDateText(this.props.date, this.props.type);
	}
	UNSAFE_componentWillReceiveProps(props) {
		this.setDateText(props.date, props.type);
	}
	render() {
		return (
			<View style={styles.placeholderview}>
				<View style={styles.headerparent}>
					<Text style={styles.placeholderheader}>
						No memories found for{' '}
					</Text>
					<View style={styles.headercolorparent}>
						<Text style={styles.headercolor}>
							{this.state.returnedString}
						</Text>
					</View>
				</View>
				<Text style={styles.placeholdersubtitle}>
					Get started by adding a diary entry.
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	placeholderview: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1.5,
		borderStyle: 'dashed',
		borderColor: '#006565',
		padding: 10,
		borderRadius: 5,
		width: '100%',
	},
	headerparent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headercolorparent: {
		backgroundColor: '#006565',
		paddingLeft: 3,
		paddingTop: 2,
		paddingRight: 3,
		paddingBottom: 2,
		borderRadius: 5,
	},
	headercolor: {
		fontWeight: '600',
		fontSize: 15,
		color: '#fff',
	},
	placeholderheader: {
		fontWeight: '600',
		fontSize: 15,
	},
	placeholdersubtitle: {
		fontSize: 12.5,
		marginTop: 1.5,
	},
});
