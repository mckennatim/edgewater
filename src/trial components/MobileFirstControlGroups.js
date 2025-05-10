import React, { useState } from 'react';

const MobileFirstControlGroups = () => {
  const [controls, setControls] = useState([
    { id: 1, isChecked: false, sliderValue: 50 },
    { id: 2, isChecked: false, sliderValue: 50 },
    { id: 3, isChecked: false, sliderValue: 50 },
    { id: 4, isChecked: false, sliderValue: 50 }
  ]);

  // Toggle checkbox with mutual exclusion
  const toggleCheckbox = (id) => {
    setControls(controls.map(control => ({
      ...control,
      isChecked: control.id === id ? !control.isChecked : false
    })));
  };

  // Update slider value
  const updateSlider = (id, value) => {
    setControls(controls.map(control => 
      control.id === id ? { ...control, sliderValue: value } : control
    ));
  };

  // Send values for a specific control
  const sendValues = (id) => {
    const control = controls.find(c => c.id === id);
    if (control) {
      console.log(`Control ${id} values:`, {
        active: control.isChecked,
        value: control.sliderValue
      });
      // In a real app, you might use a toast notification instead of alert
      alert(`Sent - Active: ${control.isChecked}, Value: ${control.sliderValue}`);
    }
  };

  // Dynamic slider style function
  const getSliderStyle = (sliderValue) => ({
    width: '100%',
    height: '40px',
    WebkitAppearance: 'none',
    background: `linear-gradient(to right, #4a90e2 0%, #4a90e2 ${sliderValue}%, #e0e0e0 ${sliderValue}%, #e0e0e0 100%)`,
    borderRadius: '20px',
    padding: 0,
    margin: 0,
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: '#ffffff',
      border: '2px solid #4a90e2',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Control Panel</h1>
      <p style={styles.subtitle}>Only one option can be active at a time</p>
      
      {controls.map((control) => (
        <div 
          key={control.id} 
          style={{
            ...styles.controlGroup,
            backgroundColor: control.isChecked ? '#f5f9ff' : '#fff'
          }}
        >
          {/* Checkbox Row - Larger touch target */}
          <div 
            style={styles.checkboxRow}
            onClick={() => toggleCheckbox(control.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleCheckbox(control.id)}
          >
            <input
              type="checkbox"
              id={`control-${control.id}`}
              checked={control.isChecked}
              onChange={() => {}}
              style={styles.checkbox}
              aria-label={`Toggle control ${control.id}`}
            />
            <label 
              htmlFor={`control-${control.id}`} 
              style={styles.checkboxLabel}
            >
              Control {control.id}
            </label>
          </div>

          {/* Slider with mobile-friendly controls */}
          <div style={styles.sliderContainer}>
            <input
              type="range"
              min="0"
              max="100"
              value={control.sliderValue}
              onChange={(e) => updateSlider(control.id, parseInt(e.target.value))}
              style={getSliderStyle(control.sliderValue)}
              aria-label={`Adjust value for control ${control.id}`}
            />
            <div style={styles.sliderValueContainer}>
              <span style={styles.sliderValue}>
                {control.sliderValue}
              </span>
            </div>
          </div>

          {/* Mobile-friendly action button */}
          <button
            onClick={() => sendValues(control.id)}
            style={{
              ...styles.button,
              ...(control.isChecked ? styles.buttonActive : styles.buttonInactive)
            }}
            disabled={!control.isChecked}
            aria-disabled={!control.isChecked}
          >
            <span style={styles.buttonText}>Send Values</span>
            <span style={styles.buttonBadge}>#{control.id}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '16px',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  title: {
    color: '#1a1a1a',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '8px',
    lineHeight: '1.3'
  },
  subtitle: {
    color: '#666',
    fontSize: '16px',
    marginTop: 0,
    marginBottom: '24px',
    lineHeight: '1.5'
  },
  controlGroup: {
    margin: '0 0 16px 0',
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease'
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    padding: '8px 0',
    cursor: 'pointer'
  },
  checkbox: {
    width: '24px',
    height: '24px',
    marginRight: '12px',
    accentColor: '#4a90e2',
    transform: 'scale(1.2)',
    pointerEvents: 'none'
  },
  checkboxLabel: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#1a1a1a',
    flex: 1
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    margin: '16px 0'
  },
  sliderValueContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sliderValue: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#4a90e2',
    minWidth: '40px',
    textAlign: 'center',
    background: '#f0f7ff',
    padding: '4px 8px',
    borderRadius: '6px'
  },
  button: {
    width: '100%',
    padding: '14px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.2s ease'
  },
  buttonActive: {
    backgroundColor: '#4a90e2',
    color: 'white',
    boxShadow: '0 2px 6px rgba(74, 144, 226, 0.3)'
  },
  buttonInactive: {
    backgroundColor: '#f5f5f5',
    color: '#aaa',
    cursor: 'not-allowed'
  },
  buttonText: {
    flex: 1,
    textAlign: 'left'
  },
  buttonBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '14px'
  }
};

export default MobileFirstControlGroups;