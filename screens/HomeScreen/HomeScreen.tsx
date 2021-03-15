import * as React from 'react';

import { View } from '../../components/Themed';
import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import { FlatList } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item} />}
      />
      
    </View>
  );
}