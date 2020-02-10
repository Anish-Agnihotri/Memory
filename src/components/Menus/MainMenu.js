import React from 'react';
import {View, StyleSheet} from 'react-native';
import moment from 'moment';
import {emotions} from '../../utils/emotions';

import MemoryHeader from './Main/MemoryHeader';
import DescribeMemory from './Main/DescribeMemory';
import AddPhoto from './Main/AddPhoto';
import SpecialMemory from './Main/SpecialMemory';
import MenuButton from '../Buttons/MenuButton';
import EmotionHeader from './Main/EmotionHeader';
import EmotionSelection from './Main/EmotionSelection';

export default class MainMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			date: new Date(),
			image: '',
			entry: '',
			isSpecial: true,
			emotion: 0,
			mainShown: true,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
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
	handleImagePathChange = value => {
		this.setState({image: value});
	};
	changeShown = () => {
		this.setState({mainShown: false});
	};
	handleEmotionChange = value => {
		this.setState({emotion: value});
	};
	checkEmotion = value => {
		return emotions[value - 1].emotion.toLowerCase();
	};
	async handleSubmit() {
		console.log({
			date: this.state.date,
			entry: this.state.entry,
			image: this.state.image,
			isSpecial: this.state.isSpecial,
			emotion: this.state.emotion,
		});
		this.props.toggleModal();
	}
	render() {
		return (
			<View style={styles.menuview}>
				{this.state.mainShown ? (
					<>
						<MemoryHeader
							date={this.state.date}
							dateUpdate={this.handleDateChange}
						/>
						<DescribeMemory
							entryValue={this.state.entry}
							entryUpdate={this.entryUpdate}
						/>
						<AddPhoto
							image={this.state.image}
							addImage={this.handleImagePathChange}
						/>
						<SpecialMemory
							toggleValue={this.state.isSpecial}
							onToggle={this.toggleSpecial}
						/>
						<MenuButton
							text="Continue"
							onPress={this.changeShown}
						/>
					</>
				) : (
					<>
						<EmotionHeader
							date={
								moment(this.state.date) <
								moment()
									.add(-1, 'day')
									.endOf('day')
									? 'did'
									: 'do'
							}
						/>
						<EmotionSelection
							currentEmotion={this.state.emotion}
							emotionChange={this.handleEmotionChange}
						/>
						{this.state.emotion !== 0 ? (
							<MenuButton
								text={`Create ${this.checkEmotion(
									this.state.emotion,
								)} memory`}
								onPress={this.handleSubmit}
							/>
						) : (
							<MenuButton
								text="Select an emotion"
								disabled={true}
							/>
						)}
					</>
				)}
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
