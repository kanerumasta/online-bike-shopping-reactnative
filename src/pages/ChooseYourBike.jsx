import { createContext, useContext, useState } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
const ActiveContext = createContext()


const Header = ()=>{
    return(
        <View className="flex flex-row mt-4 items-center justify-between px-4">
            <Text className="text-xl font-black capitalize">
            choose your bike
            </Text>
            <View className="p-2 rounded-lg bg-[#37b6e9]">
                <Icon name="search"  size={30}/>
            </View>
        </View>
    )
}

const Menu = ({id,icon})=> {
    const {activeMenu,setActiveMenu} = useContext(ActiveContext)
    return (
    <TouchableOpacity onPress={()=>setActiveMenu(id)} style={{backgroundColor:activeMenu === id?"#37b6e9":"gray"}} className=" p-4 items-center justify-center rounded-lg">
        {icon ? icon : <Text className=" font-bold">All</Text>}
        
    </TouchableOpacity>)
}

const Card = ({type,name,price,image,navigation,im}) => {
    const [isFav, setIsFav] = useState(false)
    return(<TouchableOpacity onPress={()=>navigation&&navigation.navigate("detail",{name:name,image:im})} className="bg-gray-500/80 w-[150px] mt-4 rounded-[15px] pt-6 p-4">
        <TouchableOpacity onPress={()=>setIsFav(!isFav)} className="absolute top-2 right-2">
        <Icon  name="heart-o" color={isFav?"blue":"white"} size={20}/>
        </TouchableOpacity>
        
        {image}
        <Text className="capitalize mt-4 font-bold text-sm text-white/60">{type}</Text>
        <Text className="uppercase text-white text-sm font-black">{name}</Text>
        <Text>{price}</Text>
    </TouchableOpacity>)
}


export default function ChooseYourBike({navigation}){
    const MenuButton = {
        all:"all",
        battery:"battery",
        road:"road",
        mountain:"mountain",
        helmet:"helmet"
    }

    const [activeMenu, setActiveMenu ] = useState(MenuButton.battery)
    return(
        <ActiveContext.Provider value={{activeMenu,setActiveMenu}}>
        <View className="h-screen bg-[#232b3a]">
            <View className="bg-black/30 w-full h-full">
            <View className="bg-[#408beb] h-[700px]  w-[400px] absolute right-0 bottom-0 -translate-x-[-100px] -translate-y-[-100px] rotate-12 rounded-[50px]"></View>
            <Header />
            
            <View className="h-full p-4"> 
                   
            <View style={ {
                    shadowOffset: {
                    width: 30,
                    height: -40,
                    },
                    shadowOpacity:0.5,
                    shadowRadius:70,
                 }} className="p-4 font-black w-full bg-gray-500/80 border-2 border-t-white/20 border-solid border-l-white/20 border-b-black/20 border-r-black/20 rounded-[20px] backdrop-filter blur-3xl">
               <Image source={require('../../public/images/bike1.png')}/>
               <Text className="text-2xl">30% Off</Text>
            </View>
            <View className="flex-row justify-evenly my-4">
            <Menu id={MenuButton.all}  />
            <Menu id={MenuButton.battery} icon={<Image source={require('../../public/icons/battery.png')}/>}/>
            <Menu id={MenuButton.road} icon={<Image source={require('../../public/icons/road.png')}/>}/>
            <Menu id={MenuButton.mountain} icon={<Image source={require('../../public/icons/union.png')}/>}/>
            <Menu id={MenuButton.helmet} icon={<Image source={require('../../public/icons/helmet.png')}/>}/>
           
      


            </View>
            <ScrollView showsVerticalScrollIndicator={false} className="w-full">
                <View className="flex-row w-full flex-wrap pb-32  justify-evenly">
                <Card im={"bike1"} navigation={navigation} type="road bike" name="peu-giot-lr01" price="1999.99" image={<Image className="h-20 w-32" source={require('../../public/images/bike1.png')}/>} />
                <Card im={"helmet"}  navigation={navigation} fav={true} type="road bike" name="peu-giot-lr01" price="1999.99" image={<Image source={require('../../public/images/helmet.png')}/>}/>
                <Card im={"bike1"} navigation={navigation} type="road bike" name="helmet" price="1999.99" image={<Image className="h-20 w-32" source={require('../../public/images/bike1.png')}/>}/>
                <Card im={"helmet"}  navigation={navigation} type="road bike" name="peu-giot-lr01" price="1999.99" image={<Image source={require('../../public/images/helmet.png')}/>}/>
                <Card im={"bike1"} navigation={navigation} type="road bike" name="peu-giot-lr02" price="1999.99" image={<Image className="h-20 w-32" source={require('../../public/images/bike1.png')}/>}/>
                <Card im={"bike1"} navigation={navigation} type="road bike" name="peu-giot-lr02" price="1999.99" image={<Image className="h-20 w-32" source={require('../../public/images/bike1.png')}/>}/>
                </View>
            </ScrollView>
            
            </View>

            </View>
        </View>
        </ActiveContext.Provider>
    )
}