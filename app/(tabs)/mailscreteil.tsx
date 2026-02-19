import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import lyceesData from '@/assets/data/lycees-donnees-generales-v1.json';

export default function MailsLyceesScreen() {
  const lyceesCreteil = lyceesData.filter((item) => item.academie === "Créteil");

  
  const sendEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>@</Text>
        </View>
        <Text style={styles.title}>Annuaire des Mails</Text>
        <Text style={styles.subtitle}>Académie de Créteil</Text>
      </View>

      <View style={styles.listContainer}>
        {lyceesCreteil.map((lycee, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.schoolName}>{lycee.nom_etablissement}</Text>
            
            <View style={styles.infoRow}>
              <Text style={styles.cityText}>📍 {lycee.libelle}</Text>
            </View>

            {lycee.mail ? (
              <TouchableOpacity 
                style={styles.mailButton} 
                onPress={() => sendEmail(lycee.mail)}
              >
                <Text style={styles.mailButtonText}>{lycee.mail}</Text>
              </TouchableOpacity>
            ) : (
              <View style={[styles.mailButton, { backgroundColor: '#ccc' }]}>
                <Text style={styles.mailButtonText}>Email non disponible</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    fontSize: 50,
    color: '#3b6cb7',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: '#fff3a0', 
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#3b6cb7',
    fontWeight: '600',
    marginTop: 5,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    width: '100%',
    backgroundColor: '#9bb7d4', 
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  infoRow: {
    marginBottom: 10,
  },
  cityText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
  mailButton: {
    backgroundColor: '#fff3a0', 
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  mailButtonText: {
    color: '#3b6cb7',
    fontWeight: 'bold',
    fontSize: 13,
  },
});