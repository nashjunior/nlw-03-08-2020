import React from 'react'
import TeacherList from '../pages/TeacherList/index';
import  {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Favourites from './../pages/Favourites/index';
import { Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function StudyTabs (){
  const {Navigator, Screen} = createBottomTabNavigator()
  return(
    <Navigator
      tabBarOptions={
        {style: {
          elevation: 0,
		      shadowOpacity: 0,
		      height: Platform.OS === 'ios' ? 84 : 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: Platform.OS === 'ios' ? 20 : 0, 
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS==='ios' ? 24: 20
        },
        safeAreaInsets: {
          bottom: 0
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#fafacfc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }
      }
    >
      <Screen name="TeacherList" component={TeacherList} options={ {
        tabBarLabel: 'Proffys',
        tabBarIcon: ({color, size, focused}) => <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5':color}/>
      }}
      />
      <Screen name="Favourites" component={Favourites}
       options={ {
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({color, size, focused}) => <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5':color}/>}}
      />
    </Navigator>
  )
}