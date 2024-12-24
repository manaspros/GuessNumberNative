import { Text, StyleSheet } from "react-native";
import Color from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: Color.primary800,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ddb52f",
    marginTop: 20,
    padding: 24,
    maxWidth: "80%",
    width: 300,
  },
});
