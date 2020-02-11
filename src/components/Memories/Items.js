import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {imagePath} from '../../utils/helpers';

export default class MemoryItem extends React.Component {
	render() {
		return (
			<View style={styles.memoryitem}>
				<Text style={styles.memorydate}>{this.props.date}</Text>
				<Text style={styles.memorytitle}>{this.props.title}</Text>
				{this.props.image !== null ? (
					<Image source={imagePath(this.props.image)} />
				) : null}
				{this.props.entry !== '' ? (
					<Text style={styles.memoryentry}>{this.props.entry}</Text>
				) : null}
				<View style={styles.wrapfix}>
					<View style={styles.memoryemotion}>
						<Text style={styles.memoryemotiontext}>{this.props.emotion.emoji} {this.props.emotion.emotion}</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	memoryitem: {
		marginTop: 5,
		marginBottom: 10,
		marginLeft: 15,
		marginRight: 15,
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 12.5,
		borderRadius: 10,
		backgroundColor: '#FDFDFD',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1.84,
		elevation: 2,
	},
	memorydate: {
		color: '#717172',
		fontSize: 15,
	},
	memorytitle: {
		color: '#082A2A',
		fontWeight: '600',
		fontSize: 20,
		marginTop: 5,
	},
	memoryentry: {
		fontSize: 15,
		lineHeight: 22,
		marginTop: 5,
	},
	memoryemotion: {
		margin: 5,
		borderRadius: 10,
		padding: 5,
		borderWidth: 1,
		borderColor: '#006666',
		backgroundColor: '#F0F8F8',
		marginTop: 10,
		marginLeft: -2,
	},
	memoryemotiontext: {
		color: '#338282',
		fontSize: 14,
	},
	wrapfix: {
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
});
