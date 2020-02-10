import React from 'react';
import {View, StyleSheet} from 'react-native';
import MemoryLayout from '../components/Memories/Layout';

export default class Memories extends React.Component {
	render() {
		return (
			<View style={styles.memoriesContainer}>
				<MemoryLayout memories={true} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	memoriesContainer: {
		flex: 1,
		padding: 15,
		paddingTop: 30,
		backgroundColor: '#fff',
	},
});
