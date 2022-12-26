import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Home />
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </>
  );
}
