import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {dateFormat} from '../../../utils/helpers';

export default class MemoryHeader extends React.Component {
	constructor() {
		super();

		this.state = {
			isDatePickerVisible: false,
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
					isVisible={this.state.isDatePickerVisible}
					mode="date"
					date={this.props.date}
					onConfirm={this.handleConfirm}
					onCancel={this.hideDatePicker}
					headerTextIOS="Select memory date"
					minimumDate={new Date(1900, 0, 1)}
					maximumDate={new Date()}
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
	},
	datebutton: {
		marginLeft: 3,
		borderBottomWidth: 1,
		borderColor: '#167DE6',
		paddingBottom: 2,
	},
	headerText: {
		fontSize: 20,
		color: '#000',
	},
});
