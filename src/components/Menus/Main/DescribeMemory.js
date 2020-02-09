import React from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default class DescribeMemory extends React.Component {
	constructor() {
		super();

		this.state = {
			memoryDescription: '',
		};

		this.updateText = this.updateText.bind(this);
	}
	updateText(text) {
		this.setState({memoryDescription: text});
	}
	render() {
		return (
			<View>
				<TextInput
					style={styles.memoryinput}
					onChangeText={text => this.updateText(text)}
					value={this.state.memoryDescription}
					placeholder="Write a little entry about today."
					multiline={true}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	memoryinput: {
		borderColor: '#ccc',
		borderWidth: 1,
		height: 120,
		borderRadius: 10,
		marginTop: 15,
		paddingTop: 15,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 15,
		fontSize: 16,
		justifyContent: 'flex-start',
	},
});
