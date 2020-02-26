import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import moment from 'moment';
import {returnMemoryStats} from '../../../models/actions';
import {returnEmotionInfo} from '../../../utils/helpers';

import Placeholder from './Placeholder';

export default class MonthlyStats extends React.Component {
	constructor() {
		super();

		this.state = {
			emotionCount: [],
			empty: true,
		};
	}
	pullEmotionCount = date => {
		let emotionCount = [];
		let value = returnMemoryStats(
			moment(date)
				.startOf('month')
				.toDate(),
			moment(date)
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

		emotionCount.sort(function(a, b) {
			return b.count - a.count;
		});

		if (emotionCount.every(item => item.count === 0)) {
			this.setState({empty: true});
		} else {
			this.setState({emotionCount: emotionCount, empty: false});
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
				<Text style={styles.statsheader}>Monthly Statistics</Text>
				<Text style={styles.statsdesc}>
					Mood activity for {moment(this.props.date).format('MMMM')}
				</Text>
				<View style={styles.statparent}>
					{this.state.empty ? (
						<Placeholder string="this month" />
					) : (
						<>
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
						</>
					)}
				</View>
			</View>
		);
	}
}

class MonthlyStatItem extends React.Component {
	render() {
		return (
			<View style={styles.monthlystatitem}>
				<View
					style={[
						styles.emojiview,
						this.props.count !== 0
							? styles.emojiviewGreen
							: styles.emojiviewDark,
					]}>
					<Text style={styles.emojitext}>{this.props.emoji}</Text>
				</View>
				<View style={styles.emotionview}>
					<Text style={styles.emotionname}>
						{this.props.emotionName}
					</Text>
					<Text style={styles.emotioncount}>
						Count: {this.props.count}
					</Text>
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
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
	},
	monthlystatitem: {
		margin: 5,
		width: (Dimensions.get('window').width - 84) / 2,
		flexDirection: 'row',
	},
	emojiview: {
		borderWidth: 1,
		height: 50,
		width: 55,
		borderRadius: 10,
		flex: 1,
		justifyContent: 'center',
	},
	emojiviewGreen: {
		borderColor: '#006666',
		backgroundColor: '#DCEFEF',
	},
	emojiviewDark: {
		borderColor: '#737373',
		backgroundColor: '#f2f2f2',
	},
	emojitext: {
		fontSize: 25,
		alignSelf: 'center',
	},
	emotionview: {
		flex: 2,
		paddingLeft: 7.5,
		justifyContent: 'center',
	},
	emotionname: {
		fontWeight: '600',
		fontSize: 16,
	},
});
