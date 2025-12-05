import { View, Text, TouchableOpacity } from 'react-native';


export default function Welcome({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text className="bg-red-500 text-2xl" style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
                Welcome to Health Tracker
            </Text>
            <Text style={{ marginVertical: 12, textAlign: 'center', fontSize: 16 }}>
                Track your water, steps, and sleep every day.
            </Text>


            <TouchableOpacity
                style={{ backgroundColor: '#4CAF50', padding: 14, borderRadius: 12, marginTop: 30 }}
                onPress={() => navigation.replace('Dashboard')}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Get Started</Text>
            </TouchableOpacity>

        </View>
        
    );
}