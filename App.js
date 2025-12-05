import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/components/Welcome';
import Dashboard from './src/components/Dashboard';
import LogActivity from './src/components/LogActivity';
import HistoryView from './src/components/HistoryView';



const Stack = createNativeStackNavigator();


export default function App() {
return (
<NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: true }}>
<Stack.Screen name="Onboarding" component={Welcome} />
<Stack.Screen name="Dashboard" component={Dashboard} />
<Stack.Screen name="LogActivity" component={LogActivity} />
<Stack.Screen name="History" component={HistoryView} />
</Stack.Navigator>
</NavigationContainer>
);
}