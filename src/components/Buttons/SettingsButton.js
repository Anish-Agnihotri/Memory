import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaConsumer} from 'react-native-safe-area-context';
import * as RootNavigation from '../../utils/navigation';

import settings from '../../assets/icons/settings.png';

export default class SettingsButton extends React.Component {
	render() {
		return (
			<SafeAreaConsumer>
				{insets => (
					<TouchableOpacity
						style={[styles.settingsbutton, {top: insets.top + 13}]}
						onPress={() => RootNavigation.navigate('Settings')}>
						<Image
							source={settings}
							style={styles.settingsbuttonimage}
						/>
					</TouchableOpacity>
				)}
			</SafeAreaConsumer>
		);
	}
}

const styles = StyleSheet.create({
	settingsbutton: {
		position: 'absolute',
		right: 15,
	},
	settingsbuttonimage: {
		width: 21,
		height: 21,
	},
});
