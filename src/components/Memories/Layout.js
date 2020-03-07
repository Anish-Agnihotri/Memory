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
		};
	}

	// Delete functionality to refresh state from child.
	updateGlobalRefresh = state => {
		this.setState({globalRefresh: state});
	};

	updateDiaryItems = () => {
		// Return memories as value
		var value = returnMemories(this.props.memories);

		// Initially set today item to false
		var showMemoryTodayItem = false;
		if (
			value.length >= 1 &&
			memoryToday() === false &&
			this.props.memories === false
		) {
			// If there are more than 0 memories
			// If there are no memories today
			// If this is the Diary page, not memories
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
		// Update FlatList on load
		this.updateGlobalRefresh(this.props.globalLayoutRefresh);
	}

	UNSAFE_componentWillReceiveProps(props) {
		// Performance: Only update FlatList if parent props have changed
		// Not just, when all props have been received
		if (props.globalLayoutRefresh !== this.state.globalRefresh) {
			this.updateDiaryItems();
			this.updateGlobalRefresh(props.globalLayoutRefresh);
		}
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
				ListEmptyComponent={
					<Placeholder isMemoriesPage={this.props.memories} />
				}
				renderItem={this.renderItem}
				keyExtractor={item => item.id.toString()}
				maxToRenderPerBatch={5}
				initialNumToRender={5}
				windowSize={6}
			/>
		);
	}
}
