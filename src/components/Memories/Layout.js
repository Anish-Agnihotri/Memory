import React from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import MemoryItem from './Items';
import Placeholder from './Placeholder';
import NoMemoryToday from './NoMemoryToday';

import {returnMemories, memoryToday} from '../../models/actions';
import {returnEmotionInfo, memoryDateFormat} from '../../utils/helpers';

export default class MemoryLayout extends React.Component {
	constructor() {
		super();

		this.state = {
			diaryItems: [],
			refreshing: true,
			memoryToday: false,
			scrolling: false,
			currentMenu: 0,
		};

		this.flatList = React.createRef();
	}

	updateCurrentMenu = value => {
		this.setState({currentMenu: value});
	};

	updateScrollingStatus = isScrolling => {
		this.setState({scrolling: isScrolling ? true : false});
	};

	updateDiaryItems = () => {
		var value = returnMemories(this.props.memories);

		var showMemoryTodayItem = false;
		if (
			value.length >= 1 &&
			memoryToday() === false &&
			this.props.memories === false
		) {
			showMemoryTodayItem = true;
		}

		this.setState({
			refreshing: false,
			diaryItems: value,
			showMemoryTodayItem: showMemoryTodayItem,
		});
	};

	componentDidMount() {
		this.updateDiaryItems();
	}
	UNSAFE_componentWillReceiveProps() {
		this.updateDiaryItems();
	}

	renderItem = ({item}) => (
		<MemoryItem
			id={item.id}
			date={memoryDateFormat(item.date)}
			title={item.title}
			image={item.image}
			entry={item.entry}
			emotion={returnEmotionInfo(item.emotion)}
			isSpecial={item.isSpecial}
			isMemoryLayout={this.props.memories}
			runRefresh={this.updateDiaryItems}
			scrolling={this.state.scrolling}
			updateCurrentMenu={this.updateCurrentMenu}
			currentMenu={this.state.currentMenu}
		/>
	);

	render() {
		return (
			<FlatList
				data={this.state.diaryItems}
				ListHeaderComponent={
					<>
						<View style={{paddingTop: 10}} />
						{this.state.showMemoryTodayItem ? (
							<NoMemoryToday
								toggleModal={this.props.toggleModal}
							/>
						) : null}
					</>
				}
				ListFooterComponent={<View style={{paddingBottom: 5}} />}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.updateDiaryItems}
					/>
				}
				initialNumToRender={5}
				ListEmptyComponent={
					<Placeholder isMemoriesPage={this.props.memories} />
				}
				renderItem={this.renderItem}
				keyExtractor={item => item.id.toString()}
			/>
		);
	}
}
