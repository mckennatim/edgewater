import React, { useState } from 'react';

const ToggleSliderGroup = () => {
  // State for each toggle-slider pair
  const [controls, setControls] = useState([
    { id: 1, isOn: false, sliderValue: 50 },
    { id: 2, isOn: false, sliderValue: 50 },
    { id: 3, isOn: false, sliderValue: 50 },
    { id: 4, isOn: false, sliderValue: 50 }
  ]);

  // Toggle on/off state
  const handleToggle = (id) => {
    setControls(controls.map(control => 
      control.id === id ? { ...control, isOn: !control.isOn } : control
    ));
  };

  // Handle slider change
  const handleSliderChange = (id, value) => {
    setControls(controls.map(control => 
      control.id === id ? { ...control, sliderValue: value } : control
    ));
  };

  // Handle button click to send values
  const handleSendValues = (id) => {
    const control = controls.find(c => c.id === id);
    if (control) {
      console.log(`Sending values - ID: ${id}, On: ${control.isOn}, Value: ${control.sliderValue}`);
      // Replace with your actual send logic
      alert(`Sent - On: ${control.isOn}, Value: ${control.sliderValue}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Toggle with Slider Controls</h2>
      
      {controls.map((control) => (
        <div key={control.id} style={{ 
          margin: '20px 0',
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '5px'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={control.isOn}
              onChange={() => handleToggle(control.id)}
              style={{ marginRight: '10px', transform: 'scale(1.5)' }}
            />
            <span style={{ fontSize: '18px' }}>Control {control.id}</span>
          </label>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="range"
              min="0"
              max="100"
              value={control.sliderValue}
              onChange={(e) => handleSliderChange(control.id, parseInt(e.target.value))}
              style={{ width: '200px', marginRight: '10px' }}
            />
            <span style={{ width: '40px', textAlign: 'center' }}>{control.sliderValue}</span>
          </div>
          
          <button
            onClick={() => handleSendValues(control.id)}
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Send Values
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToggleSliderGroup;