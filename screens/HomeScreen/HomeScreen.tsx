import * as React from 'react';

import { Text, Image, FlatList } from 'react-native'
import { View } from '../../components/Themed';
import styles from './styles';
import categories from '../../assets/data/categories';

const firstCategory = categories.items[0];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{firstCategory.title}</Text>
      
      <FlatList 
        data={firstCategory.movies}
        renderItem={({item}) => (
          <Image style={styles.image} source={{ uri: item.poster}}/>
        )}
        horizontal
      />

    </View>
  );
}