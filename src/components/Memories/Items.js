import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MemoryItem extends React.Component {
	render() {
		return (
			<View>
				<Text>{this.props.date}</Text>
				<Text>{this.props.title}</Text>
				<Text>{this.props.image}</Text>
				<Text>{this.props.entry}</Text>
				<Text>{this.props.emotion.name}</Text>
			</View>
		);
	}
}
