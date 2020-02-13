import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import RoundedButton from '../../Buttons/RoundedButton';

import legal from '../../../assets/icons/legal.png';

export default class Legal extends React.Component {
	render() {
		return (
			<>
				<Image source={legal} style={styles.supportimage} />
				<Text style={styles.headingText}>Legalities</Text>
				<Text style={styles.descText}>
					I don't store any of your data.{'\n'}Still, I don't like
					getting sued.
				</Text>
				<RoundedButton text="Privacy Policy" />
			</>
		);
	}
}

const styles = StyleSheet.create({
	supportimage: {
		width: 52,
		height: 52,
	},
	headingText: {
		fontSize: 25,
		fontWeight: '700',
		marginTop: 15,
	},
	descText: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 3,
		lineHeight: 20,
	},
});
