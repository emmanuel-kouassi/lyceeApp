import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import lyceesData from '@/assets/data/lycees-donnees-generales-v1.json';

export default function LyceesPriveScreen() {

  const lyceesPrivésParis = lyceesData.filter((item) => {
    return (
      item.statut === "privé" && 
      item.code_postal?.startsWith("75") && 
      item.contrat_etablissement?.toLowerCase().includes("sous contrat")
    );
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lycées Privés de Paris</Text>
        <Text style={styles.subtitle}>
          {lyceesPrivésParis.length} établissements sous contrat 
        </Text>
      </View>

      <View style={styles.listContainer}>
        {lyceesPrivésParis.map((lycee, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.schoolName}>{lycee.nom_etablissement}</Text>
              <Text style={styles.uaiTag}>{lycee["code uai"]}</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.infoLabel}>Adresse :</Text>
              <Text style={styles.infoValue}>
                {lycee.adresse_postale}, {lycee.code_postal} {lycee.libelle} 
              </Text>

              <Text style={styles.infoLabel}>Type :</Text>
              <Text style={styles.infoValue}>{lycee.nature_uai} </Text>

              <Text style={styles.infoLabel}>Contact :</Text>
              <Text style={styles.infoValue}>
                {lycee.telephone ? lycee.telephone : "Non renseigné"} 
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 25,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  listContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Pour Android
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 8,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
    flex: 1,
    marginRight: 10,
  },
  uaiTag: {
    fontSize: 10,
    backgroundColor: '#e1f5fe',
    color: '#0288d1',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: 'bold',
  },
  cardBody: {
    gap: 4,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7f8c8d',
    marginTop: 5,
  },
  infoValue: {
    fontSize: 14,
    color: '#34495e',
  },
});