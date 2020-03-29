import React from "react";
import { useNavigation,useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import { Image, View, Text, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$${incident.value}`;
  function navigateBack() {
    navigation.goBack();
  }
  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso "${incident.title}" `,
      recipients: [incident.email],
      body: message
    });
  }
  function sendWhatsApp() {
      Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
        <Image source={logoImg} />
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
  <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
        <Text style={styles.incidentProperty}>CASO</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>
        <Text style={styles.incidentProperty}>VALOR</Text>
  <Text style={styles.incidentValue}>{incident.value}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
