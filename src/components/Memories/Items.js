import React from 'react';
import {
	Animated,
	Alert,
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Dimensions,
} from 'react-native';
import Image from 'react-native-scalable-image';
import {imagePath} from '../../utils/helpers';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {deleteMemory} from '../../models/actions';

let window = Dimensions.get('window');
import trash from '../../assets/icons/trash.png';

export default class MemoryItem extends React.Component {
	constructor() {
		super();

		this.swipeable = React.createRef();
	}
	closeSwipeable = () => {
		this.swipeable.current.close();
	};
	deleteAndClose = () => {
		deleteMemory(this.props.id);
		this.props.runRefresh();
	};
	deleteAll = () => {
		Alert.alert(
			'Delete memory',
			'Are you sure you want to delete this memory?',
			[
				{
					text: 'Cancel',
					style: 'cancel',
					onPress: () => this.closeSwipeable(),
				},
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => this.deleteAndClose(),
				},
			],
		);
	};
	renderLeftActions = (progress, dragX) => {
		const trans = dragX.interpolate({
			inputRange: [0, 10, 20, 40],
			outputRange: [0, 2, 4, 6],
		});
		const opac = dragX.interpolate({
			inputRange: [0, 10, 20, 30],
			outputRange: [0, 0.25, 0.5, 1.0],
		});
		return (
			<TouchableOpacity onPress={() => this.deleteAll()}>
				<Animated.View
					style={[
						styles.actionView,
						{
							transform: [{translateX: trans}],
						},
					]}>
					<Animated.Image source={trash} style={{opacity: opac}} />
				</Animated.View>
			</TouchableOpacity>
		);
	};
	UNSAFE_componentWillReceiveProps(props) {
		if (props.scrolling) {
			this.closeSwipeable();
		}
		if (props.currentMenu !== this.props.id) {
			this.closeSwipeable();
		}
	}
	render() {
		return (
			<Swipeable
				ref={this.swipeable}
				onSwipeableLeftWillOpen={() =>
					this.props.updateCurrentMenu(this.props.id)
				}
				renderLeftActions={this.renderLeftActions}
				overshootLeft={false}
				overshootFriction={8}>
				<View style={styles.memoryitem}>
					<Text style={styles.memorydate}>{this.props.date}</Text>
					<Text style={styles.memorytitle}>{this.props.title}</Text>
					{this.props.image !== null ? (
						<View style={styles.imagecomponent}>
							<Image
								width={window.width - 70}
								style={styles.memoryimage}
								source={{
									isStatic: true,
									uri: `${imagePath(this.props.image)}`,
								}}
							/>
						</View>
					) : null}
					{this.props.entry !== '' ? (
						<Text style={styles.memoryentry}>
							{this.props.entry}
						</Text>
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
			</Swipeable>
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
	actionView: {
		paddingLeft: 15,
		alignSelf: 'center',
		marginTop: 10,
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
	delete: {
		alignSelf: 'flex-end',
		width: 35,
		height: 35,
		marginTop: 10,
	},
});
