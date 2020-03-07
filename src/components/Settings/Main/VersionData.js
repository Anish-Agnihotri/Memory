import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default class VersionData extends React.Component {
	render() {
		return (
			<>
				<Text style={styles.descText}>Version 1.0.1 | Build 1</Text>
			</>
		);
	}
}

const styles = StyleSheet.create({
	descText: {
		fontSize: 13,
		textAlign: 'center',
		marginTop: -5,
		marginBottom: -8,
		lineHeight: 20,
		fontWeight: '400',
	},
});
