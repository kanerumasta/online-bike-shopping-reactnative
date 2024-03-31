import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cart from "./pages/Cart"
import ChooseYourBike from "./pages/ChooseYourBike"
import Detail from "./pages/Detail"
import Checkout from "./pages/Checkout"

const Stack = createNativeStackNavigator()
export default function BikeNavigator(){
    return(
       <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="pick">
        <Stack.Screen  name="pick" component={ChooseYourBike}/>
        <Stack.Screen  name="detail" component={Detail}/>
        <Stack.Screen  name="checkout" component={Cart}/>
        <Stack.Screen  name="cart-checkout" component={Checkout}/>
       </Stack.Navigator>
    )
}