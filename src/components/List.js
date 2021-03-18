import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const List = () => {
	const data = ['Item 0'];

	return <FlatList
		data={data}
		keyExtractor={item => item}
		renderItem={({item}) => <ListItem text={item}/>}
	/>
}

export default List;