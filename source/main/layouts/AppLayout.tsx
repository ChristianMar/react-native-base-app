import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const AppLayout = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>La mia prima app!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
};

registerRootComponent(AppLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
