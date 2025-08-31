# React Native Pop Toast

React Native Pop Toast is a small library to show quick, animated toast messages in your app. Easy to use and lightweight.




https://github.com/user-attachments/assets/9ccd060a-fa63-4fab-af87-3c0b72f94703


## Installation


```sh
npm install react-native-pop-toast
```


## Usage

App.tsx

```js

  import { ToastProvider } from 'react-native-pop-toast';

  ...

  <ToastProvider>
    <HomeScreen />
  </ToastProvider>

  ...


```

HomeScreen.tsx

```js
  import { useToast } from 'react-native-pop-toast';

  ...

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
```


## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
