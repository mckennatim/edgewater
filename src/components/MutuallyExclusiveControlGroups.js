import React, { useState } from 'react';

const MutuallyExclusiveControlGroups = (props) => {
  const {keys,state,transferWidgetData} = props;
  const [controls, setControls] = useState([
    { id: 0, isChecked: false, sliderValue: 3600 },
    { id: 1, isChecked: false, sliderValue: 3600 },
    { id: 2, isChecked: false, sliderValue: 3600 },
    { id: 3, isChecked: false, sliderValue: 3600 }
  ]);

  // When a checkbox is clicked, uncheck all others
  const handleCheckboxChange = (id) => {
    setControls(controls.map(control => ({
      ...control,
      isChecked: control.id === id ? !control.isChecked : false
    })));
  };

  const handleSliderChange = (id, value) => {
    setControls(controls.map(control => 
      control.id === id ? { ...control, sliderValue: value } : control
    ));
  };

  const handleSendValues = (id) => {
    const control = controls.find(c => c.id === id);
    if (control) {
      // alert(`Option ${id}: ${control.isChecked ? "ON" : "OFF"}, Slider: ${control.sliderValue}`);
      transferWidgetData({
        key: keys[control.id], 
        arr: [
          control.isChecked ? 1 : 0, 
          control.sliderValue
        ]
      });
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '600px' ,
      touchAction: 'none',
      }}>
      {controls.map((control, idx) => (
        <div key={control.id} style={{
          margin: '15px 0',
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: control.isChecked ? '#f0f8ff' : 'white'
        }}>
          {/* Checkbox with exclusive selection */}
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={control.isChecked}
              onChange={() => handleCheckboxChange(control.id)}
              style={{ 
                marginRight: '10px',
                width: '18px',
                height: '18px',
                cursor: 'pointer'
              }}
            />
            <span style={{ 
              fontSize: '16px', 
              fontWeight: '500',
              }}>
              {keys[idx]} {state[keys[idx]].darr[1]}
              <span style={{ 
                fontSize: '14px', 
                color: '#666' ,
                backgroundColor: state[keys[idx]].darr[0]==1 ? '#4CAF50' : '#cccccc',
                }}>
                {state[keys[idx]].darr[0]==1 ? ' ON' : ' OFF'}
              </span>

            </span>
          </label>

          {/* Slider */}
          <div style={{ 
            margin: '15px 0', 
            display: 'flex', 
            alignItems: 'center' ,
            touchAction: 'none',
            }}>
            <input
              type="range"
              min="15"
              max="4000"
              value={control.sliderValue}
              onChange={(e) => handleSliderChange(control.id, parseInt(e.target.value))}
              style={{ 
                flex: 1,
                marginRight: '10px',
                cursor: 'pointer'
              }}
            />
            <span style={{ minWidth: '30px', textAlign: 'center' }}>
              {control.sliderValue}
            </span>
          </div>

          {/* Send Button */}
          <button
            onClick={() => handleSendValues(control.id)}
            style={{
              padding: '8px 16px',
              backgroundColor: control.isChecked ? '#4CAF50' : '#cccccc',
              color: control.isChecked ? 'white' : '#666666',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Send Option {control.id} Values
          </button>
        </div>
      ))}
    </div>
  );
};

export default MutuallyExclusiveControlGroups;