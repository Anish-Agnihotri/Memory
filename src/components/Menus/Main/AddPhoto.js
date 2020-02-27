import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class AddPhoto extends React.Component {
	constructor() {
		super();

		this.state = {
			imageSelected: false,
			processActive: false,
		};
	}
	chooseImage = () => {
		this.props.updateProcessActive();
		var options = {
			title: 'Select memory image',
			cameraType: 'back',
			mediaType: 'photo',
			maxWidth: 800,
			maxHeight: 400,
			allowsEditing: true,
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};
		ImagePicker.showImagePicker(options, response => {
			if (response.didCancel || response.error) {
				this.props.updateProcessActive();
			} else if (!response.didCancel && !response.error) {
				let source = {uri: response.uri};
				this.props.addImage(source);
				this.props.updateProcessActive();
			}
		});
	};
	render() {
		return (
			<>
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.addPhotoButton}
						onPress={this.chooseImage.bind(this)}>
						{this.props.image !== '' ? (
							<View style={styles.wrapfix}>
								<Image
									source={this.props.image}
									style={styles.addPhotoButtonImage}
								/>
								<Text style={styles.addPhotoButtonTextSelected}>
									Selected
								</Text>
							</View>
						) : (
							<Text style={styles.addPhotoButtonText}>
								Add Photo
							</Text>
						)}
					</TouchableOpacity>
				</View>
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	addPhotoButton: {
		backgroundColor: '#F0F8F8',
		padding: 10,
		borderRadius: 7.5,
		marginTop: 15,
		borderWidth: 1,
		borderColor: '#006565',
		justifyContent: 'center',
		alignItems: 'center',
	},
	addPhotoButtonText: {
		color: '#006565',
		fontWeight: '600',
	},
	addPhotoButtonTextSelected: {
		color: '#006565',
		fontWeight: '600',
		marginLeft: 5,
	},
	addPhotoButtonImage: {
		width: 15,
		height: 15,
		borderRadius: 2,
	},
	wrapfix: {
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
});
