import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { getActivitiesLast24Hours } from '../utils/storage';


export default function Dashboard({ navigation }) {
    const [summary, setSummary] = useState({ water: 0, steps: 0, sleep: 0 });


    useEffect(() => {
        async function load() {
            const data = await getActivitiesLast24Hours();
            const sum = { water: 0, steps: 0, sleep: 0 };
            data.forEach(a => (sum[a.type] += Number(a.value)));
            setSummary(sum);
        }
        load();
    }, []);


    const today = new Date().toDateString();


    return (
        <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold',alignSelf:'center' }}>{today}</Text>


            <View style={{ marginTop: 25, gap: 5,backgroundColor: '#0a80a3ff', padding: 20, borderRadius: 12}}>
                <Text style={{ fontSize: 18 , color: '#e2f8ffff'}}>Water Intake: {summary.water} glasses</Text>
                <Text style={{ fontSize: 18 , color: '#e2f8ffff'}}>Steps Walked: {summary.steps}</Text>
                <Text style={{ fontSize: 18 , color: '#e2f8ffff'}}>Sleep Hours: {summary.sleep} hours</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                style={{ marginTop: 40,borderBlockColor:'blue', borderWidth: 1, padding: 10, borderRadius: 10 }}
                onPress={() => navigation.navigate('LogActivity')}
            >
                <Text style={{ color: 'blue', fontSize: 18 }}>+ Log Activity</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={{ marginTop: 20, borderBlockColor:'blue', borderWidth: 1, padding: 10, borderRadius: 10 }}
                onPress={() => navigation.navigate('History')}
            >
                <Text style={{ color: 'blue', fontSize: 18 }}>View History</Text>
            </TouchableOpacity>
            </View>

        </View>
    );
}