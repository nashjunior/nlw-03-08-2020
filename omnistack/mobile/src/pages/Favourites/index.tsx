import React from "react";
import { View } from "react-native";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { ScrollView } from "react-native-gesture-handler";

export default function Favourites() {
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
        <TeacherItem />
      </ScrollView>
    </View>
  );
}
