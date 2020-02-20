import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import moment from 'moment';
import {returnMonthlyMemories} from '../../../models/actions';
import {returnEmotionInfo} from '../../../utils/helpers';
// TODO: pie chart of total
// TODO: and each individual emotion

export default class MonthlyStats extends React.Component {
	constructor() {
		super();

		this.state = {
			emotionCount: [],
		};
	}
	pullEmotionCount = () => {
		let emotionCount = [];
		let value = returnMonthlyMemories(
			moment(this.props.date)
				.startOf('month')
				.toDate(),
			moment(this.props.date)
				.endOf('month')
				.toDate(),
		);

		for (let [emotion, val] of value) {
			let info = returnEmotionInfo([emotion]);
			emotionCount.push({
				emotion: emotion,
				emotionName: info[0].emotion,
				emoji: info[0].emoji,
				count: val.val,
			});
		}

		this.setState({emotionCount: emotionCount});
	};
	UNSAFE_componentWillReceiveProps() {
		this.pullEmotionCount();
	}
	render() {
		return (
			<View style={styles.statsview}>
				<Text style={styles.statsheader}>Monthly Statistics</Text>
				<Text style={styles.statsdesc}>
					Mood activity for {moment(this.props.date).format('MMMM')}
				</Text>
				<View />
				<View style={styles.line} />
				<View style={styles.statparent}>
					{this.state.emotionCount.map((item, idx) => {
						return (
							<MonthlyStatItem
								key={idx}
								emoji={item.emoji}
								emotionName={item.emotionName}
								count={item.count}
							/>
						);
					})}
				</View>
			</View>
		);
	}
}

class MonthlyStatItem extends React.Component {
	render() {
		return (
			<View style={styles.monthlystatitem}>
				<View>
					<Text>{this.props.emoji}</Text>
				</View>
				<View>
					<Text>{this.props.emotionName}</Text>
					<Text>Count: {this.props.count}</Text>
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
	line: {
		height: 1,
		marginTop: 20,
		marginBottom: 20,
		backgroundColor: '#ccc',
		borderRadius: 10,
	},
	statparent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	monthlystatitem: {
		flex: 1,
		padding: 10,
		backgroundColor: '#ccc',
	},
});
