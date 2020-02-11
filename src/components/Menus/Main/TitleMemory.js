import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class TitleMemory extends React.Component {
	render() {
		return (
			<View>
				<TextInput
					style={styles.titleinput}
					onChangeText={this.props.titleUpdate}
					value={this.props.titleValue}
					placeholder="Give this entry a title (<35 chars)"
					maxLength={35}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	titleinput: {
		borderColor: '#ccc',
		borderWidth: 1,
		height: 40,
		borderRadius: 10,
		marginTop: 15,
		paddingLeft: 10,
		fontSize: 16,
		justifyContent: 'flex-start',
	},
});
