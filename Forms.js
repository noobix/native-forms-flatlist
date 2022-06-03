import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import KeyboardAwareScrollView from '@pietile-native-kit/keyboard-aware-scrollview';
import { StatusBar } from 'expo-status-bar';

class Forms extends React.Component {
    constructor() {
        super();
        this.state={
            username: "",
            email: "",
            password: "",
            passwordagain: ""
        };
    }
    handleSubmit = () => {

    }
    handleNameChange = (text) => {
      this.setState({username: text})
    }
    handleEmailChange = (text) => {
        this.setState({email: text})
    }
    handlePasswordChange = (text) => {
        this.setState({password: text})
    }
    handlePasswordChange2 = (text) => {
        this.setState({passwordagain: text})
    }
    render(){
      return(
        <KeyboardAwareScrollView>
          <SafeAreaView style={styles.container}>
              <View style={styles.form}>
                <Text style= {styles.headerText}>Sign Up</Text>
                <TextInput style={styles.unameTxt} value={this.state.username} onChangeText={this.handleNameChange} placeholder="User Name" />
                <TextInput style={styles.emailTxt} value={this.state.email} keyboardType={'email-address'} onChangeText={this.handleEmailChange} placeholder="Email" />
                <TextInput style={styles.password} value={this.state.password} autoCorrect={false} secureTextEntry={true} onChangeText={this.handlePasswordChange} placeholder="Password" />
                <TextInput style={styles.password} value={this.state.passwordagain} autoCorrect={false} secureTextEntry={true} onChangeText={this.handlePasswordChange2} placeholder="Password again" />
                <TouchableOpacity style={styles.signUpButton} onPress={this.handleSubmit}>
                    <Text style={styles.buttonTxt}>Sign up</Text>
                </TouchableOpacity>
                <Text style={styles.mainTxt}>
                    You already have an account? <Text style={styles.someText}>Log in</Text>
                </Text>
              </View>
              <StatusBar style="auto" />
            </SafeAreaView>
          </KeyboardAwareScrollView>
      )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'rgb(76, 33, 168)',
    fontSize: 35,
    marginHorizontal: 45
  },
  unameTxt: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(105, 70, 180)',
    width: 200,
    height: 30,
    alignSelf: 'center'
  },
  emailTxt: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(105, 70, 180)',
    width: 200,
    height: 30,
    alignSelf: 'center'
  },
  password: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(105, 70, 180)',width: 200,
    height: 30,
    alignSelf: 'center'
  },
  someText: {
    color: 'rgb(120, 79, 190)',
  },
  mainTxt: {
    alignSelf: 'center'
  },
  signUpButton: {
    alignSelf: 'center',
    backgroundColor: 'rgb(93, 49, 177)',
    height: 60,
    width: 150,
    borderRadius: 15
  },
  form: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 70,
    width: 300,
    height: 400,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgb(223, 223, 223)'
  },
  buttonTxt: {
      color: 'rgb(237, 233, 245)',
      alignSelf: 'center',
      paddingVertical: 15,
      fontSize: 20,
      fontWeight: '600'
  }
});
export default Forms

