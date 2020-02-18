import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';

import me from '../../../assets/images/me.png';

export default class MadeBy extends React.Component {
	render() {
		return (
			<>
				<Image style={styles.personimage} source={me} />
				<Text style={styles.personname}>Anish Agnihotri</Text>
				<Text style={styles.persondesc}>Student Developer</Text>
				<Text style={styles.heading}>Made with Love</Text>
				<Text style={styles.desc}>
					Memory was made to cherish the best moments in life. I hope
					you enjoy!
				</Text>
			</>
		);
	}
}

const styles = StyleSheet.create({
	personimage: {
		width: 75,
		height: 75,
		borderRadius: 50,
	},
	personname: {
		marginTop: 8,
		fontSize: 16,
		fontWeight: '600',
	},
	heading: {
		fontSize: 25,
		fontWeight: '700',
		marginTop: 15,
	},
	desc: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 3,
		lineHeight: 20,
	},
});
