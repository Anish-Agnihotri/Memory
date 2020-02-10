import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class DescribeMemory extends React.Component {
	render() {
		return (
			<View>
				<TextInput
					style={styles.memoryinput}
					onChangeText={this.props.entryUpdate}
					value={this.props.entryValue}
					placeholder="Write a short diary entry (<240 chars)"
					multiline={true}
					maxLength={240}
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
