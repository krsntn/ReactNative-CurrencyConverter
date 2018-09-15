import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURERNCY = 'USD';
const TEMP_QUOTE_CURERNCY = 'MYR';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '3.4';
const TEMP_CONVERSION_RATE = 3.441;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {
  static propTypes = {
    nagivation: PropTypes.object,
  }

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  }

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  }

  handleTextChange = (text) => {
    console.log('change text', text);
  }

  handleSwapCurrency = () => {
    console.log('press swap currency');
  }

  handleOptionPress = () => {
    this.props.navigation.navigate('Options', { title: 'Quote Currency' });
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURERNCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURERNCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURERNCY}
            quote={TEMP_QUOTE_CURERNCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default Home;