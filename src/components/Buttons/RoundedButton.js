import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class RoundedButton extends React.Component {
	render() {
		return (
			<TouchableOpacity style={[styles.roundedbutton, this.props.isDangerous ? {backgroundColor: '#cc0000'} : {backgroundColor: '#006565'}]}>
				<Text style={styles.roundedbuttontext}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	roundedbutton: {
		paddingTop: 8.5,
		paddingBottom: 8.5,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 25,
		marginTop: 15,
		shadowOffset: {width: 0, height: 2},
		shadowColor: '#000',
		shadowOpacity: 0.2,
	},
	roundedbuttontext: {
		fontSize: 16,
		fontWeight: '500',
		color: '#fff',
	},
});
