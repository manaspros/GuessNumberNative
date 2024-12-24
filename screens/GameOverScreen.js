import {
  StyleSheet,
  Image,
  View,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Color from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/image/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number
          <Text style={styles.highlight}> {userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Play Again</PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const deviseWidth = Dimensions.get("window").width;

export default GameOverScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviseWidth < 380 ? 150 : 300,
    // height: deviseWidth < 380 ? 150 : 300,
    // borderRadius: deviseWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Color.accent500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    color: Color.primary800,
    fontFamily: "open-sans-bold",
  },
});
