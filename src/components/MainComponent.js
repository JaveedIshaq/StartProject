import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Main extends Component{

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Counter App</Text>
        <Text style={styles.welcome}>
              { this.props.counter }
        </Text>
        <Button onPress={()=> this.props.increaseCounter()} title="Increament"/>

        <Button  color="red" onPress={()=> this.props.resetCounter()} title="Reset"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
};

function mapDispatchToProps(dispatch) {
    return {
      increaseCounter : () => dispatch({type: 'INCREAMENT'}),
      resetCounter : () => dispatch({type: 'RESET'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
