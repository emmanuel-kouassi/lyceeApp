import lyceesData from '@/assets/data/lycees-donnees-generales-v1.json';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MajCreteilScreen() {
  
  const lycees2026 = lyceesData.filter((item) => {
    return (
      item.academie === "Créteil" && 
      item.date_maj?.startsWith("2026")
    );
  });

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🔄</Text>
        </View>
        <Text style={styles.title}>Mises à jour 2026</Text>
        <Text style={styles.subtitle}>Académie de Créteil</Text>
      </View>

      <View style={styles.listContainer}>
        {lycees2026.length > 0 ? (
          lycees2026.map((lycee, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.schoolName}>{lycee.nom_etablissement}</Text>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>NEW</Text>
                </View>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>ADRESSE POSTALE</Text>
                <Text style={styles.addressText}>
                  {lycee.adresse_postale}{'\n'}
                  {lycee.code_postal} {lycee.libelle}
                </Text>
              </View>

              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>Date de modification :</Text>
                <Text style={styles.dateValue}>{lycee.date_maj}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>Aucune mise à jour enregistrée pour 2026.</Text>
          </View>
        )}
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
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    fontSize: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: '#fff3a0', 
    paddingHorizontal: 15,
    textAlign: 'center',
    color: '#e67e22', 
  },
  subtitle: {
    fontSize: 16,
    color: '#e67e22',
    fontWeight: '600',
    marginTop: 8,
  },
  listContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fdf7f2', 
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderLeftWidth: 8,
    borderLeftColor: '#e67e22',
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
    marginRight: 10,
  },
  tag: {
    backgroundColor: '#e67e22',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  tagText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 10,
    color: '#bdc3c7',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addressText: {
    fontSize: 14,
    color: '#34495e',
    lineHeight: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 12,
    color: '#95a5a6',
    marginRight: 5,
  },
  dateValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e67e22',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    color: '#95a5a6',
    fontStyle: 'italic',
  },
});