import React from 'react-native';
import window from '../util/window';
import Button from 'apsl-react-native-button';

const {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableHighlight,
} = React;

const { width, height } = window.getDimensions();
const styles = StyleSheet.create({
  signInButton: {
    height: 50,
    width: width-80,
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: '#8cbe5e',
    marginTop: 20,
  },
  registerButton: {
    height: 50,
    width: width-80,
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: '#62a0e7',
    marginBottom: 0
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});

export default class LandingPage extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>
            Logo
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            Find, List, grow your business {'\n'}
            all in one mobile app
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Button onPress={() => this.props.router.slideToSignIn()} style={styles.signInButton} textStyle={styles.buttonText}>
            Sign In
          </Button>
          <Button onPress={() => this.props.router.slideToSignIn()} style={styles.registerButton} textStyle={styles.buttonText}>
            Create Account
          </Button>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            <TouchableHighlight
              onPress={() => this.props.router.replaceWithHome()}>
              <Text>Skip now, I'll sign in later</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
