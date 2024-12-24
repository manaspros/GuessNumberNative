import { Text, StyleSheet } from "react-native";
import Color from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>; // Use "children" here
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 25,
    fontFamily: "open-sans",
    color: Color.primary800,
  },
});
