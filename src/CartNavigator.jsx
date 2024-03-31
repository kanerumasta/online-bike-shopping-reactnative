import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { View } from "react-native"

const Stack = createNativeStackNavigator()
export default function CartNavigator(){
    return(
       
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="cart-main">
            <Stack.Screen name="cart-main" component={Cart}/>
            <Stack.Screen name="cart-checkout" component={Checkout}/>
        </Stack.Navigator>
     
    )
}