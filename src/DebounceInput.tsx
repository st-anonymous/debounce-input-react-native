import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import DebounceInputProps from './DebounceInputInterface';
import { styles } from './DebounceInputStyle';


const DebounceInput: React.FC<DebounceInputProps> = (props) => {
  const { onValueChange, delayTime = 1000, minCharacterDifference = 1, styleProps, ...textInputProps } = props;
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const checkDifference = (value: string, debouncedValue: string) => {
    let diff: number = value.length - debouncedValue.length
    for (let i = 0; i < debouncedValue.length; i++){
      if (value[i] !== debouncedValue[i]) diff++;
    }
    return diff;
  }

  useEffect(() => {
    if (checkDifference(value, debouncedValue) < minCharacterDifference) return;
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      onValueChange(value);
    }, delayTime)
    return () => {
      clearTimeout(timer);
    }
  }, [value, delayTime])

  const HandleChangeText = (value: string) => {
    setValue(value);
  }
  
  return <TextInput value={value} onChangeText={HandleChangeText} {...textInputProps} style={[styles.searchContainer, styleProps]} />
}

export default React.memo(DebounceInput)