import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Pressable } from 'react-native';

import { Text, Image, FlatList } from 'react-native'
import styles from './styles';

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }
}

export default function HomeCategory(props: HomeCategoryProps) {
    const { category } = props;

    const navigation = useNavigation();

    const onMoviePress = (movie) => {
        //console.warn(movie.id)
        navigation.navigate("MovieDetailsScreen", {id: movie.id})
    }

    return (
        <>
            <Text style={styles.title}>{category.title}</Text>

            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Pressable onPress={() => onMoviePress(item)}>
                        <Image style={styles.image} source={{ uri: item.poster }} />
                    </Pressable>                 
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </>
    );
}