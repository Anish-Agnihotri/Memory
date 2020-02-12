import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class NoMemoryToday extends React.Component {
	render() {
		return (
			<TouchableOpacity>
				<Text>No Memories today</Text>
			</TouchableOpacity>
		);
	}
}
