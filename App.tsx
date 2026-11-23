import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import MovieDiscovery from "./components/MovieDiscovery";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.logo}>
          CINE<Text style={styles.accent}>VAULT</Text>
        </Text>
        <Text style={styles.subtitle}>Your personal movie universe</Text>

        <TextInput
          style={styles.search}
          placeholder="Search for a movie..."
          placeholderTextColor="#A5A7BE"
          value={search}
          onChangeText={setSearch}
        />

        <View style={styles.featured}>
          <Text style={styles.label}>FEATURED PREMIERE</Text>
          <Text style={styles.poster}>🚀</Text>
          <Text style={styles.headline}>Beyond Orion</Text>
          <Text style={styles.description}>
            An extraordinary journey beyond the stars.
          </Text>
          <Text style={styles.rating}>Sci-Fi • ★ 9.1</Text>
        </View>

        <MovieDiscovery search={search} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0F0E1F",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight ?? 24 : 40,
  },
  content: { padding: 20, paddingBottom: 60 },
  logo: { fontSize: 32, fontWeight: "800", color: "#fff", letterSpacing: 2 },
  accent: { color: "#8B7BFF" },
  subtitle: { color: "#A5A7BE", marginBottom: 16 },
  search: {
    backgroundColor: "#1E1D3A",
    color: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  featured: {
    backgroundColor: "#4A3BA8",
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  label: { color: "#D5CCFF", fontSize: 12, fontWeight: "700", letterSpacing: 1 },
  poster: { fontSize: 64, textAlign: "center", marginVertical: 12 },
  headline: { color: "#fff", fontSize: 26, fontWeight: "800" },
  description: { color: "#E0DCFF", marginTop: 6 },
  rating: { color: "#FFD36B", marginTop: 10, fontWeight: "600" },
});