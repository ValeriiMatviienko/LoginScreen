import React, {FC, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {emailValidator} from '../helpers/EmailValidation';
import {passwordValidator} from '../helpers/PasswordValidation';

export const LoginScreen: FC = () => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onLogin = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError!});

      console.log('Email:', email.value);
      console.log('Password:', password.value);

      return;
    }
    // Handle network request
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        style={styles.inputView}
        activeOutlineColor="#2a847c"
        placeholder="Email"
        value={email.value}
        onChangeText={email => setEmail({value: email, error: ''})}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Text style={styles.errorMessage}>{email.error}</Text>

      <TextInput
        mode="outlined"
        style={styles.inputView}
        activeOutlineColor="#2a847c"
        placeholder="Password"
        value={password.value}
        onChangeText={password => setPassword({value: password, error: ''})}
        secureTextEntry
      />
      <Text style={styles.errorMessage}>{password.error}</Text>

      <View>
        <View style={styles.buttonStyle}>
          <Button
            disabled={!email.value || !password.value}
            buttonColor="#2a847c"
            mode="contained-tonal"
            onPress={onLogin}>
            Login
          </Button>
        </View>

        <TouchableOpacity>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginBottom: 15,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#5ea074',
  },
  errorMessage: {
    marginBottom: 15,
    fontWeight: '500',
    color: '#ff4c4c',
  },
});
