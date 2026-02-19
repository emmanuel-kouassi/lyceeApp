import lyceesData from '@/assets/data/lycees-donnees-generales-v1.json';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TopLyceesProScreen() {

  const lyceesPro = lyceesData.filter(
    (l) => l.nature_uai?.toLowerCase() === "lycée professionnel"
  );


  const compteParAcademie = lyceesPro.reduce((acc, lycee) => {
    const acad = lycee.academie || "Inconnue";
    acc[acad] = (acc[acad] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);


  const topAcademie = Object.entries(compteParAcademie).reduce((prev, current) => {
    return (current[1] > prev[1]) ? current : prev;
  }, ["Aucune", 0]);

  const [nomTop, nombreTop] = topAcademie;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Lycées Professionnels</Text>
        <Text style={styles.subtitle}>Analyse par performance numérique</Text>
      </View>

      <View style={styles.mainCard}>
        <View style={styles.crownContainer}>
          <Text style={styles.crownIcon}>🏆</Text>
        </View>
        <Text style={styles.resultLabel}>Académie n°1 en France :</Text>
        <Text style={styles.resultValue}>{nomTop}</Text>
        <View style={styles.statsBadge}>
          <Text style={styles.statsText}>{nombreTop} Lycées Pros</Text>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Détails de l'analyse</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            • Total de lycées pros analysés : {lyceesPro.length}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            • Critère : Nombre total d'établissements de type "Lycée Professionnel" par académie.
          </Text>
        </View>
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
    backgroundColor: '#3b6cb7',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 5,
  },
  mainCard: {
    margin: 20,
    padding: 30,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3b6cb7',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  crownContainer: {
    marginBottom: 10,
  },
  crownIcon: {
    fontSize: 50,
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
    textTransform: 'uppercase',
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3b6cb7',
    marginVertical: 10,
    textAlign: 'center',
  },
  statsBadge: {
    backgroundColor: '#fff3a0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  statsText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  infoSection: {
    paddingHorizontal: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  card: {
    backgroundColor: '#9bb7d4',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  cardText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
});