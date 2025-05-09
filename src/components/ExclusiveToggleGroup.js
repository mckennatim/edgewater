import React, { useState } from 'react';

const ExclusiveToggleGroup = () => {
  // State tracks which option is selected (null = none selected)
  const [selectedId, setSelectedId] = useState(null);
  // Separate state for slider values
  const [sliderValues, setSliderValues] = useState([50, 50, 50, 50]);

  // Handle selection change
  const handleSelect = (id) => {
    setSelectedId(selectedId === id ? null : id); // Toggle selection
  };

  // Handle slider change
  const handleSliderChange = (index, value) => {
    const newValues = [...sliderValues];
    newValues[index] = value;
    setSliderValues(newValues);
  };

  // Handle button click
  const handleSendValues = (index) => {
    const isOn = selectedId === index;
    alert(`Option ${index + 1}: ${isOn ? 'ON' : 'OFF'}, Value: ${sliderValues[index]}`);
    // Replace with your actual send logic
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Exclusive Toggle Controls</h2>
      <p>Only one can be active at a time</p>
      
      {[0, 1, 2, 3].map((index) => (
        <div key={index} style={{
          margin: '15px 0',
          padding: '15px',
          border: '1px solid #eee',
          borderRadius: '8px',
          backgroundColor: selectedId === index ? '#f8f8f8' : 'white'
        }}>
          {/* Custom checkbox that's actually a radio button */}
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="radio"
              name="exclusiveGroup"
              checked={selectedId === index}
              onChange={() => handleSelect(index)}
              style={{ display: 'none' }} // Hide the default radio
            />
            <div style={{
              width: '24px',
              height: '24px',
              border: '2px solid #555',
              borderRadius: '4px',
              marginRight: '12px',
              backgroundColor: selectedId === index ? '#4CAF50' : 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {selectedId === index && (
                <span style={{ color: 'white', fontWeight: 'bold' }}>✓</span>
              )}
            </div>
            <span style={{ fontSize: '18px' }}>Option {index + 1}</span>
          </label>

          <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValues[index]}
              onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
              style={{ flexGrow: 1, marginRight: '10px' }}
            />
            <span style={{ width: '40px' }}>{sliderValues[index]}</span>
          </div>

          <button
            onClick={() => handleSendValues(index)}
            style={{
              padding: '8px 16px',
              backgroundColor: selectedId === index ? '#4CAF50' : '#e0e0e0',
              color: selectedId === index ? 'white' : '#666',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            disabled={selectedId !== index}
          >
            Send Values
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExclusiveToggleGroup;