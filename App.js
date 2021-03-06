import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Muhammad Ramzan", id: 1 },
    { name: "Muhammad Irfan", id: 2 },
    { name: "Muhammad Farhan", id: 3 },
    { name: "Muhammad Arslan", id: 4 },
    { name: "Muhammad Salman", id: 5 },
    { name: "Muhammad Adnan", id: 6 },
    { name: "Muhammad Haseeb", id: 7 },
    { name: "Waqar Ahmad", id: 8 },
    { name: "Usman Sumra", id: 9 },
    { name: "Faisal Sumra", id: 10 },
    { name: "Ahmad Sumra", id: 11 },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.person}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 40,
  },
  person: {
    backgroundColor: "#007ece",
    marginTop: 20,
    padding: 30,
    color: "#fff",
    fontSize: 24,
    marginHorizontal: 10,
  },
});
