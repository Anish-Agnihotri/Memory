import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {returnMemoryStats} from '../../../models/actions';
import {returnEmotionInfo} from '../../../utils/helpers';
import moment from 'moment';

import Placeholder from './Placeholder';
import chart from '../../../assets/icons/chart.png';

export default class TodayStats extends React.Component {
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
				.startOf('day')
				.toDate(),
			moment(date)
				.endOf('day')
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
				<Text style={styles.statsheader}>Today's Statistics</Text>
				<Text style={styles.statsdesc}>
					Mood activity for{' '}
					{moment(this.props.date).format('MMMM DD[,] YYYY')}
				</Text>
				<View style={styles.statparent}>
					{this.state.empty ? (
						<Placeholder string="today" />
					) : (
						<TodayEmotionChart
							emotionCount={this.state.emotionCount}
						/>
					)}
				</View>
			</View>
		);
	}
}

class TodayEmotionChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedSlice: {
				label: '',
				value: 0,
			},
		};
	}
	UNSAFE_componentWillReceiveProps() {
		this.setState({selectedSlice: {label: '', value: 0}});
	}
	render() {
		const {selectedSlice} = this.state;
		const {label, value} = selectedSlice;
		var eArr = this.props.emotionCount;
		var values = [];
		var keys = [];
		var emotionNames = [];

		for (let i = 0; i < eArr.length; i++) {
			if (eArr[i].count > 0) {
				values.push(eArr[i].count);
				keys.push(eArr[i].emoji);
				emotionNames.push(eArr[i].emotionName);
			}
		}

		const data = keys.map((key, index) => {
			return {
				key,
				value: values[index],
				svg: label === key ? {fill: '#006565'} : {fill: '#73bfbf'},
				arc: {
					outerRadius:
						label === key
							? 85 + values[index] + '%'
							: 75 + values[index] + '%',
					padAngle: label === key ? 0.12 : 0.04,
				},
				onPress: () =>
					this.setState({
						selectedSlice: {
							index: index,
							label: key,
							value: values[index],
						},
					}),
			};
		});
		// Add parsing if count is equal to 0 to prompt user selection
		return (
			<View style={styles.pieview}>
				<PieChart
					style={styles.pieviewchart}
					outerRadius={'100%'}
					innerRadius={'55%'}
					data={data}
				/>
				<View style={styles.pieviewcontent}>
					{this.state.selectedSlice.value === 0 ? (
						<>
							<Image
								source={chart}
								style={styles.emptypieplaceholder}
							/>
							<Text style={styles.emptypietext}>
								Select slice
							</Text>
						</>
					) : (
						<>
							<Text style={styles.pieviewcontentemoji}>
								{label}
							</Text>
							<Text style={styles.pieviewcontentemotion}>
								{emotionNames[this.state.selectedSlice.index]}
							</Text>
							<Text style={styles.pieviewcontentvalue}>
								Count: {value}
							</Text>
						</>
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
	pieview: {
		justifyContent: 'center',
		flex: 1,
		marginTop: -15,
		paddingBottom: 45,
	},
	pieviewchart: {
		height: 300,
	},
	pieviewcontent: {
		width: 145,
		height: 145,
		borderRadius: 100,
		marginTop: -223,
		alignSelf: 'center',
		backgroundColor: '#DCEFEF',
		borderWidth: 1,
		borderColor: '#006666',
		justifyContent: 'center',
		alignItems: 'center',
	},
	pieviewcontentemoji: {
		fontSize: 30,
	},
	pieviewcontentemotion: {
		fontSize: 20,
		fontWeight: '600',
	},
	emptypietext: {
		fontSize: 17,
		fontWeight: '500',
	},
	emptypieplaceholder: {
		height: 35,
		width: 35,
		marginBottom: 5,
	},
});
