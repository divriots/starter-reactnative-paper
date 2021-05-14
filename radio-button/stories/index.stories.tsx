import React from 'react';;
import { View } from 'react-native';
import { RadioButton } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

const RadioButtonShowcase = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View>
      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
    </View>
  );
}

export const radio_button = () => <RadioButtonShowcase />;