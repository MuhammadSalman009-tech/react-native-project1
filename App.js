import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Salman");
  function updateName() {
    setName("Muhammad Salman");
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text></Text>
      <Button title="Update Name" onPress={updateName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
