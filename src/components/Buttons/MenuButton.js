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
					<Text style={styles.buttontext}>
						{this.props.processText}
					</Text>
				) : (
					<Text style={styles.buttontext}>{this.props.text}</Text>
				)}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#000',
		height: 45,
		marginTop: 20,
		borderRadius: 7.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttondisabled: {
		backgroundColor: '#C8D2D7',
		height: 45,
		marginTop: 20,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttontext: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
	},
});
