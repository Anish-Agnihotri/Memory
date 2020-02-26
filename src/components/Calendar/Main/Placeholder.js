import React from 'react';
import {View, Text} from 'react-native';

export default class Placeholder extends React.Component {
	render() {
		return (
			<View>
				<Text>No memories found</Text>
				<Text>Get started by adding a diary entry.</Text>
			</View>
		);
	}
}
