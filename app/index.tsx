import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Platform, Button } from 'react-native';


const PlaceholderImage = require('../assets/images/homepage-bg.png');

export default function Startup() {
    const router = useRouter();

    return (
        Platform.OS === 'web' ?
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={PlaceholderImage} style={styles.image} />
                </View>
                <Button onPress={() => router.push('/web')} title="Go!" />
                <StatusBar style="auto" />
            </View> :
            <View style={stylesIos.container}>
                <View style={stylesIos.imageContainer}>
                    <Image source={PlaceholderImage} style={stylesIos.image} />
                </View>
                <Button onPress={() => router.push('/mobile')} title="Go!" />
                <StatusBar style="auto" />
            </View>
    );
}

const stylesIos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    image: {
        width: 1000,
        height: 440,
        borderRadius: 18,
    },
});