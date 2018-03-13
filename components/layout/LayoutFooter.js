import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Badge, Icon, StyleProvider } from 'native-base';
import footerTabTheme from './LayoutFooterTheme'
import variable from 'native-base/src/theme/variables/platform';
console.log(variable)

export default class Nav extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <StyleProvider style={footerTabTheme(variable)}>
        <Footer>
          <FooterTab>
            <Button active>
              <Icon name='ios-home' />
              <Text style={styles.footer}>首页</Text>
            </Button>
            <Button>
              <Icon name='ios-options' />
              <Text style={styles.footer}>分类</Text>
            </Button>
            <Button>
              <Icon name='ios-glasses' />
              <Text style={styles.footer}>发现</Text>
            </Button>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name='ios-cart' />
              <Text style={styles.footer}>购物车</Text>
            </Button>
            <Button>
              <Icon name='ios-contact' />
              <Text style={styles.footer}>我的</Text>
            </Button>
          </FooterTab>
        </Footer>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 12
  },
});