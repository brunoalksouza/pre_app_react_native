import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import HomeRoute from "./src/routes/HomeRoute";


export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <HomeRoute />
    </View>
  );
}