import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import TabNavigator from "./src/TabNavigator"
import { StatusBar } from "react-native"

export default function App () {
  return(
<GestureHandlerRootView>

  <StatusBar backgroundColor={"#0b121f"}/>
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}