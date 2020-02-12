import React from 'react';
import {View, StyleSheet} from 'react-native';
import moment from 'moment';
import {returnEmotionInfo} from '../../utils/helpers';

import MemoryHeader from './Main/MemoryHeader';
import TitleMemory from './Main/TitleMemory';
import DescribeMemory from './Main/DescribeMemory';
import AddPhoto from './Main/AddPhoto';
import SpecialMemory from './Main/SpecialMemory';
import MenuButton from '../Buttons/MenuButton';
import EmotionHeader from './Main/EmotionHeader';
import EmotionSelection from './Main/EmotionSelection';

import {addMemory} from '../../models/actions';

export default class MainMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			title: '',
			date: new Date(),
			image: '',
			entry: '',
			isSpecial: true,
			emotion: [],
			mainShown: true,
			processActive: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	titleUpdate = value => {
		this.setState({title: value});
	};
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
	updateProcessActive = () => {
		this.setState(previous => ({processActive: !previous.processActive}));
	};
	handleEmotionChange = value => {
		this.setState({emotion: [...this.state.emotion, ...[value]]});
	};
	async handleSubmit() {
		addMemory(
			this.state.title,
			this.state.date,
			this.state.entry,
			this.state.image.uri,
			this.state.isSpecial,
			this.state.emotion,
		);
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
						<TitleMemory
							titleValue={this.state.title}
							titleUpdate={this.titleUpdate}
						/>
						<DescribeMemory
							entryValue={this.state.entry}
							entryUpdate={this.entryUpdate}
						/>
						<AddPhoto
							image={this.state.image}
							addImage={this.handleImagePathChange}
							updateProcessActive={this.updateProcessActive}
						/>
						<SpecialMemory
							toggleValue={this.state.isSpecial}
							onToggle={this.toggleSpecial}
						/>
						{this.state.title === '' ? (
							<MenuButton
								text="Continue"
								onPress={this.changeShown}
								processText="Please enter title"
								processActive={true}
								disabled={true}
							/>
						) : (
							<MenuButton
								text="Continue"
								onPress={this.changeShown}
								processText="Loading..."
								processActive={this.state.processActive}
								disabled={
									this.state.processActive ? true : false
								}
							/>
						)}
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
						{this.state.emotion !== [] ? (
							<MenuButton
								text={`Create memory`}
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
		paddingBottom: 30,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		marginBottom: -20,
		marginLeft: -20,
		marginRight: -20,
	},
});
