import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Forms from './Forms';
import List from './List'

export default function App() {
  return (
    <View style={styles.container}>
        <Forms />
        {/* <List /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
