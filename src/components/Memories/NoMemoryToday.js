import React from 'react';
import {
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import moment from 'moment';

import today from '../../assets/icons/today.png';

export default class NoMemoryToday extends React.Component {
	render() {
		return (
			<TouchableOpacity
				style={styles.nomemory}
				onPress={() => this.props.toggleModal()}>
				<Image style={styles.nomemoryimage} source={today} />
				<Text style={styles.nomemorydate}>
					{moment().format('[Today,] MMMM DD[,] YYYY')}
				</Text>
				<Text style={styles.nomemorytext}>How are you feeling?</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	nomemory: {
		alignSelf: 'center',
		width: Dimensions.get('window').width - 30,
		borderRadius: 10,
		backgroundColor: '#008080',
		padding: 20,
		shadowColor: '#008080',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1.84,
		elevation: 2,
		marginBottom: 10,
		marginTop: 5,
	},
	nomemorydate: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	},
	nomemorytext: {
		color: '#fff',
		fontSize: 23,
		fontWeight: '700',
		marginTop: 5,
	},
	nomemoryimage: {
		position: 'absolute',
		right: 0,
		height: 60,
		width: 48.22,
		top: 17.5,
	},
});
