import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {emotions} from '../../../utils/emotions';

export default class EmotionSelection extends React.Component {
	render() {
		return (
			<View>
				<View style={styles.emotionview}>
					{emotions.map(data => {
						return (
							<Emotion
								key={data.id}
								id={data.id}
								emotionName={data.emotion}
								emoji={data.emoji}
								onPress={() =>
									this.props.emotionChange(data.id)
								}
							/>
						);
					})}
				</View>
			</View>
		);
	}
}

class Emotion extends React.Component {
	constructor() {
		super();

		this.state = {
			clicked: false,
		};
	}
	toggleClicked = () => {
		this.setState(previous => ({clicked: !previous.clicked}));
	};
	handlePress = () => {
		this.toggleClicked();
		this.props.onPress();
	};
	render() {
		return (
			<TouchableOpacity
				onPress={this.handlePress}
				style={[
					styles.emotionbutton,
					[
						this.state.clicked
							? {backgroundColor: '#DCEFEF'}
							: {backgroundColor: '#FFF'},
					],
				]}>
				<Text style={styles.emotionbuttontext}>{this.props.emoji}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	emotionview: {
		marginTop: 15,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	emotionbutton: {
		margin: 5,
		borderRadius: 50,
		padding: 5,
		borderWidth: 1,
		borderColor: '#006666',
		alignItems: 'center',
		justifyContent: 'center',
	},
	emotionbuttontext: {
		color: '#338282',
		fontSize: 25,
	},
});
