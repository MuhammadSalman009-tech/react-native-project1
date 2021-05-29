import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Salman");
  const [age, setAge] = useState(0);
  function updateNameAndAge() {
    setName("Muhammad Salman");
    setAge(22);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="eg.Salman"
        onChangeText={(val) => setName(val)}
      />
      <Text></Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="eg.22"
        onChangeText={(val) => setAge(val)}
      />
      <Text></Text>
      <Text>
        My name is {name} and I am {age}{" "}
      </Text>
      <Text></Text>
      <Button title="Update" onPress={updateNameAndAge} />
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
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    width: 200,
  },
});
