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
								mainColor={data.mainColor}
								alternateColor={data.alternateColor}
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

// TODO: Make alternatecolor toggle

class Emotion extends React.Component {
	render() {
		const mainColor = this.props.mainColor;
		const alternateColor = this.props.alternateColor;
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={[
					styles.emotionbutton,
					{borderColor: mainColor, backgroundColor: alternateColor},
				]}>
				<Text style={{color: mainColor}}>{this.props.emotionName}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	emotionview: {
		marginTop: 15,
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
	emotionbutton: {
		margin: 5,
		paddingTop: 7,
		paddingBottom: 7,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5,
		borderWidth: 1,
	},
});
