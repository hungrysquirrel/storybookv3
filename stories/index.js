import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, object, boolean, text, select, date, array, color } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import TextField from '../components/TextField';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonWithLeftIcon from '../components/ButtonWithLeftIcon';
import SelectField from '../components/SelectField';
import Form from '../components/Form';



storiesOf('🍗 TextField', module)
  .add('default', () => (
    <TextField name="name" label="a label" />
  ))
  .add('with a value', () => (
    <TextField name="name" label="a label" onChange={action('change')} value="some value" />
  ))
  .add('with a placeholder', () => (
    <TextField name="name" label="a label" placeholder="this is a placeholder" />
  ))
  .add('disabled', () => (
    <TextField name="name" label="a label" disabled />
  ))
  .add('disabled with a value', () => (
    <TextField name="name" label="a label" value="some value" disabled />
  ))
  .add('disabled with a placeholder', () => (
    <TextField name="name" label="a label" placeholder="this is a placeholder" disabled />
  ));



storiesOf('🍖 Button', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('Basic Button', () => {
    const size= select("Size", ["small", "medium", "large"], "medium")
    const intent= select("Intent", ["default", "primary", "danger"], "primary")

    return (
      <div>
      <ButtonPrimary className={`${intent} ${size}`} disabled={boolean('Disabled', false)} name="name">
        {text('Label', 'Button')}
      </ButtonPrimary>
      </div>
    )
  })
  .add('Button w/ Left Icon', () => {
    const size= select("Size", ["small", "medium", "large"], "medium")
    const intent= select("Intent", ["default", "primary", "danger"], "primary") 

    return (
      <div>
      <ButtonWithLeftIcon className={`${intent} ${size}`} disabled={boolean('Disabled', false)} name="name">
        {text('Label', 'Button')}
      </ButtonWithLeftIcon>
      </div>
    )
  })


const options = [
  { value: 'value_a', text: 'Value A' },
  { value: 'value_b', text: 'Value B' },
];
const props = {
  label: 'a label',
  name: 'name',
  options,
  onChange: action('onChange'),
};
storiesOf('🍗 SelectField', module)
  .add('default', () => (
    <SelectField {...props} />
  ))
  .add('with a value', () => (
    <SelectField {...props} value="value_b" />
  ))
  .add('disabled', () => (
    <SelectField {...props} disabled />
  ))
  .add('disabled with a value', () => (
    <SelectField {...props} value="value_b" disabled />
  ));

const myProps = {
  intervalName: '',
  startMilestone: '',
  endMilestone: '',
  handleChange: action('handleChange'),
};
storiesOf('🍤 Form', module)
  .add('default', () => (
    <Form {...myProps} />
  ));