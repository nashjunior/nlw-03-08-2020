import React from 'react'
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import giveClassBackgroundImages from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function GiveClasses(){
  const {goBack} = useNavigation()

  function handleNavigateBack(){
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={giveClassBackgroundImages} style={styles.content}>
        <Text style={styles.title}>Quer ser um proffy </Text>
        <Text style={styles.description}>Para comecar, voce precisa se cadastrar como professorna nossa plataforma web</Text>
      </ImageBackground>


      <RectButton style={styles.okButton} onPress={handleNavigateBack}>
        <Text style={styles.textButton}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}