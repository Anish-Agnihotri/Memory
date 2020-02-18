import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as RootNavigation from '../../utils/navigation';

export default class SettingsHeader extends React.Component {
	render() {
		return (
			<View style={styles.settingsheaderview}>
				<Text style={styles.settingsheadertext}>
					{this.props.screenName}
				</Text>
				<TouchableOpacity
					style={
						this.props.closeAll
							? styles.settingsheaderbutton
							: styles.settingsheaderbuttonleft
					}
					onPress={() =>
						RootNavigation.navigate(this.props.buttonNavigation)
					}>
					<Text style={styles.settingsheaderbuttontext}>
						{this.props.buttonText}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	settingsheaderview: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		height: 58,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1.5,
		},
		shadowOpacity: 0.05,
		shadowRadius: 1.62,
		elevation: 2,
		textAlign: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#00000020',
	},
	settingsheadertext: {
		color: '#000',
		fontSize: 18,
		fontWeight: '600',
		alignSelf: 'center',
	},
	settingsheaderbutton: {
		position: 'absolute',
		right: 15,
	},
	settingsheaderbuttonleft: {
		position: 'absolute',
		left: 15,
	},
	settingsheaderbuttontext: {
		fontSize: 17,
		color: '#024342',
	},
});
