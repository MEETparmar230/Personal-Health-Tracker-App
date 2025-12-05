import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { saveActivity } from '../utils/storage';


export default function LogActivity({ navigation }) {
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [notes, setNotes] = useState('');



    const submit = async () => {
        if (!type || !value) {
            alert('Please fill all required fields');
            return;
        }


        await saveActivity({
            id: Date.now(),
            type,
            value,
            notes,
            time: new Date().toISOString(),
        });


        navigation.goBack();
    };


    return (
        <View style={{ padding: 20, marginTop: 50 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Log Activity</Text>


            <Text style={{ marginTop: 15 }}>Activity Type</Text>
            <TextInput
                placeholder="water | steps | sleep"
                value={type}
                onChangeText={setType}
                style={{ borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 8 }}
            />


            <Text>Value</Text>
            <TextInput
                placeholder="e.g. 4"
                keyboardType="numeric"
                value={value}
                onChangeText={setValue}
                style={{ borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 8 }}
            />


            <Text>Notes (optional)</Text>
            <TextInput
                value={notes}
                onChangeText={setNotes}
                style={{ borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 8 }}
            />


            <TouchableOpacity
                onPress={submit}
                style={{ backgroundColor: 'green', padding: 14, borderRadius: 12, marginTop: 20 }}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}