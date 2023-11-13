import { StyleProp, TextInputProps, TextStyle } from "react-native";

interface DebounceInputProps extends TextInputProps {
  onValueChange: () => {}
  delayTime?: number
  minCharacterDifference?: number
  styleProps?: StyleProp<TextStyle>
}
export default DebounceInputProps