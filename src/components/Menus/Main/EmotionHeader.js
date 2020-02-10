import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class EmotionHeader extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>
					How {this.props.date} you feel?
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	header: {
		fontSize: 20,
		marginLeft: 10,
	},
});
