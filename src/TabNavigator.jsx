import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ChooseYourBike from "./pages/ChooseYourBike"
import Detail from "./pages/Detail"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Mapping from "./pages/Mapping"
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import CartNavigator from "./CartNavigator"
import BikeNavigator from "./BikeNavigator"

const BottomTab = createBottomTabNavigator()

export default function TabNavigator(){
    return(
        <BottomTab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false, tabBarStyle:{borderColor:"rgba(0,0,0,0)",paddingBottom:10,height:70,backgroundColor:"#232b3a"}}} >
            <BottomTab.Screen options={{tabBarIcon:({focused})=>(focused?<FontAwesome5Icon color="white" name="bicycle" size={30}/>:<FontAwesomeIcon color="gray" name="bicycle" size={30}/>)}} name="Home" component={BikeNavigator}/>
            
            <BottomTab.Screen options={{tabBarIcon:({focused})=>(focused?<FontAwesome5Icon color="white" name="map" size={30}/>:<FontAwesome5Icon color="gray" name="map" size={30}/>)}} name="Map" component={Mapping}/>
           
            <BottomTab.Screen options={{tabBarIcon:({focused})=>(focused?<FontAwesomeIcon color="white" name="shopping-cart" size={30}/>:<FontAwesomeIcon color="gray" name="shopping-cart" size={30}/>)}} name="Shop" component={CartNavigator}/>
            <BottomTab.Screen options={{tabBarIcon:({focused})=>(focused?<FontAwesome5Icon color="white" name="user" size={30}/>:<FontAwesome5Icon color="gray" name="user" size={30}/>)}} name="Profile" component={Profile}/>
            <BottomTab.Screen options={{tabBarIcon:({focused})=>(focused?<Ionicons color="white" name="document-text" size={30}/>:<Ionicons color="gray"  name="document-text"  size={30}/>)}} name="Document" component={Profile}/>
        </BottomTab.Navigator>
    )
}