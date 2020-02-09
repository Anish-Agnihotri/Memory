import React from 'react';
import {View, StyleSheet} from 'react-native';
import moment from 'moment';

import MemoryHeader from './Main/MemoryHeader';
import DescribeMemory from './Main/DescribeMemory';
import AddPhoto from './Main/AddPhoto';
import SpecialMemory from './Main/SpecialMemory';
import MenuButton from '../Buttons/MenuButton';

/*
	TODO: Update date picker
	TODO: Photo selection
	TODO: Save text to memory
	TODO: Emotion menu
*/

export default class MainMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			memory: {
				date: moment().format,
				entry: '',
				photo: '',
				isSpecial: true,
				emotion: '',
			},
		};
	}
	toggleSpecial = value => {
		this.setState({memory: {isSpecial: value}});
	};
	render() {
		return (
			<View style={styles.menuview}>
				<MemoryHeader date={this.state.memory.date} />
				<DescribeMemory />
				<AddPhoto />
				<SpecialMemory
					toggleValue={this.state.memory.isSpecial}
					onToggle={this.toggleSpecial}
				/>
				<MenuButton text="Continue" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	menuview: {
		backgroundColor: 'white',
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 40,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		marginBottom: -20,
		marginLeft: -20,
		marginRight: -20,
	},
});
