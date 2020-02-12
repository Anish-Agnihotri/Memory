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
					placeholder="Give this entry a title (<50 chars)"
					maxLength={50}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	titleinput: {
		borderColor: '#C8D2D7',
		borderWidth: 1,
		height: 40,
		borderRadius: 7.5,
		marginTop: 15,
		paddingLeft: 10,
		fontSize: 16,
		justifyContent: 'flex-start',
	},
});
