import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class MenuButton extends React.Component {
	render() {
		return (
			<TouchableOpacity
				activeOpacity={this.props.disabled ? 1.0 : 0.5}
				style={[
					this.props.disabled ? styles.buttondisabled : styles.button,
				]}
				onPress={this.props.disabled ? null : this.props.onPress}>
				{this.props.processActive ? (
					<Text style={styles.buttontext}>{this.props.processText}</Text>
				) : (
					<Text style={styles.buttontext}>{this.props.text}</Text>
				)}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#167DE6',
		height: 40,
		marginTop: 20,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttondisabled: {
		backgroundColor: '#ccc',
		height: 40,
		marginTop: 20,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttontext: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
	},
});
