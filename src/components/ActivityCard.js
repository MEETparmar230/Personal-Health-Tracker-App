import { View, Text } from 'react-native';


export default function ActivityCard({ label, value, unit }) {
    return (
        <View
            style={{
                padding: 16,
                backgroundColor: '#f2f2f2',
                borderRadius: 12,
                marginVertical: 8,
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{label}</Text>
            
            <Text style={{ fontSize: 22, marginTop: 5 }}>
                {value} {unit}
            </Text>
        </View>
    );
}