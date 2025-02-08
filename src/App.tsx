/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [isAfter, setIsAfter] = React.useState(false);

  const text_color_styles = {
    color: isDarkMode ? Colors.white : Colors.black,
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.main_container}>
        <Text>{isAfter && "Strakhov is going after you"}</Text>
        <Button
          title={isAfter ? 'Point Strakhov to Mazok' : 'Кнопочка fist'}
          onPress={() => setIsAfter(prev => !prev)}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plain_text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
