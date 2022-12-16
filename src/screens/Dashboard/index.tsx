import { StyleSheet, Text, View } from "react-native";

export function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
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