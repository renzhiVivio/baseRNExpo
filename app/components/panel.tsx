import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import SalesKeyTranslate from '../rawData/salesKeyTranslate';


export default function Home(props) {
    const router = useRouter();
    const [expanded, setExpanded] = useState<boolean>(false);
    const columns = Object.keys(props.data)

    const DataRowRender = () => {
        const views = [];
        for (let i = 0; i < columns.length; i++) {

            columns[i] !== 'editable' && views.push(
                <Text key={`r${props.rowIndex}c${i}`}>{`${SalesKeyTranslate[columns[i]]}:${props.data[columns[i]]}`}</Text>
            );
        }
        return views;

    }
    return (
        <View style={styles.container} >


            <TouchableHighlight
                style={styles.button}
                onPress={() => setExpanded(e => !e)}
                underlayColor="#f1f1f1">
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    {props.data.editable ?
                        <Button title="Edit"
                            onPress={() => router.push({ pathname: props.link, params: { ...props.data } })}
                        />
                        : <></>}
                </View>
            </TouchableHighlight>

            {expanded && <View style={styles.body}>
                <DataRowRender />
            </View>}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        overflow: 'hidden'
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold'
    },
    button: {

    },
    buttonImage: {
        width: 30,
        height: 25
    },
    body: {
        padding: 10,
        paddingTop: 0
    }
});