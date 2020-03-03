import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {returnMemoryPositiveOrNegative} from '../../../models/actions';
import {StackedBarChart} from 'react-native-svg-charts';
import moment from 'moment';

import Placeholder from './Placeholder';

export default class WeeklyStats extends React.Component {
	constructor() {
		super();

		this.state = {
			emotionState: [],
			empty: true,
		};
	}
	pullEmotionCount = date => {
		let emotions = [];
		for (let i = 0; i < 7; i++) {
			let beginDay = moment(date)
				.startOf('isoWeek')
				.add(i, 'day')
				.toDate();
			let finishDay = moment(date)
				.startOf('isoWeek')
				.add(i + 1, 'day')
				.toDate();

			let result = returnMemoryPositiveOrNegative(beginDay, finishDay);
			let positive = result.emotionCountPositive;
			let negative = result.emotionCountNegative;
			let neutral = result.emotionCountNeutral;
			let total = positive + negative + neutral;

			emotions.push({
				date: beginDay,
				positive: positive,
				negative: negative,
				neutral: neutral,
				total: total,
			});
		}

		if (emotions.every(item => item.total === 0)) {
			this.setState({empty: true});
		} else {
			this.setState({emotionState: emotions, empty: false});
		}
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
						<Placeholder type="week" date={this.props.date} />
					) : (
						<>
							<View style={styles.legend}>
								<View style={styles.positive} />
								<Text style={styles.legendtext}>Positive</Text>
								<View style={styles.neutral} />
								<Text style={styles.legendtext}>Neutral</Text>
								<View style={styles.negative} />
								<Text style={styles.legendtext}>Negative</Text>
							</View>
							<View style={styles.barparent}>
								<WeeklyBars
									emotions={this.state.emotionState}
								/>
							</View>
						</>
					)}
				</View>
			</View>
		);
	}
}

class WeeklyBars extends React.Component {
	render() {
		let value = this.props.emotions;
		return value.map((item, idx) => {
			return (
				<View style={styles.barcontainer} key={idx}>
					{item.total !== 0 ? (
						<StackedBarChart
							style={styles.bar}
							colors={['#ff4d4d', '#c9cfcf', '#009999']}
							keys={['negative', 'neutral', 'positive']}
							data={[
								{
									positive: item.positive,
									neutral: item.neutral,
									negative: item.negative,
								},
							]}
						/>
					) : (
						<StackedBarChart
							style={styles.bar}
							colors={['#f2f3f3', '#f2f3f3']}
							keys={['negative', 'positive']}
							data={[
								{
									positive: 0,
									negative: 1,
								},
							]}
						/>
					)}
					<Text style={styles.bardate}>
						{moment(item.date).format('MMM D')}
					</Text>
				</View>
			);
		});
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
	legend: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 7.5,
	},
	legendtext: {
		paddingLeft: 3,
		fontSize: 13,
		marginRight: 5,
	},
	positive: {
		width: 12,
		height: 12,
		borderRadius: 10,
		marginLeft: 5,
		backgroundColor: '#009999',
	},
	neutral: {
		width: 12,
		height: 12,
		borderRadius: 10,
		marginLeft: 5,
		backgroundColor: '#c9cfcf',
	},
	negative: {
		width: 12,
		height: 12,
		borderRadius: 10,
		marginLeft: 5,
		backgroundColor: '#ff4d4d',
	},
	barparent: {
		flexDirection: 'row',
		marginBottom: -15,
	},
	barcontainer: {
		alignItems: 'center',
		width: 25,
		margin: 10,
		height: 260,
	},
	bar: {
		height: 200,
		width: 20,
	},
	bardate: {
		marginTop: 25,
		color: '#B7B7B7',
		fontWeight: '500',
		width: 50,
		transform: [
			{
				rotate: '90deg',
			},
		],
	},
});
