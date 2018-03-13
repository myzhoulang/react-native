import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import LayoutHeader from './components/layout/LayoutHeader';
import LayoutFooter from './components/layout/LayoutFooter';
import {
  Container,
  Header,
  Footer,
  FooterTab,
  Content,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  List,
  ListItem,
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
      <Container style={styles.container}>
        <LayoutHeader />

        <Content style={{flex:1}}>
          <List>
            <ListItem >
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>

            <ListItem >
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>

            <ListItem >
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>

        <LayoutFooter />
      </Container>
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
