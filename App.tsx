import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function App() {
 return <View style={styles.screen}>
 <Text style={styles.title}>CineVault</Text>
 <Text style={styles.note}>Your movie universe starts here.</Text>
 </View>;
}
const styles = StyleSheet.create({
 screen: { flex: 1, backgroundColor: "#10121D",
 alignItems: "center", justifyContent: "center" },
 title: { color: "white", fontWeight: "bold", fontSize: 30 },
 note: { color: "#B4A6F9", marginTop: 10 },
});