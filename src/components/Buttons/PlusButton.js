// Basic imports
import React from 'react';
import {
	Animated,
	Easing,
	TouchableOpacity,
	StyleSheet,
	Image,
} from 'react-native';

import Modal from 'react-native-modal';

import add from '../../assets/icons/add.png';

export default class PlusButton extends React.Component {
	constructor() {
		super();

		this.state = {
			animatedValue: new Animated.Value(0),
			animatedSecondValue: new Animated.Value(0),
			bottomValue: new Animated.Value(0),
			bottomSecondValue: new Animated.Value(0),
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.togglePressed = this.togglePressed.bind(this);
		this.handleAnimation = this.handleAnimation.bind(this);
		this.handleSecondAnimation = this.handleSecondAnimation.bind(this);
	}

	toggleModal() {
		if (this.props.modal === true) {
			this.handleSecondAnimation();
		}
		this.props.toggleModal();
	}

	togglePressed() {
		// TODO: Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
		this.handleAnimation();
	}

	handleAnimation = () => {
		Animated.timing(this.state.animatedValue, {
			toValue: 1,
			duration: 150,
			easing: Easing.ease,
			useNativeDriver: true,
		}).start();
		Animated.timing(this.state.bottomValue, {
			toValue: 1,
			duration: 150,
			easing: Easing.ease,
			useNativeDriver: true,
		}).start();
	};

	handleSecondAnimation = () => {
		Animated.timing(this.state.bottomSecondValue, {
			toValue: 1,
			duration: 75,
			easing: Easing.ease,
			useNativeDriver: true,
		}).start();
		Animated.timing(this.state.animatedSecondValue, {
			toValue: 1,
			duration: 150,
			easing: Easing.ease,
			useNativeDriver: true,
		}).start();
	};

	render() {
		// Forward animations
		const scale = this.state.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 0.7],
		});
		const move = this.state.bottomValue.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 140],
		});

		// Reverse animations
		const scaleReverse = this.state.animatedSecondValue.interpolate({
			inputRange: [0, 1],
			outputRange: [0.7, 1],
		});
		const moveReverse = this.state.bottomSecondValue.interpolate({
			inputRange: [0, 1],
			outputRange: [140, 0],
		});

		return (
			<>
				<Modal
					isVisible={this.props.modal}
					style={styles.menu}
					backdropTransitionOutTiming={0}
					hideModalContentWhileAnimating={true}
					backdropOpacity={0.2}
					onBackdropPress={this.toggleModal}>
					{this.props.children}
				</Modal>
				<TouchableOpacity
					activeOpacity={1}
					style={{
						width: 60,
						height: 60,
						borderRadius: 50,
						backgroundColor: '#006565',
						shadowOffset: {width: 0, height: 2},
						shadowColor: '#000',
						shadowOpacity: 0.5,
						position: 'absolute',
						bottom: 15,
						right: 15,
						transform: [
							{scaleX: this.props.modal ? scaleReverse : scale},
							{scaleY: this.props.modal ? scaleReverse : scale},
							{translateY: this.props.modal ? moveReverse : move},
						],
					}}
					onPressIn={this.togglePressed}
					onPress={this.toggleModal}>
					<Image source={add} style={styles.plusbuttontext} />
				</TouchableOpacity>
			</>
		);
	}
}

const styles = StyleSheet.create({
	plusbuttontext: {
		width: 27,
		height: 27,
		marginTop: 17,
		marginLeft: 17,
	},
	menu: {
		justifyContent: 'flex-end',
	},
});
