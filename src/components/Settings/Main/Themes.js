import React from 'react';
import {Text, StyleSheet} from 'react-native';
import RoundedButton from '../../Buttons/RoundedButton';
import * as RootNavigation from '../../../utils/navigation';

export default class Themes extends React.Component {
	render() {
		return (
			<>
				<Text style={styles.headingText}>Themes</Text>
				<Text style={styles.descText}>
					Choose between Light, Classic, &amp; Dark.
				</Text>
				<RoundedButton
					text="Change Theme"
					whenPressed={() => RootNavigation.navigate('Themes')}
				/>
			</>
		);
	}
}

const styles = StyleSheet.create({
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
