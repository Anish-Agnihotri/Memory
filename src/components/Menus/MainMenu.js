import React from 'react';
import {View, StyleSheet} from 'react-native';

import MemoryHeader from './Main/MemoryHeader';
import DescribeMemory from './Main/DescribeMemory';
import AddPhoto from './Main/AddPhoto';
import SpecialMemory from './Main/SpecialMemory';
import MenuButton from '../Buttons/MenuButton';

/*
	TODO: Photo selection
	TODO: Emotion menu
*/

export default class MainMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			date: new Date(),
			entry: '',
			photo: '',
			isSpecial: true,
			emotion: '',
		};
	}
	entryUpdate = value => {
		this.setState({entry: value});
	};
	toggleSpecial = value => {
		this.setState({isSpecial: value});
	};
	handleDateChange = value => {
		this.setState({date: value});
	};
	render() {
		return (
			<View style={styles.menuview}>
				<MemoryHeader
					date={this.state.date}
					dateUpdate={this.handleDateChange}
				/>
				<DescribeMemory
					entryValue={this.state.entry}
					entryUpdate={this.entryUpdate}
				/>
				<AddPhoto />
				<SpecialMemory
					toggleValue={this.state.isSpecial}
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
