import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import SettingsHeader from '../../components/Settings/SettingsHeader';

export default class LegalitySettings extends React.Component {
	render() {
		return (
			<View style={styles.settingsContainer}>
				<SettingsHeader
					screenName="Legal"
					buttonText="← Settings"
					buttonNavigation="Settings"
					closeAll={false}
				/>
				<WebView
					style={styles.webview}
					source={{uri: 'https://anishagnihotri.com/memory/'}}
					decelerationRate="fast"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	settingsContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#F0F7F7',
	},
	webview: {
		backgroundColor: '#F0F7F7',
	},
});
