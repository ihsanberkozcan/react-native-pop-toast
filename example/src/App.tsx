/* eslint-disable react-native/no-inline-styles */

import { Button, View } from 'react-native';
import { ToastProvider, useToast } from 'react-native-pop-toast';

const HomeScreen = () => {
  const { showToast } = useToast();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <Button
        title="Success"
        onPress={() => showToast('Successful!', 'success')}
      />
      <Button
        title="Error"
        onPress={() => showToast('An error occurred!', 'error')}
      />
      <Button title="Info" onPress={() => showToast('Information message')} />
    </View>
  );
};

export default function App() {
  return (
    <ToastProvider>
      <HomeScreen />
    </ToastProvider>
  );
}
