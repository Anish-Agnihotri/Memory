import React from 'react';
import {Image, Text, StyleSheet, Alert} from 'react-native';
import RoundedButton from '../../Buttons/RoundedButton';
import {deleteAllMemories} from '../../../models/actions';

import deleteicon from '../../../assets/icons/delete.png';

export default class DeleteAll extends React.Component {
	deleteAll = () => {
		Alert.alert(
			'Delete all memories',
			'Are you sure you wish to delete all memories?',
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => deleteAllMemories(),
				},
			],
		);
	};
	render() {
		return (
			<>
				<Image source={deleteicon} style={styles.supportimage} />
				<Text style={styles.headingText}>Delete all Data</Text>
				<Text style={styles.descText}>
					Please be careful. This action is irreversible and I can't
					restore any memories.
				</Text>
				<RoundedButton
					text="Delete memories"
					isDangerous={true}
					whenPressed={this.deleteAll}
				/>
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
		marginTop: 10,
	},
	descText: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 3,
		lineHeight: 20,
	},
});
