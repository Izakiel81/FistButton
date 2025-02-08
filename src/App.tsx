/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React  from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Sound from 'react-native-sound';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [isAfter, setIsAfter] = React.useState(false);
  const [sound, setSound] = React.useState<Sound | null>(null);

  const text_color_styles = {
    color: isDarkMode ? Colors.white : Colors.black,
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  Sound.setCategory('Playback');

  const weewee = () => {
    const newSound = new Sound('weewee.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      newSound.setNumberOfLoops(10000);
      setSound(newSound);
      newSound.play(() => newSound.release());
    });
  };

  const stopSound = () => {
    if (sound) {
      sound.stop(() => {
        console.log('Sound stopped');
      });
    }
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.main_container]}>
      <View style={styles.main_container}>
        <Text
          style={[
            text_color_styles,
            !isAfter ? styles.plain_text : styles.danger_text,
          ]}>
          {isAfter && 'Strakhov is going after you!!!'}
        </Text>
        <Button
          color={'red'}
          title={isAfter ? 'Point Strakhov to Mazok' : 'Кнопочка fist'}
          onPress={() => {
            setIsAfter(prev => !prev);
            isAfter ? stopSound() : weewee();
          }}
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
  danger_text: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
