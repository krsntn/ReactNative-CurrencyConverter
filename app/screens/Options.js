import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StatusBar, Linking } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  }

  handlePressThemes = () => {
    this.props.navigation.navigate('Themes');
  };

  handlePressSite = () => {
    Linking.openURL('https://kanahan.github.io')
      .catch(() => this.props.alertWithType('error', 'Sorry!', "Site can't be opened now."))
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
        />
        <Separator />
        <ListItem
          text="kanahan.github.io"
          onPress={this.handlePressSite}
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default connectAlert(Options);