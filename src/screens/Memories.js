import React from 'react';
import { View, StyleSheet } from 'react-native';
import MemoryLayout from '../components/Memories/Layout';

export default class Memories extends React.Component {
	render() {
		return (
			<View style={styles.memoriesContainer}>
				<MemoryLayout
					memories={true}
					globalLayoutRefresh={this.props.globalLayoutRefresh}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	memoriesContainer: {
		flex: 1,
		backgroundColor: '#F0F7F7',
	},
});
