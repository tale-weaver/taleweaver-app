import React, { ChangeEvent, useState } from 'react'
import { Button } from "../ui/button"


interface InputFieldProps {
  label: string;
  isPassword?: boolean;
  onInputChange: (value: string, isValid: boolean) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, isPassword = false, onInputChange }) => {
  const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    const newIsValid = validateInput(newInputValue, label); // 传递标签进行区分
    setIsValid(newIsValid);
    setInputValue(newInputValue);
    onInputChange(newInputValue, newIsValid);
  };

  const validateInput = (value: string, inputLabel: string): boolean => {
    if (inputLabel === 'Credit Card Number') {
      return /^[0-9]{16}$/.test(value); 
    } else if (inputLabel === 'CCV') {
      return /^[0-9]{3}$/.test(value); 
    }
    return true; 
  };

  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        type={isPassword ? "password" : "text"}
        id={label}
        name={label}
        value={inputValue}
        onChange={handleChange}
        required
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      {!isValid && <p style={{ color: 'red' }}>輸入不正確</p>}
    </div>
  );
};

const SubForm: React.FC = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [ccv, setCcv] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);


  const handleCreditCardNumberChange = (value: string, isValid: boolean) => {
    setCreditCardNumber(value);
    updateFormValidity(isValid);
  };

  const handleCcvChange = (value: string, isValid: boolean) => {
    setCcv(value);
    updateFormValidity(isValid);
  };

  const updateFormValidity = (isValid: boolean) => {
    setIsFormValid(isValid);
  };

  const handleSubmit = () => {
    // 按鈕按下去的話
    if (isFormValid) {
      console.log("Credit Card Number:", creditCardNumber);
      console.log("CCV:", ccv);
      alert('訂閱成功！');
      window.location.href="."
    } else {
      alert('請填寫正確資料！');
    }
  };

  return (
    <div>
      <InputField label="Credit Card Number" onInputChange={handleCreditCardNumberChange} />
      <InputField label="CCV" isPassword onInputChange={handleCcvChange} />
      <br />

      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default SubForm;
