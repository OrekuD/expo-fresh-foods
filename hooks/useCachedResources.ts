import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "Acumin-SemiBold": require("../assets/fonts/Acumin-Semibold.otf"),
          "Acumin-ItalicBold": require("../assets/fonts/Acumin-ItalicBold.otf"),
          "Acumin-Regular": require("../assets/fonts/Acumin-Regular.ttf"),
          "Acumin-Bold": require("../assets/fonts/Acumin-Bold.otf"),
          "Acumin-Italic": require("../assets/fonts/Acumin-Italic.otf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
