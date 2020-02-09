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
