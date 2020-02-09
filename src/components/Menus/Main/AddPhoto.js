import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class AddPhoto extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.addPhotoButton}>
					<Text style={styles.addPhotoButtonText}>Add Photo</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
	},
	addPhotoButton: {
		backgroundColor: '#F1F6FC',
		padding: 10,
		borderRadius: 10,
		width: 100,
		marginTop: 15,
	},
	addPhotoButtonText: {
		color: '#4395E8',
		fontWeight: '600',
		alignSelf: 'center',
	},
});
