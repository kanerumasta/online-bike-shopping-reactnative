import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const Header = ({title,navigation})=>{
    return(
        <View className="flex flex-row my-4 items-center justify-between px-4">
            <TouchableOpacity onPress={()=>navigation&&navigation.goBack()} className="p-2 px-3 rounded-lg bg-[#37b6e9]">
           
                <FontAwesome6 name="chevron-left" size={30}/>
         
                </TouchableOpacity>
            <Text className="text-xl font-black capitalize">
            {title}
            </Text>
            
        </View>
    )
}

export default function Detail({route,navigation}){
    const images = {
        bike1: require('../../public/images/bike1.png'),
        bike2: require('../../public/images/bike2.png'),
        bike3: require('../../public/images/bike3.png'),
        helmet: require('../../public/images/helmet.png'),
    }
    const {name,image} = route.params;
    const imag = images[image]
    console.log(imag)
    const [open,setOpen] = useState(false)
    const [menu, setMenu ] = useState("")
    const height = useSharedValue(120)
    const imHeight = useSharedValue(200)
    const imWidth = useSharedValue(350)

    const descriptClick = ()=>{
        !open ? height.value = withSpring(height.value + 220):height.value = withSpring(120)
        !open ? imHeight.value = imHeight.value - 50 : imHeight.value = imHeight.value + 50
        !open ? imWidth.value = imWidth.value - 50 : imWidth.value = imWidth.value + 50
        setOpen(!open);
    }
  
    const specClick = () => {
        !open ? height.value = withSpring(height.value + 200):height.value = withSpring(120)
        !open ? imHeight.value = imHeight.value - 50 : imHeight.value = imHeight.value + 50
        !open ? imWidth.value = imWidth.value - 50 : imWidth.value = imWidth.value + 50
        setOpen(!open);
    }
    return(
        <View className="h-full bg-[#242c3b]">
           

            <View className="h-[800px] w-[300px] absolute bottom-0 right-[-50px] rotate-12 bg-blue-400 rounded-xl">
            
            </View>
            <Header title={name} navigation={navigation}/>
            <Animated.View className="w-screen items-center">
            <Animated.Image style={{width:imWidth, height:imHeight}} className="mt-20" source={imag}/>
            </Animated.View>
            <Animated.View style={{borderTopLeftRadius:30, borderTopRightRadius:30,height:height}} className="bg-[#353f53]  py-8 w-screen absolute bottom-0 left-0">
                <View className="flex-row items-center w-screen justify-evenly ">
                    <TouchableOpacity onPress={descriptClick} className="p-4 w-[150px] justify-center flex items-center rounded-lg bg-black/25"><Text className={open === "description" ? "text-blue-400":"text-white"}>Description</Text></TouchableOpacity>
                    <TouchableOpacity onPress={specClick} className="p-4 w-[150px] justify-center flex items-center rounded-lg bg-black/25"><Text className={open === "specification" ? "text-blue-400":"text-white"}>Specification</Text></TouchableOpacity>
                    </View>

                    {open && 
                <View className="p-4">
                    <Text className="mb-4 text-xl font-black text-white capitalize">{name}</Text>
                    <Text className="leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis consequuntur aliquam possimus excepturi voluptas est error sit explicabo aut.</Text>
                </View>
                }
                {open &&
                <View className="p-4 flex-row items-center px-6 justify-between rounded-[25px] bg-white/10">
                    <Text className="text-blue-500 text-xl">1999.99</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate("checkout")}}  className="bg-blue-500 rounded-xl p-4">
                        <Text className="font-black">Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                }
            </Animated.View>
        </View>
    )
}