import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import SettingsHeader from '../components/Settings/SettingsHeader'; // Modal header
import SettingsSection from '../components/Settings/SettingsSection'; // Settings content container

// Settings sections
import GetSupport from '../components/Settings/Main/GetSupport';
import Legal from '../components/Settings/Main/Legal';
import MadeBy from '../components/Settings/Main/MadeBy';
import DeleteAll from '../components/Settings/Main/DeleteAll';
import VersionData from '../components/Settings/Main/VersionData';

export default class Settings extends React.Component {
	render() {
		const items = [
			<GetSupport />,
			<MadeBy />,
			<Legal />,
			// Pass globalRefresh prop to update FlatList on button click
			<DeleteAll toggleGlobalRefresh={this.props.toggleGlobalRefresh} />,
			<VersionData />,
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
						// For each item in items, render a settings item
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
