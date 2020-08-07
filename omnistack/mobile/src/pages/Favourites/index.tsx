import React, {useState} from "react";
import { View } from "react-native";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';
import { Teacher } from '../../components/TeacherItem/index';
import { useFocusEffect } from "@react-navigation/native";

export default function Favourites() {
  const [favourites, setFavourites] = useState([])

  function loadFavourites(){
    AsyncStorage.getItem('favourites').then( response => {
      if(response) {
        const favouritedTeachers = JSON.parse(response)
        setFavourites(favouritedTeachers)
      }
    })
  }

  useFocusEffect(()=> {
    loadFavourites()
  }, [])

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favourites.map((teacher: Teacher ) => <TeacherItem key={teacher.id} teacher={teacher} favourited/>)}
      </ScrollView>
    </View>
  );
}
