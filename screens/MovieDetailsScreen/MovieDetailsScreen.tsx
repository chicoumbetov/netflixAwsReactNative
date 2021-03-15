import React, { useState } from "react"
import { Image, Pressable, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { View, Text } from '../../components/Themed';
import styles from './styles';

import movie from '../../assets/data/movie';
import { AntDesign, Entypo, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem/EpisodeItem';

const firstSeason = movie.seasons.items[0]
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {
    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    const seasonNames = movie.seasons.items.map(season => season.name);

    return (
        <View >
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />

            <FlatList
                data={currentSeason.episodes.items}
                renderItem={({ item }) => <EpisodeItem episode={item} />}
                style={{ marginBottom: 220 }}
                ListHeaderComponent={(
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

                        <Text style={{ marginVertical: 7 }}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>

                        {/* Row with icon buttons */}
                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name="plus" size={24} color={'white'} />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
                            </View>

                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <Feather name="thumbs-up" size={24} color={'white'} />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
                            </View>

                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <FontAwesome name="send-o" size={24} color={'white'} />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
                            </View>
                        </View>

                        <Picker
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(movie.seasons.items[itemIndex])
                            }}
                            
                            dropdownIconColor={'white'}
                            style={{
                                color: 'white', height: 85, marginTop: 15,
                                width: 130,
                            }}
                            itemStyle={{marginTop: -20, height: 120}}
                        >
                            {seasonNames.map(seasonName => (
                                <Picker.Item color="white" label={seasonName} value={seasonName} key={seasonName} />
                            ))}
                        </Picker>

                    </View>
                )}
            />
        </View>
    )
}

export default MovieDetailsScreen;