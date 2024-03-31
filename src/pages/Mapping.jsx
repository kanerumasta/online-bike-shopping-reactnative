import { View ,Text} from "react-native";

const Header = ()=>{
    return(
        <View className="flex flex-row mt-4 items-center justify-between px-4">
            <Text className="text-xl font-black capitalize">
            Location
            </Text>
            <View className="p-2 rounded-lg bg-[#37b6e9]">
                {/* <Icon name="search"  size={30}/> */}
            </View>
        </View>
    )
}

export default function Mapping(){
    return(
        <View className="h-screen bg-[#232b3a]">
            <Header />
        </View>
    )
}