import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import MyCard from './Card';

const initialData = [
  {
    order: 1,
    title: 'Taj Exotica Resort - Premium Suite',
    subtitle: 'Enjoy the resort'
  },
  {
    order: 2,
    title: 'Water surfing in Elephant beach',
    subtitle: 'Enjoy the shores'
  },
];

function DandD(props) {
  const [data, setData] = useState(initialData);

  const renderItem = ({ item, index, drag, isActive }) => (
    <View style={styles.item}>
      <TouchableOpacity onLongPress={drag}>
        <MyCard title={item?.title} subtitle={item?.subtitle} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.screen}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingHorizontal: 15,
  },
  item: {
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
  },
});

export default DandD;