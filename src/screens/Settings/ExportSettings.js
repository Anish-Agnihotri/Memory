import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SettingsHeader from '../../components/Settings/SettingsHeader';

// import ExportMarkdown from '../../components/Settings/Main/Export/ExportMarkdown';
import ExportJSON from '../../components/Settings/Main/Export/ExportJSON';
// import ExportCSV from '../../components/Settings/Main/Export/ExportCSV';

export default class ExportSettings extends React.Component {
	render() {
		return (
			<View style={styles.settingsContainer}>
				<SettingsHeader
					screenName="Export"
					buttonText="← Settings"
					buttonNavigation="Settings"
					closeAll={false}
				/>
				<ScrollView style={styles.marginfix}>
					{/*<ExportMarkdown />*/}
					<ExportJSON />
					{/*<ExportCSV />*/}
				</ScrollView>
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
	marginfix: {
		marginTop: 20,
	},
});
