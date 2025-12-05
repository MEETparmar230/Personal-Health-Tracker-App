import { View, Text, SectionList, RefreshControl } from "react-native";
import { useEffect, useState } from "react";
import { getActivities } from "../utils/storage";
import { groupActivitiesByDate } from "../utils/groupByDate";

export default function HistoryScreen() {
  const [sections, setSections] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const load = async () => {
    const activities = await getActivities();
    const grouped = groupActivitiesByDate(activities);
    setSections(grouped);
  };

  useEffect(() => {
    load();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 10 }}>
        History
      </Text>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderSectionHeader={({ section }) => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 20,
              backgroundColor: "#ddd",
              padding: 8,
              borderRadius: 8,
            }}
          >
            {section.title}
          </Text>
        )}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 14,
              backgroundColor: "#f5f5f5",
              borderRadius: 10,
              marginVertical: 6,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.type.toUpperCase()} - {item.value}
            </Text>
            {item.notes ? (
              <Text style={{ marginTop: 4, color: "#555" }}>{item.notes}</Text>
            ) : null}
            <Text style={{ marginTop: 4, fontSize: 12, color: "#999" }}>
              {new Date(item.time).toLocaleTimeString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
