import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import SlideButton from "rn-slide-button";



const Header = ()=>{
    return(
        <View className="flex flex-row my-4 items-center justify-between px-4">
            
            <Text className="text-xl font-black capitalize">
            My Shopping Cart
            </Text>
            
        </View>
    )
}
const Counter = () => {
    const [count,setCount ] = useState(1)
    return(
        <View className="rounded-lg p-2 flex-row items-center">
                <TouchableOpacity className="p-3 rounded-lg bg-blue-400" onPress={()=>{setCount(count+1)}}>
                <FontAwesome6 name="plus"/>
                </TouchableOpacity>
            <Text className="mx-2 font-bold text-lg">{count}</Text>
            <TouchableOpacity className="p-3 rounded-lg bg-[#353f54]" onPress={()=>{count>=1 && setCount(count-1)}}>
                <FontAwesome6 name="minus"/>
            </TouchableOpacity>
        </View>
    )
}

const Item = ()=>{
    return(
        <View className="flex-row p-4 w-full items-center border-b-[1px] border-b-white/10 border-solid">
            <View className=" bg-[#475269] mr-3  p-4 items-center justify-center rounded-xl">
                <Image className="w-[100px] h-[60px]" source={require('../../public/images/bike1.png')}/>
            </View>
            <View>
            <Text className="text-lg font-black text-white/90 ">PEGUIT-LR-01</Text>
            <View className="flex-row items-center w-56 justify-between">
                <Text className="text-[#3c9eea] text-lg">1,999.99</Text>
                <Counter />
            </View>
            </View>

        </View>
    )
}

export default function Cart({navigation}){
    const [openBottomSheet, setOpenBottomSheet] = useState(false)
    return(
        <View className="bg-[#242c3b] h-full">
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            </ScrollView>
            <View className="flex-row mt-4 w-[90%] bg-black/40 rounded-xl mx-auto">
                <TextInput className="px-4 w-[72%]" />
                <TouchableOpacity onPress={()=>setOpenBottomSheet(!openBottomSheet)} className="py-4 px-8 bg-blue-400 rounded-xl">
                    <Text>Apply</Text>
                </TouchableOpacity>
            </View>
            {openBottomSheet && 
            <View  className="p-4">
                <Text className="w-full text-center my-3">Your bag qualifies to free shipping</Text>
                <View className="w-full flex-row items-center justify-between">
                    <Text className="text-xl font-bold text-white my-1">Subtotal:</Text>
                    <Text>6,119.99</Text>
                </View>
                <View className="w-full flex-row items-center justify-between">
                    <Text className="text-xl font-bold text-white my-1">Delivery Fee:</Text>
                    <Text>0</Text>
                </View>
                <View className="w-full flex-row items-center justify-between">
                    <Text className="text-xl font-bold text-white my-1">Discount:</Text>
                    <Text>30%</Text>
                </View>
                <View className="w-full flex-row items-center justify-between">
                    <Text className="text-xl font-bold text-white my-1 mt-4">Total:</Text>
                    <Text className="text-xl text-blue-500 font-black">6,119.99</Text>
                </View>
                <View>
                <SlideButton autoReset onReachedToEnd={()=>navigation.navigate("cart-checkout")} title="Checkout"/>
                </View>
            </View>
            }
            
        </View>
    )
}