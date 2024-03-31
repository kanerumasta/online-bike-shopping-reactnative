import {Text,View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
const Header = ({navigation})=>{
    return(
        <View className="flex flex-row my-4 items-center  px-4">
            <TouchableOpacity onPress={()=>navigation&&navigation.goBack()} className="mr-16 p-2 px-3 rounded-lg bg-[#37b6e9]">
           
                <FontAwesome6 name="chevron-left" size={30}/>
         
                </TouchableOpacity>
            <Text className="text-xl font-black capitalize">
            Checkout
            </Text>
            
        </View>
    )
}

export default function Checkout({navigation}){
    return(
        <View className="h-full p-4 bg-[#242c3b]">
            <Header navigation={navigation}/>
            <View className="rounded-xl h-[300px] bg-white/20 p-4">
                <Text className="text-xl font-black">Shipping</Text>
                <Text className="text-xl font-black">Address</Text>
                
            </View>
        </View>
    )
}