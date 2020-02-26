import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class ExportJSON extends React.Component {
	render() {
		return (
			<TouchableOpacity activeOpacity={0.65} style={styles.exportbutton}>
				<Text style={styles.exportHeader}>JSON</Text>
				<Text style={styles.exportSubtitle}>
					Good for other tracking apps
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	exportbutton: {
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderColor: '#eee',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
	},
	exportHeader: {
		fontWeight: '500',
		fontSize: 16,
	},
	exportSubtitle: {
		marginTop: 2,
	},
});
