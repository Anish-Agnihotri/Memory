import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import RoundedButton from '../../Buttons/RoundedButton';

import support from '../../../assets/icons/support.png';

export default class GetSupport extends React.Component {
	render() {
		return (
			<>
				<Image source={support} style={styles.supportimage} />
				<Text style={styles.headingText}>Get Support</Text>
				<Text style={styles.descText}>
					Facing trouble or have an inquiry?{'\n'}Don't hesitate to
					reach out!
				</Text>
				<RoundedButton text="Send an email" />
			</>
		);
	}
}

const styles = StyleSheet.create({
	supportimage: {
		width: 51.2,
		height: 46.0,
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
