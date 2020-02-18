import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import SettingsHeader from '../components/Settings/SettingsHeader';
import SettingsSection from '../components/Settings/SettingsSection';

import GetSupport from '../components/Settings/Main/GetSupport';
import ExportData from '../components/Settings/Main/ExportData';
import Legal from '../components/Settings/Main/Legal';
import MadeBy from '../components/Settings/Main/MadeBy';
import DeleteAll from '../components/Settings/Main/DeleteAll';

export default class Settings extends React.Component {
	render() {
		const items = [
			<GetSupport />,
			<Text>Themes section</Text>,
			<ExportData />,
			<MadeBy />,
			<Legal />,
			<DeleteAll />,
		];
		return (
			<View style={styles.settingsContainer}>
				<SettingsHeader
					screenName="Settings"
					buttonText="Close"
					buttonNavigation="Memories"
					closeAll={true}
				/>
				<ScrollView style={styles.marginfix}>
					{items.map((data, idx) => {
						return (
							<SettingsSection key={idx}>{data}</SettingsSection>
						);
					})}
					<View style={styles.bottompad} />
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
		paddingTop: 5,
	},
	bottompad: {
		marginBottom: 50,
	},
});
