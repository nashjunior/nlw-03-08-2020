import React, { useState } from "react";
import { Image, Text, View, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import heartIcon from "../../assets/images/icons/heart-outline.png";
import unFavouriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import AsyncStorage from '@react-native-community/async-storage'
import styles from "./styles";
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
  favourited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favourited }) => {
  const [isFavourited, setIsFavourited] = useState(favourited)
  
  async function handleToggleFavourite(){
    const favourites  = await AsyncStorage.getItem('favourites')
    let favouritesArray = []
    if(favourites) {
      favouritesArray= JSON.parse(favourites)
    }
    if(isFavourited){
      const favouriteIndex = favouritesArray.findIndex((teacherItem:Teacher) => teacherItem.id===teacher.id)
      favouritesArray.splice(favouriteIndex, 1)
      setIsFavourited(false)
    }
    else{
      setIsFavourited(true)
    }
    await AsyncStorage.setItem('favourites', JSON.stringify(favouritesArray))
  }

  function handleLinkToWhatsapp(){
    api.post('connections', {
      user_id: teacher.id
    })
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: teacher.avatar,
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preco/Hora {"   "}
          <Text style={styles.priceValue}> R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[isFavourited ? styles.favourited : styles.favouriteButton,]} onPress={handleToggleFavourite}>
            
            {isFavourited ? <Image source={unFavouriteIcon} /> : <Image source={heartIcon} />}
            
          </RectButton>

          <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
