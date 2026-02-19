import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';


export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Bienvenue sur lyceeApp</ThemedText>
        <ThemedText type="subtitle">Exploration des lycées </ThemedText>
      </ThemedView>

      <ThemedView style={styles.menuContainer}>
       
        <TouchableOpacity style={styles.button} 
         onPress={() => router.replace('/lyceesprive')}>
          <ThemedText style={styles.buttonText}>Lycées Privés de Paris</ThemedText>
        </TouchableOpacity>

  
        <TouchableOpacity style={styles.button} 
         onPress={() => router.replace('/statsacademies')}>
          <ThemedText style={styles.buttonText}>Stats des lycées par Académie</ThemedText>
        </TouchableOpacity>

     
        <TouchableOpacity style={styles.button} 
         onPress={() => router.replace('/toplycees')}>
          <ThemedText style={styles.buttonText}>Top Lycées Professionnels</ThemedText>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.button} 
         onPress={() => router.replace('/mailscreteil')}>
          <ThemedText style={styles.buttonText}>Mails Académie de Créteil</ThemedText>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.button} 
         onPress={() => router.replace('/maj2026')}>
          <ThemedText style={styles.buttonText}>Mises à jour 2026</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
    gap: 10,
  },
  menuContainer: {
    gap: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});