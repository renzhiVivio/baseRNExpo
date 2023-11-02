import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import sales from '../rawData/sales';
import Panel from '../components/panel';

export default function Home() {
    const router = useRouter();

    const DataCollapseRender = () => {
        const views = [];
        for (let i = 0; i < sales.length; i++) {
            views.push(
                <Panel key={`r${i + 1}`} 
                title={sales[i].groupName} 
                data={sales[i]} 
                rowIndex={i+1}
                link={`/mobile/deviceEdit/${sales[i].id}`}
                 />

            );
        }
        return views;

    }
    return (

        <ScrollView style={styles.container}>

            <DataCollapseRender />

            <Button onPress={() => router.push('/')} title="Go Back" />
        </ScrollView>


    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f7f9',
        paddingTop: 30
    },

});