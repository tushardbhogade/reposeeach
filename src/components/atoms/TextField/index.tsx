import React, {ReactNode} from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  Platform,
  ActivityIndicator,
  Text,
} from 'react-native';

import TextFieldStyle from './style';
import {COLOR} from '../../../constants/colors';
export type TextFieldPropType = {
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  textInputLabel?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rightIconText?: string;
  errorMessage?: string | null;
  isValid?: boolean;
  onRightIconPress?: () => void;
  inputStyle?: StyleProp<TextStyle>;
  isRequired?: boolean;
  setRef?: (refObj: any) => void;
  isLoading?: boolean;
} & TextInputProps;

/*
placeholder: String to give placeholder,
  style: Style for TextInput,
  leftIcon: Svg on left side of the TextInput,
  rightIcon: Svg on right side of the TextInput,
  rightIconText: String appears on the ight side of the TextInput,
  errorMessage : String represent a error message,
  isValid : Boolean to check string is valid or not,
  inputStyle : Style for the input,
  onRightIconPress : Function triggers when click on Right Icon,
  setRef : To Set a ref of the TextInput
*/

const TextField = ({
  placeholder,
  style,
  leftIcon,
  rightIcon,
  rightIconText,
  errorMessage = '',
  isValid = true,
  inputStyle,
  onRightIconPress = () => {},
  setRef = () => {},
  isLoading,
  ...rest
}: TextFieldPropType) => {
  return (
    <>
      <View
        style={[
          TextFieldStyle.inputContainer,
          style,
          isValid ? {} : {borderColor: COLOR.TEXT_RED},
        ]}>
        <View style={TextFieldStyle.row}>
          {leftIcon ? <View style={{marginRight: 12}}>{leftIcon}</View> : null}
          <TextInput
            ref={setRef}
            placeholder={placeholder}
            style={[
              TextFieldStyle.inputStyle,
              Platform.OS === 'ios' ? {padding: 8} : {},
              isValid ? {} : {color: COLOR.TEXT_RED},
              inputStyle,
            ]}
            {...rest}
          />
          {isLoading ? <ActivityIndicator /> : null}
          {rightIcon ? (
            <TouchableOpacity
              style={{marginLeft: 8}}
              onPress={onRightIconPress}>
              {rightIcon}
            </TouchableOpacity>
          ) : null}
          {rightIconText ? (
            <TouchableOpacity
              style={{marginLeft: 8}}
              onPress={onRightIconPress}>
              <Text>{rightIconText}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {!isValid && errorMessage ? (
        <Text style={TextFieldStyle.errStyle}>{errorMessage}</Text>
      ) : null}
    </>
  );
};

export default TextField;
