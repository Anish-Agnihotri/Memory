import React from 'react';
import {View, StyleSheet} from 'react-native';
import PlusButton from '../components/Buttons/PlusButton';
import MainMenu from '../components/Menus/MainMenu';
import MemoryLayout from '../components/Memories/Layout';

export default class Diary extends React.Component {
	constructor() {
		super();

		this.state = {
			modal: false,
		};
	}
	toggleModal = () => {
		this.setState(previous => ({modal: !previous.modal}));
	};
	render() {
		return (
			<View style={styles.diaryContainer}>
				<MemoryLayout />
				<PlusButton
					modal={this.state.modal}
					toggleModal={this.toggleModal}>
					<MainMenu toggleModal={this.toggleModal} />
				</PlusButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	diaryContainer: {
		flex: 1,
		padding: 15,
		paddingTop: 30,
		backgroundColor: '#fff',
	},
});
