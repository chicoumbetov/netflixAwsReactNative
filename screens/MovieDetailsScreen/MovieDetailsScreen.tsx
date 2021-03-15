import React from 'react'
import { Image, Pressable } from 'react-native';
import { View, Text } from '../../components/Themed';
import styles from './styles';

import movie from '../../assets/data/movie';
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
            <View style={{ padding: 12 }}>

                <Text style={styles.title}>{movie.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.match}>98% match</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.age}>12+</Text>
                    </View>
                    <Text>{movie.numberOfSeasons} Seasons</Text>
                    <MaterialIcons name="hd" size={20} color="white" />
                </View>

                {/* Play button */}
                <Pressable
                    onPress={() => { console.warn('Plage') }}
                    style={styles.playButton}
                >
                    <Text style={styles.playButtonText}>
                        <Entypo name="controller-play" size={16} color="black" />
                        Play
                    </Text>
                </Pressable>

                {/* Play button */}
                <Pressable
                    onPress={() => { console.warn('plage') }}
                    style={styles.downloadButton}
                >
                    <Text style={styles.downloadButtonText}>
                        <View style={{ backgroundColor: '#2b2b2b', marginHorizontal: 5 }}>
                            <AntDesign name="download" size={16} color="white" />
                        </View>
                        Download
                    </Text>
                </Pressable>

                <Text style={{ marginVertical: 7}}>{movie.plot}</Text>
                <Text style={styles.year}>Cast: {movie.cast}</Text>
                <Text style={styles.year}>Creator: {movie.creator}</Text>

                {/* Row with icon buttons */}
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <View style={{alignItems: 'center', marginHorizontal: 20}}>
                        <AntDesign name="plus" size={24} color={'white'} />
                        <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                    </View>

                    <View style={{alignItems: 'center', marginHorizontal: 20}}>
                        <Feather name="thumbs-up" size={24} color={'white'} />
                        <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                    </View>

                    <View style={{alignItems: 'center', marginHorizontal: 20}}>
                        <FontAwesome name="send-o" size={24} color={'white'} />
                        <Text style={{color: 'darkgrey', marginTop: 5}}>Share</Text>
                    </View>
                </View>
                

            </View>
        </View>
    )
}

export default MovieDetailsScreen;
