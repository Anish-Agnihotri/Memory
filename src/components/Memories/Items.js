import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {imagePath} from '../../utils/helpers';

let window = Dimensions.get('window');

export default class MemoryItem extends React.Component {
	render() {
		return (
			<View style={styles.memoryitem}>
				<Text style={styles.memorydate}>{this.props.date}</Text>
				<Text style={styles.memorytitle}>{this.props.title}</Text>
				{this.props.image !== null ? (
					<View style={styles.imagecomponent}>
						<Image
							style={styles.memoryimage}
							source={{
								isStatic: true,
								uri: `${imagePath(this.props.image)}`,
							}}
						/>
					</View>
				) : null}
				{this.props.entry !== '' ? (
					<Text style={styles.memoryentry}>{this.props.entry}</Text>
				) : null}
				<View style={styles.wrapfix}>
					{this.props.isSpecial ? (
						<View style={styles.specialemotion}>
							<Text style={styles.specialemotiontext}>
								⭐ Special
							</Text>
						</View>
					) : null}
					{this.props.emotion.map((data, idx) => {
						return (
							<View key={idx} style={styles.memoryemotion}>
								<Text style={styles.memoryemotiontext}>
									{data.emoji} {data.emotion}
								</Text>
							</View>
						);
					})}
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
		paddingTop: 15,
		paddingBottom: 12.5,
		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 20,
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
		fontSize: 23,
		marginTop: 5,
	},
	memoryentry: {
		fontSize: 15,
		lineHeight: 22,
		marginTop: 5,
	},
	memoryemotion: {
		margin: 3,
		borderRadius: 10,
		padding: 5,
		borderWidth: 1,
		borderColor: '#006666',
		backgroundColor: '#F0F8F8',
	},
	specialemotion: {
		margin: 3,
		borderRadius: 10,
		padding: 5,
		borderWidth: 1,
		borderColor: '#FF836B',
		backgroundColor: '#FFF6F4',
	},
	memoryemotiontext: {
		color: '#338282',
		fontSize: 14,
	},
	specialemotiontext: {
		color: '#FF836B',
		fontSize: 14,
	},
	wrapfix: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		marginLeft: -3,
		marginTop: 10,
	},
	memoryimage: {
		width: window.width - 70,
		marginTop: 10,
		marginBottom: 10,
		height: 150,
		borderRadius: 10,
	},
	imagecomponent: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4.84,
	},
	delete: {
		alignSelf: 'flex-end',
		width: 35,
		height: 35,
		marginTop: 10,
	},
});
