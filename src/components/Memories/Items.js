import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Alert,
} from 'react-native';
import Image from 'react-native-scalable-image';
import {imagePath} from '../../utils/helpers';
import {deleteMemory} from '../../models/actions';

import trash from '../../assets/icons/trash.png';

export default class MemoryItem extends React.Component {
	deleteAndRefresh = () => {
		deleteMemory(this.props.id);
		this.props.runRefresh();
	};

	deleteThisMemory = () => {
		Alert.alert(
			'Delete memory',
			'Are you sure you want to delete this memory?',
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => this.deleteAndRefresh(),
				},
			],
		);
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<View style={styles.memoryitem}>
				{!this.props.isMemoryLayout ? (
					<TouchableOpacity
						style={styles.trash}
						onPress={this.deleteThisMemory}>
						<Image source={trash} width={15} />
					</TouchableOpacity>
				) : null}
				<Text style={styles.memorydate}>{this.props.date}</Text>
				<Text style={styles.memorytitle}>{this.props.title}</Text>
				{this.props.image !== null ? (
					<View style={styles.imagecomponent}>
						<Image
							width={Dimensions.get('window').width - 70}
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
		marginTop: 10,
		marginBottom: 10,
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
	trash: {
		position: 'absolute',
		right: 0,
		padding: 15,
	},
});
