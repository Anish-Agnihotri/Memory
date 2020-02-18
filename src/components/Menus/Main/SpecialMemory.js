import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default class SpecialMemory extends React.Component {
	render() {
		return (
			<View style={styles.switch}>
				<Text style={styles.switchText}>Keep as memory</Text>
				<Switch
					style={styles.switchSelf}
					onValueChange={this.props.onToggle}
					value={this.props.toggleValue}
					trackColor={{ true: '#006565' }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	switch: {
		alignSelf: 'flex-end',
		display: 'flex',
		flexDirection: 'row',
		marginTop: -34,
		alignItems: 'center',
	},
	switchText: {
		fontSize: 16,
		paddingRight: 10,
	},
});
