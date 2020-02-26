import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {returnMemoryPositiveOrNegative} from '../../../models/actions';
import moment from 'moment';

import Placeholder from './Placeholder';

export default class WeeklyStats extends React.Component {
	constructor() {
		super();

		this.state = {
			empty: true,
		};
	}
	pullEmotionCount = date => {
		let emotions = [];
		for (let i = 0; i < 7; i++) {
			let beginDay = moment(date).startOf('isoWeek').add(i, 'day').toDate();
			let finishDay = moment(date).startOf('isoWeek').add(i + 1, 'day').toDate();

			let result = returnMemoryPositiveOrNegative(beginDay, finishDay);
			let positive = result.emotionCountPositive;
			let negative = result.emotionCountNegative;
			let neutral = result.emotionCountNeutral;

			emotions.push({
				date: beginDay,
				positive: positive,
				negative: negative,
				neutral: neutral,
			});
		}
		console.log(emotions);
	};
	componentDidMount() {
		this.pullEmotionCount(this.props.date);
	}
	UNSAFE_componentWillReceiveProps(props) {
		this.pullEmotionCount(props.date);
	}
	render() {
		return (
			<View style={styles.statsview}>
				<Text style={styles.statsheader}>Weekly Statistics</Text>
				<Text style={styles.statsdesc}>
					Mood activity for week of the{' '}
					{moment(this.props.date).format('Do')}
				</Text>
				<View style={styles.statparent}>
					{this.state.empty ? (
						<Placeholder />
					) : (
						<Text>Not placeholder</Text>
					)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	statsview: {
		marginTop: 7.5,
		marginBottom: 7.5,
		marginLeft: 10,
		marginRight: 10,
		padding: 20,
		backgroundColor: '#FDFDFD',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1.84,
		elevation: 2,
	},
	statsheader: {
		fontWeight: '600',
		fontSize: 17,
	},
	statsdesc: {
		color: '#738c8c',
		fontSize: 15.5,
		paddingTop: 3,
	},
	statparent: {
		marginTop: 10,
	},
});
