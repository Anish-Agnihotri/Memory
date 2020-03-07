import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import moment from 'moment';

// Sub-sections
import MemoryHeader from './Main/MemoryHeader';
import TitleMemory from './Main/TitleMemory';
import DescribeMemory from './Main/DescribeMemory';
import AddPhoto from './Main/AddPhoto';
import SpecialMemory from './Main/SpecialMemory';
import MenuButton from '../Buttons/MenuButton';
import EmotionHeader from './Main/EmotionHeader';
import EmotionSelection from './Main/EmotionSelection';

// Add Memory Realm db action
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

		this.handleSubmit = this.handleSubmit.bind(this); // Using bind because async
	}
	titleUpdate = value => {
		// Update Memory title
		this.setState({title: value});
	};
	entryUpdate = value => {
		// Update entry title
		this.setState({entry: value});
	};
	toggleSpecial = value => {
		// Toggle if diary entry classifies as a Memory
		this.setState({isSpecial: value});
	};
	handleDateChange = value => {
		// Handle date selection
		this.setState({date: value});
	};
	handleImagePathChange = value => {
		// Handle image path (documents)
		this.setState({image: value});
	};
	changeShown = () => {
		// Handle button states
		this.setState({mainShown: false});
	};
	updateProcessActive = () => {
		// Handle button states
		this.setState(previous => ({processActive: !previous.processActive}));
	};
	handleEmotionChange = value => {
		// Array logic to select emotions
		if (this.state.emotion.includes(value)) {
			// Filter for emotion, update array
			var array = this.state.emotion.filter(val => val !== value);
			this.setState({emotion: array});
		} else {
			// Else, set array equal to new value
			this.setState({emotion: [...this.state.emotion, ...[value]]});
		}
	};
	async handleSubmit() {
		// Create new memory with objects in state memory
		addMemory(
			this.state.title,
			this.state.date,
			this.state.entry,
			this.state.image.uri,
			this.state.isSpecial,
			this.state.emotion,
		);
		// Toggle a global refresh of FlatList
		this.props.toggleGlobalRefresh();
		// Close the modal
		this.props.toggleModal();
	}
	render() {
		return (
			// Let keyboard push menuview up when shown
			<KeyboardAvoidingView
				behavior="position"
				keyboardVerticalOffset={10}
				enabled>
				<View style={styles.menuview}>
					{this.state.mainShown ? (
						// If modal page 1:
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
								// If title is entered, update button state
								<MenuButton
									text="Continue"
									onPress={this.changeShown}
									processText="Please enter a title"
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
							{this.state.emotion.length !== 0 ? (
								// Update button state. Reject if emotions < 1
								<MenuButton
									text={`Create with ${
										this.state.emotion.length
									} emotion${
										this.state.emotion.length !== 1
											? 's'
											: ''
									}`}
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
			</KeyboardAvoidingView>
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
