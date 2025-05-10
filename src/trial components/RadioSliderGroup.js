import React, { useState } from 'react';

const RadioSliderGroup = () => {
  // State to track the selected radio button and slider values
  const [selectedOption, setSelectedOption] = useState(null);
  const [sliderValues, setSliderValues] = useState([50, 50, 50, 50]);

  // Handle radio button selection
  const handleRadioChange = (index) => {
    setSelectedOption(index);
  };

  // Handle slider value change
  const handleSliderChange = (index, value) => {
    const newSliderValues = [...sliderValues];
    newSliderValues[index] = value;
    setSliderValues(newSliderValues);
  };

  // Handle button click to read values
  const handleButtonClick = () => {
    if (selectedOption !== null) {
      alert(`Selected Option: ${selectedOption + 1}, Slider Value: ${sliderValues[selectedOption]}`);
    } else {
      alert('Please select an option first');
    }
  };

  return (
    <div>
      <h2>Radio Button with Slider Groups</h2>
      
      {/* Create 4 radio-slider pairs */}
      {[1, 2, 3, 4].map((item, index) => (
        <div key={index} style={{ margin: '20px 0' }}>
          <label>
            <input
              type="radio"
              name="optionGroup"
              checked={selectedOption === index}
              onChange={() => handleRadioChange(index)}
            />
            Option {item}
          </label>
          
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValues[index]}
            onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
            style={{ width: '200px', margin: '0 10px' }}
          />
          
          <span>{sliderValues[index]}</span>
        </div>
      ))}
      
      <button 
        onClick={handleButtonClick}
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Read Selected Values
      </button>
    </div>
  );
};

export default RadioSliderGroup;