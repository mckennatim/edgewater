import React, { useState } from 'react';

const IndependentControlGroups = () => {
  // State for each complete control group
  const [controls, setControls] = useState([
    { id: 1, isChecked: false, sliderValue: 50 },
    { id: 2, isChecked: false, sliderValue: 50 },
    { id: 3, isChecked: false, sliderValue: 50 },
    { id: 4, isChecked: false, sliderValue: 50 }
  ]);

  // Toggle checkbox state
  const handleCheckboxChange = (id) => {
    setControls(controls.map(control => 
      control.id === id ? { ...control, isChecked: !control.isChecked } : control
    ));
  };

  // Update slider value
  const handleSliderChange = (id, value) => {
    setControls(controls.map(control => 
      control.id === id ? { ...control, sliderValue: value } : control
    ));
  };

  // Send both values for a specific control
  const handleSendValues = (id) => {
    const control = controls.find(c => c.id === id);
    if (control) {
      console.log(`Control ${id}:`, {
        isChecked: control.isChecked,
        sliderValue: control.sliderValue
      });
      alert(`Sent - Checked: ${control.isChecked}, Slider: ${control.sliderValue}`);
      // Your actual send logic here
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Independent Control Groups</h2>
      <p>Each group operates independently</p>
      
      {controls.map((control) => (
        <div key={control.id} style={{
          margin: '20px 0',
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          backgroundColor: control.isChecked ? '#f8f8f8' : 'white'
        }}>
          {/* Checkbox */}
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={control.isChecked}
              onChange={() => handleCheckboxChange(control.id)}
              style={{ 
                marginRight: '10px',
                width: '18px',
                height: '18px'
              }}
            />
            <span>Option {control.id}</span>
          </label>

          {/* Slider */}
          <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
            <input
              type="range"
              min="0"
              max="100"
              value={control.sliderValue}
              onChange={(e) => handleSliderChange(control.id, parseInt(e.target.value))}
              style={{ width: '200px', marginRight: '10px' }}
            />
            <span>{control.sliderValue}</span>
          </div>

          {/* Send Button */}
          <button
            onClick={() => handleSendValues(control.id)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Send Values (Option {control.id})
          </button>
        </div>
      ))}
    </div>
  );
};

export default IndependentControlGroups;