import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

let height = Dimensions.get('window').height;

import diaryPlaceholder from '../../assets/placeholders/diary.png';
import memoryPlaceholder from '../../assets/placeholders/memories.png';

export default class Placeholder extends React.Component {
	render() {
		return (
			<View style={styles.emptylist}>
				<Image
					style={
						this.props.isMemoriesPage
							? styles.placeholderimagememory
							: styles.placeholderimagediary
					}
					source={
						this.props.isMemoriesPage
							? memoryPlaceholder
							: diaryPlaceholder
					}
				/>
				<Text style={styles.placeholderheader}>
					{this.props.isMemoriesPage
						? 'No special memories found'
						: 'No diary entries found'}
				</Text>
				<Text style={styles.placeholderdesc}>
					{this.props.isMemoriesPage
						? 'Select keep, when adding a diary entry, to save special memories!'
						: 'Get started by creating a new diary entry and capture your memories!'}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	emptylist: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: height - 157,
	},
	placeholderimagediary: {
		width: 242,
		height: 215.6,
	},
	placeholderimagememory: {
		width: 242,
		height: 136.2,
	},
	placeholderheader: {
		fontWeight: '600',
		fontSize: 17,
		marginTop: 20,
	},
	placeholderdesc: {
		width: 270,
		marginTop: 10,
		lineHeight: 18,
		textAlign: 'center',
	},
});
