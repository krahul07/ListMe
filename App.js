import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header.js'; 
import Main from './Components/Main.js'; 

export default function App() {
  return (
    <View style={styles.container}>
    <View><Header title="To-Do List"/></View>
     <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex:1,
    backgroundColor: '#fff',
  },
});
