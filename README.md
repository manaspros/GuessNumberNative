
# Guess the Number Game 🎯

A fun React Native game where players aim to guess a randomly generated number in the fewest rounds possible. Built using React Native and powered by Expo.

## Features
- 🎨 **Beautiful UI**: Integrated with `LinearGradient` for stunning gradient backgrounds.
- 🕹️ **Interactive Gameplay**: Tracks rounds and displays the result dynamically.
- 🎭 **Custom Fonts**: Enhanced typography using `expo-font`.
- 🚀 **Smooth Loading**: Seamless splash screen using `expo-splash-screen`.
- 📱 **Icons**: Leveraged `expo/vector-icons` for buttons and UI components.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/guess-the-number-game.git
   cd guess-the-number-game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   expo start
   ```

## Technologies Used
- **React Native**: Core framework for building the app.
- **Expo**: Simplifies development with built-in tools.
- **Expo Libraries**:
  - `expo-linear-gradient`: For creating gradient backgrounds.
  - `expo-font`: For custom font integration.
  - `expo-splash-screen`: Ensures smooth app loading.
  - `expo/vector-icons`: For clean and intuitive icons.

## Screens
1. **Start Screen**: Allows players to enter a number and start the game.
2. **Game Screen**: Displays rounds and hints to help guess the number.
3. **Game Over Screen**: Shows the total rounds taken and allows restarting the game.

## How to Play
1. Start the game by selecting a number.
2. The app will guess a number, and you provide feedback on whether it's too high or too low.
3. The goal is to help the app guess your number in the fewest rounds possible.

## Project Structure
```
.
├── assets/
│   ├── fonts/       # Custom fonts
│   ├── images/      # App images
├── components/      # Reusable UI components
├── screens/         # App screens
├── constants/       # Color and other constants
├── App.js           # Main application file
```
