import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

interface DebounceInputProps extends TextInputProps {
  onValueChange: any
  delayTime?: number
  minCharacterDifference?: number
  styleProps?: StyleProp<TextStyle>
}
export default DebounceInputProps