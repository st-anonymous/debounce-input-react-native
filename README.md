# debounced-input-react-native

[![Version](https://badge.fury.io/js/debounced-input-react-native.svg)](https://www.npmjs.com/package/debounced-input-react-native)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A custom debounced input component for React Native, allowing you to easily implement debouncing in text inputs.

## Installation

Choose one of the following commands based on your package manager:
#### Using npm
```bash
npm install debounced-input-react-native
```
#### Using yarn
```bash
yarn add debounced-input-react-native
```


## Example

```jsx
import React, { useState } from 'react';
import { DebounceInput } from 'debounced-input-react-native';

const YourComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const OnValueChange = (debouncedValue) => {
    // Your custom logic with the debounced value
    console.log('Debounced value: ', debouncedValue);
    setSearchTerm(debouncedValue);
  };

  return (
    <DebounceInput
      placeholder="Type something..."
      onValueChange={OnValueChange}      // Your callback function to handle the debounced value
      delayTime={500}                   // Optional: Set custom debounce delay in milliseconds (default: 300)
      minCharacterDifference={3}        // Optional: Set minimum character difference to trigger debounce (default: 1)
      styleProps={{                     // Optional: Pass style properties for customization
        // Your custom styles here
      }}
    />
  );
};

export default YourComponent;
```

## Props

- **onValueChange**: *(required)* A callback function that will be called with the debounced value.
- **delayTime**: *(optional)* The delay (in milliseconds) before triggering the debounced action. Default: 1000.
- **minCharacterDifference**: *(optional)* The minimum character difference to trigger the debounced action. Default: 1.
- **styleProps**: *(optional)* Style properties for customizing the appearance of the `DebounceInput`.

## License

This project is licensed under the MIT License.
