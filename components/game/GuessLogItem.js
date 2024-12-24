import { Text, View, StyleSheet } from "react-native";
import Color from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listitem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listitem: {
    borderColor: Color.primary500,
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
    borderRadius: 40,
    flexDirection: "row",
    backgroundColor: Color.accent500,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 0 },
  },
  itemText: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});
