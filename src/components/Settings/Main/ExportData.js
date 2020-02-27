import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import RoundedButton from '../../Buttons/RoundedButton';
import * as RootNavigation from '../../../utils/navigation';

import exporticon from '../../../assets/icons/export.png';

export default class ExportData extends React.Component {
	render() {
		return (
			<>
				<Image source={exporticon} style={styles.supportimage} />
				<Text style={styles.headingText}>Export Memories</Text>
				<Text style={styles.descText}>
					Export your memories in various formats.
				</Text>
				<RoundedButton
					text="See Options"
					whenPressed={() => RootNavigation.navigate('Export')}
				/>
			</>
		);
	}
}

const styles = StyleSheet.create({
	supportimage: {
		width: 43.3,
		height: 55.2,
	},
	headingText: {
		fontSize: 25,
		fontWeight: '700',
		marginTop: 15,
	},
	descText: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 3,
		lineHeight: 20,
	},
});
