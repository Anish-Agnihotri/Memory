import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import moment from 'moment';

export default class WeeklyStats extends React.Component {
	render() {
		return (
			<View style={styles.statsview}>
				<Text style={styles.statsheader}>Weekly Statistics</Text>
				<Text style={styles.statsdesc}>
					Mood activity for WEEK
				</Text>
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
});
