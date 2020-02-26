import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Placeholder extends React.Component {
	render() {
		return (
			<View style={styles.placeholderview}>
				<View style={styles.headerparent}>
					<Text style={styles.placeholderheader}>
						No memories found for{' '}
					</Text>
					<View style={styles.headercolorparent}>
						<Text style={styles.headercolor}>
							{this.props.string}
						</Text>
					</View>
				</View>
				<Text style={styles.placeholdersubtitle}>
					Get started by adding a diary entry.
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	placeholderview: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1.5,
		borderStyle: 'dashed',
		borderColor: '#006565',
		padding: 10,
		borderRadius: 5,
		width: '100%',
	},
	headerparent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headercolorparent: {
		backgroundColor: '#006565',
		paddingLeft: 3,
		paddingTop: 2,
		paddingRight: 3,
		paddingBottom: 2,
		borderRadius: 5,
	},
	headercolor: {
		fontWeight: '600',
		fontSize: 15,
		color: '#fff',
	},
	placeholderheader: {
		fontWeight: '600',
		fontSize: 15,
	},
	placeholdersubtitle: {
		fontSize: 12.5,
		marginTop: 1.5,
	},
});
