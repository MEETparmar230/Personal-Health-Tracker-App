import AsyncStorage from '@react-native-async-storage/async-storage';


const KEY = 'activities';


export const saveActivity = async (activity) => {
    const data = await AsyncStorage.getItem(KEY);
    const arr = data ? JSON.parse(data) : [];
    activity.type = activity.type.toLowerCase();
    arr.push(activity);
    await AsyncStorage.setItem(KEY, JSON.stringify(arr));
};


export const getActivities = async () => {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
};


export const getActivitiesLast24Hours = async () => {
    const all = await getActivities();
    const now = Date.now();
    return all.filter(
        (a) => now - new Date(a.time).getTime() <= 24 * 60 * 60 * 1000
    );
};


export const getLast7Days = async () => {
    const all = await getActivities();
    const now = Date.now();
    return all.filter(
        (a) => now - new Date(a.time).getTime() <= 7 * 24 * 60 * 60 * 1000
    );
};