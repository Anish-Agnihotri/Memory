import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {dateFormat} from '../../../utils/helpers';
import {Appearance} from 'react-native-appearance';

// TODO: Look into react-native-restart for live reload of darkmode changing components
export default class MemoryHeader extends React.Component {
	constructor() {
		super();

		this.state = {
			isDatePickerVisible: false,
			isDarkMode: false,
		};
	}
	showDatePicker = () => {
		this.setState({isDatePickerVisible: true});
	};
	hideDatePicker = () => {
		this.setState({isDatePickerVisible: false});
	};
	handleConfirm = date => {
		this.props.dateUpdate(date);
		this.setState({isDatePickerVisible: false});
	};
	checkDarkMode = () => {
		var colorScheme = Appearance.getColorScheme();
		// Dynamically change color picker theme based on current device colorScheme
		if (colorScheme === 'dark') {
			this.setState({isDarkMode: true});
		} else {
			this.setState({isDarkMode: false});
		}
	};
	componentDidMount() {
		this.checkDarkMode();
	}
	render() {
		return (
			<>
				<View style={styles.container}>
					<Text style={styles.header}>How was your day,</Text>
					<TouchableOpacity
						style={styles.datebutton}
						onPress={this.showDatePicker}>
						<Text style={styles.headerText}>
							{dateFormat(this.props.date)}
						</Text>
					</TouchableOpacity>
					<Text style={styles.headerText}>?</Text>
				</View>
				<DateTimePickerModal
					// Prevent picking a date in the future
					isVisible={this.state.isDatePickerVisible}
					mode="date"
					date={this.props.date}
					onConfirm={this.handleConfirm}
					onCancel={this.hideDatePicker}
					headerTextIOS="Select memory date"
					minimumDate={new Date(1900, 0, 1)}
					maximumDate={new Date()}
					isDarkModeEnabled={this.state.isDarkMode}
				/>
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	header: {
		fontSize: 20,
		marginLeft: 10,
		fontWeight: '500',
	},
	datebutton: {
		marginLeft: 3,
		borderBottomWidth: 1,
		borderColor: '#006565',
		paddingBottom: 2,
		fontWeight: '500',
	},
	headerText: {
		fontSize: 20,
		color: '#000',
		fontWeight: '500',
	},
});
