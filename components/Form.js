import React, { PropTypes } from 'react';
import Button from './ButtonPrimary';
import TextField from './TextField';
import SelectField from './SelectField';

const options = [
  { value: 'plv_available', text: 'PLV available' },
  { value: 'po_due', text: 'PO due' },
];

const Form = ({
  intervalName,
  startMilestone,
  endMilestone,
  handleChange,
}) => (
  <form>
    <h2 className="test">Create new interval</h2>

    <TextField
      name="intervalName"
      value={intervalName}
      label="Add interval name"
      onChange={handleChange}
    />

    <SelectField
      name="startMilestone"
      label="Select start milestone"
      value={startMilestone}
      options={options}
      onChange={handleChange}
    />

    <SelectField
      name="endMilestone"
      label="Select end milestone"
      value={endMilestone}
      options={options}
      onChange={handleChange}
    />

    <div className="test">
      <Button name="cancel">Cancel</Button>
      <Button name="save" submit>Save interval</Button>
    </div>
  </form>
);

Form.propTypes = {
  intervalName: PropTypes.string,
  startMilestone: PropTypes.string,
  endMilestone: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Form;