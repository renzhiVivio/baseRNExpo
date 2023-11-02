import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import SalesKeyTranslate from '../../rawData/salesKeyTranslate';

export default function DeviceEdit() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const columns = Object.keys(params)
    const DataRowRender = () => {
        const views = [];
        for (let i = 0; i < columns.length; i++) {
            columns[i] !== 'editable' && columns[i] !== 'slug' && views.push(
                <Text key={`d${i}`}>{`${SalesKeyTranslate[columns[i]]}:${params[columns[i]]}`}</Text>
            );
        }
        return views;
    }

    return (
        <View>
            <DataRowRender />
            <Button title={`Edit Device ${params.groupName}`} />
            <Button onPress={() => router.push('/mobile')} title={'Go Back'} />
        </View>
    );
}