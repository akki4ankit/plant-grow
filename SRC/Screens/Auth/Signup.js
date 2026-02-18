import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ScrollView,
  Image,
} from 'react-native';
import { CustomInput } from '../../Common/Input';
import CustomText from '../../Common/CustomText';
import fontStyles from '../../Common/fontStyles';

const Signup = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(-50)).current;

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, translateYAnim]);

  return (
    <ImageBackground
      source={require('../../Assets/Images/plant.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Image
          source={require('../../Assets/Images/back.png')}
          style={{ width: 20, height: 20 }}
          tintColor="#fff"
        />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Animated.View
            style={[
              styles.card,
              {
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }],
              },
            ]}
          >
            <CustomText style={styles.title}>Sign Up 🌱</CustomText>
            <CustomInput
              label="Username"
              value={username}
              onChangeText={setUsername}
            />
            <CustomInput
              label="Email or Phone Number"
              value={email}
              onChangeText={setEmail}
            />
            <CustomInput
              label="Password"
              value={password}
              secureTextEntry
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button}>
              <CustomText style={styles.buttonText}>SIGN UP</CustomText>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 55 : 35,
    left: 30,
    zIndex: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(77, 76, 76, 0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.25)', // transparent glass
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },

  title: {
    fontSize: 26,
    textAlign: 'center',
    color: '#8aca6eff',
    ...fontStyles.Montserrat_SemiBold,
    paddingBottom: 14,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#e4dcdcff',
    ...fontStyles.Montserrat_Regular,
  },
  inputContainer: {
    marginBottom: 22,
    paddingTop: 10,
  },
  label: {
    position: 'absolute',
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    zIndex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#c8e6c9',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#2e7d32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    ...fontStyles.Montserrat_SemiBold,
  },
});

export default Signup;
