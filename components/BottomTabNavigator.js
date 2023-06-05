import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import TransactionScreen from '../screens/Transaction';
import SearchScreen from "../screens/Search";


const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon:({focused, color, size})=>{
                            if(route.name === "Transação"){
                                iconName = "book";
                            }else if(route.name === "Pesquisa"){
                                incoName = "search";
                            }
                            return(
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: "#FFFFFF",
                        inactiveTintColor: "black",
                        style: {
                            height: 200,
                            borderTopWidth: 0,
                            backgroundColor: "#5653d4"
                        },
                        labelStyle: {
                          fontSize: 20,
                          fontFamily: "Rajdhani_600SemiBold"
                        },
                        labelPosition: "beside-icon",
                        tabStyle: {
                         // marginTop: 5,
                         // marginLeft: 2,
                          //marginRight: 2,
                         // borderRadius: 15,
                          borderWidth: 2,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#5653d4"
                        }
                    }}
                >
                    
                    <Tab.Screen name="Transação" component={TransactionScreen} />
                    <Tab.Screen name="Pesquisa" component={SearchScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
   
    
}