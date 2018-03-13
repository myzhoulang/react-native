import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Badge
} from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false
    }
  }

  render() {
    return (
      <Header style={{height:50}}>
        <Left>
          <Button transparent>
            <Icon name='ios-arrow-back-outline'/>
          </Button>
        </Left>
        <Body>
        <Title>京东商城</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='ios-cart'/>
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
