import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Color from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { StatusBar } from "expo-status-bar";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen once fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Keep splash screen visible until fonts are loaded
  }

  function pickedNumberHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setRoundsNumber(numberOfRounds);
  }

  function startNewGameHandler() {
    setGameIsOver(false);
    setUserNumber(null);
    setRoundsNumber(0);
  }

  let screens = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screens = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screens = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Color.primary500, Color.primary800]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/image/1.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={{ opacity: 0.5 }}
        >
          <SafeAreaView style={styles.rootScreen}>{screens}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
