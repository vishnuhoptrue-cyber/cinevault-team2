import React, { useState } from "react";
import { View, Text, ScrollView, Pressable,
 StyleSheet } from "react-native";
type Props = { search: string };
const movies = [
 { id: 1, title: "Beyond Orion", genre: "Sci-Fi",
 rating: 9.1, emoji: "", color: "#5544A8" },
 { id: 2, title: "Midnight City", genre: "Thriller",
 rating: 8.7, emoji: "", color: "#285C86" },
 { id: 3, title: "Golden Hour", genre: "Drama",
 rating: 8.4, emoji: "", color: "#A65B35" },
];

export default function MovieDiscovery({ search }: Props) {
 const [favorites, setFavorites] = useState<number[]>([]);
 const visible = movies.filter(m =>
 m.title.toLowerCase().includes(search.toLowerCase()));
 const toggle = (id: number) => setFavorites(current =>
 current.includes(id)
 ? current.filter(x => x !== id)
 : [...current, id]);
 const saved = movies.filter(m => favorites.includes(m.id));
 return (
 <View>
 <Text style={styles.heading}>Trending now</Text>
 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
 {visible.map(movie => (
 <View key={movie.id} style={styles.card}>
 <View style={[styles.poster,
 { backgroundColor: movie.color }]}>
 <Text style={styles.emoji}>{movie.emoji}</Text>
 </View>
 <Text style={styles.title}>{movie.title}</Text>
 <Text style={styles.meta}>{movie.genre} • ★ {movie.rating}</Text>
 <Pressable style={styles.button}
 onPress={() => toggle(movie.id)}>
 <Text style={styles.buttonText}>
 {favorites.includes(movie.id) ? "♥ Saved" : "♡ Save"}
 </Text>
 </Pressable>
 </View>
 ))}
 </ScrollView>
 {visible.length === 0 && <Text style={styles.empty}>
 No matching movies.</Text>}
 <Text style={styles.heading}>My watchlist ({saved.length})</Text>
 {saved.length === 0 && <Text style={styles.empty}>
 Tap Save to build your watchlist.</Text>}
 {saved.map(movie => <Text key={movie.id} style={styles.saved}>
 {movie.emoji} {movie.title}</Text>)}
 </View>
 );
}
const styles = StyleSheet.create({
 heading: { color: "white", fontSize: 20,
 fontWeight: "bold", marginTop: 24, marginBottom: 13 },
 card: { width: 155, marginRight: 13 },
 poster: { height: 164, borderRadius: 17,
 alignItems: "center", justifyContent: "center" },
 emoji: { fontSize: 62 },
 title: { color: "white", fontWeight: "bold",
 fontSize: 15, marginTop: 9 },
 meta: { color: "#BAB9CB", marginTop: 5, fontSize: 12 },
 button: { backgroundColor: "#302B4A", borderRadius: 10,
 alignItems: "center", padding: 10, marginTop: 10 },
 buttonText: { color: "#E9DFFF", fontWeight: "bold" },
 saved: { color: "white", backgroundColor: "#252638",
 padding: 12, borderRadius: 10, marginBottom: 7 },
 empty: { color: "#BAB9CB", marginVertical: 8 },
});