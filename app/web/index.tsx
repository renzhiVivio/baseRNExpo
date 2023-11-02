import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import BeautifulTable from 'react-native-beautiful-table';
import sales from '../rawData/sales';

export default function Home() {
    const router = useRouter();

    const columns = [
        {
          title: '组名称',
          dataKey: 'groupName',
          flex: 1

        },
        {
          title: '管理员',
          dataKey: 'admin',
          flex: 1
        },
        {
          title: '状态',
          dataKey: 'status',
          flex: 1
        },
        {
            title: '创建时间',
            dataKey: 'createdAt',
            flex: 1
          },
        {
          title: '备忘',
          dataKey: 'memo',
          flex: 1
        },
        {
            title: '操作',
            dataKey: 'editable',
            flex: 1,
            render(_, item) {
                return item.editable?<Button title='Edit' />:<></>
            }
          },
      ]
    
      

    return (
        <View>
            <BeautifulTable containerStyle={{paddingHorizontal: 20}} columns={columns} data={sales} />
            <Button onPress={() => router.push('/')} title="Go Back" />
        </View>
    );
}