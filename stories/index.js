import React from 'react'

// Storybook & Storybook Addons
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, number, object, boolean, text, select, date, array, color } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

// Stylesheet convert to Styled Components
import '../css/global.css'
//import '../node_modules/@blueprintjs/core/dist/blueprint.css'

// Requires SCSS Loader to be configured
//import '../node_modules/@blueprintjs/table/src/table.scss'

// Blueprint
import { Intent, Popover, Position, Switch, Tooltip } from '../node_modules/@blueprintjs/core';
import { Cell, Column, Table } from '../node_modules/@blueprintjs/table';


// Load Story Components
import TextField from '../components/TextField';
import ButtonPrimary from '../components/ButtonPrimary';
import Typography from '../components/Typography';
import Color from '../components/Color';
import ButtonWithLeftIcon from '../components/ButtonWithLeftIcon';
import SelectField from '../components/SelectField';
import Form from '../components/Form';
//generation 1: import Tooltip from '../components/Tooltip';
import BpPopover from '../components/BpPopover';
import BpTable from '../components/BpTable';

// Story navigation
storiesOf('Core', module)
  .addDecorator(withKnobs)
  .add('Typography', () => {

    return (
      <div>
        <Typography/>
      </div>
    )
  })
  .add('Color', () => {
    return (
      <div>
        <Color/>
      </div>
    )
  })


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
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


storiesOf('TextField', module)
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
storiesOf('SelectField', module)
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
storiesOf('Form', module)
  .add('default', () => (
    <Form {...myProps} />
  ));

storiesOf('Tooltips', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  //.add('Basic tooltip', () => {
  //const bold = boolean('Bold', false)
  //const selectedColor = color('Color', 'rgba(0,0,0,.7)')
  //const customStyle = object('Style', {
  //  paddingTop: 8,
  //  paddingRight: 16,
  //  paddingBottom: 8,
  //  paddingLeft: 16,
  //  textTransform: 'none',
  //})
//
  //const style = {
  //  ...customStyle,
  //  fontWeight: bold ? 700 : 400,
  //  backgroundColor: selectedColor,
  //}
//
  //return (
  //  <Tooltip styleName={style} tooltipText={text('Label', 'This is a tooltip')} />
  //)

//})

.add('Tooltip (Hover)', () => {
  
  return (
    
      <Tooltip content="I am a very cool tooltip!" position={Position.LEFT} defaultIsOpen="true">
        <ButtonPrimary className="medium" name="name">Hover me</ButtonPrimary>
      </Tooltip>
    
  )
})

// Make a new story group
.add('Table (Hover)', () => {
  const renderCell = (rowIndex: number) => {
    return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
  };

  const renderCell2 = (rowIndex: number) => {
    return <Cell>Item {`${(rowIndex * 10).toFixed(0)}`}</Cell>
  };

  const renderCell3 = (rowIndex: number) => {
    return <Cell>{Math.ceil(Math.random() * 10) + 3}</Cell>
  };

  return (
    
      <Table numRows={10}>
        <Column name="Cost" renderCell={renderCell}/>
        <Column name="Item name" renderCell={renderCell2}/>
        <Column name="Inventory" renderCell={renderCell3}/>
      </Table>
    
  )
})


