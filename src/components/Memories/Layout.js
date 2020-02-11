import React from 'react';
import {View, Text} from 'react-native';

export default class MemoryLayout extends React.Component {
	constructor() {
		super();

		this.state = {
			diaryItems: [],
		};
	}
	componentDidMount() {
		if (this.props.memories) {

		} else {

		}
	}
	render() {
		return (
			<View>
				<Text>Testing2</Text>
			</View>
		);
	}
}
