import { Icon } from "react-native-elements"
import MainPage from "./MainPage"
import Zonas from './Zonas';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

function Navegador() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name ="Inicio"
            component={MainPage}
            options={{
                tabBarIcon:({colores, size}) => (
                    <Icon name="heart" type="font-awesome" colores={colores} size={size}/>
                )
            }}/>
            <Tab.Screen 
                name="Zonas" 
                component={Zonas} 
                options={{
                    tabBarIcon:({colores,size}) => (
                <Icon name="map" type="font-awesome" colores={colores} size={size}/>
                    ),
            }}/>
        </Tab.Navigator>
    )
}

export default BarraNav
