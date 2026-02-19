import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import lyceesData from '@/assets/data/lycees-donnees-generales-v1.json';

export default function StatsAcademieScreen() {
  
  const statsAcademies = lyceesData.reduce((acc, lycee) => {
    const academie = lycee.academie || "Inconnue";
    acc[academie] = (acc[academie] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  
  const sortedStats = Object.entries(statsAcademies).sort((a, b) => b[1] - a[1]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Répartition par Académie</Text>
        <Text style={styles.subtitle}>
          Nombre total d'académies : {sortedStats.length}
        </Text>
      </View>

      <View style={styles.listContainer}>
        {sortedStats.map(([nomAcademie, total], index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.infoGroup}>
                <Text style={styles.academieLabel}>Académie</Text>
                <Text style={styles.academieName}>{nomAcademie}</Text>
              </View>
              
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeLabel}>Total</Text>
                <Text style={styles.badgeValue}>{total}</Text>
              </View>
            </View>
            
            
            <View style={styles.progressBarBackground}>
               <View 
                 style={[
                   styles.progressBarFill, 
                   { width: `${Math.min((total / sortedStats[0][1]) * 100, 100)}%` }
                 ]} 
               />
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
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 30,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 15,
    color: '#7f8c8d',
    marginTop: 6,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoGroup: {
    flex: 1,
  },
  academieLabel: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#95a5a6',
    letterSpacing: 1,
    fontWeight: '700',
  },
  academieName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginTop: 2,
  },
  badgeContainer: {
    backgroundColor: '#e8f0fe',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    minWidth: 60,
  },
  badgeLabel: {
    fontSize: 9,
    color: '#1a73e8',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  badgeValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1a73e8',
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#f1f3f4',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#34a853',
    borderRadius: 3,
  },
});