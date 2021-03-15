import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import { View } from '../Themed';
import { Episode } from '../../types';
import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import { Button } from 'react-native';

interface VideoPlayerProps {
    episode: Episode
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({})

    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync()
            await video?.current?.loadAsync(
                { uri: episode.video},
                {},
                false
            )
        })()
    }, [episode])

    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: episode.video,
                }}
                posterSource={{
                    uri: episode.poster
                }}
                posterStyle={{
                    resizeMode: 'cover',
                }}
                usePoster={true}
                useNativeControls
                resizeMode="contain"
                //isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            
            <View style={styles.buttons}>
        
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() => (
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        )
                    }
                />
        
            </View>
            
        </View>
    )
}

export default VideoPlayer
