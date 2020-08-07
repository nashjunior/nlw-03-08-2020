import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import LnadingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import HeartIcon from "../../assets/images/icons/heart.png";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import api from "../../services/api";

function Landing() {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalCOnnections] = useState(0);

  useEffect(() => {
    api
      .get("connections")
      .then((response) => setTotalCOnnections(response.data.total));
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate("GiveClasses");
  }

  function handleNavigateToStudyingPage() {
    navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={LnadingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja Bem Vindo, {"\n"}
        <Text style={styles.titleBold}> O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyingPage}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} Conexoes ja reealizadas{" "}
        <Image source={HeartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
