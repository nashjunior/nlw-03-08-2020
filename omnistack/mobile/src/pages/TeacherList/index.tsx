import React, { useState } from "react";
import { Text, View } from "react-native";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import {
  BorderlessButton,
  RectButton,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import api from "../../services/api";

function TeacherList() {
  const [isfiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState([]);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isfiltersVisible);
  }

  async function handleSubmit() {
    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponiveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isfiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a Materia?"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o dia?"
                  value={week_day}
                  onChangeText={(text) => setWeekDay(week_day)}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o horario?"
                  value={time}
                  onChangeText={(text) => setTime(time)}
                />
              </View>
            </View>
            <RectButton onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem />;
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
