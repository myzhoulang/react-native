import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';


export default class Nav extends React.Component {
  constructor(props){
       super(props)
  }
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Text>Apps</Text>
            <Icon name='ios-apps-outline' />
          </Button>
          <Button>
            <Text>Camera</Text>
            <Icon name='ios-camera-outline' />
          </Button>
          <Button active>
            <Text>Navigate</Text>
            <Icon name='ios-compass' />
          </Button>
          <Button>
            <Text>Contact</Text>
            <Icon name='ios-contact-outline' />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}