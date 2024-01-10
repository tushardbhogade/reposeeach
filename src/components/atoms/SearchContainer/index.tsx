import {
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
  TextInputProps,
} from 'react-native';
import React, {ReactElement, ReactNode} from 'react';
import TextField from '../../atoms/TextField';
import SearchIcon from '../../../assets/icons/SearchIcon';
import {COLOR} from '../../../constants/colors';
import SearchWhiteIcon from '../../../assets/icons/SearchWhiteIcon';
import searchContainerStyle from './style';
type SearchContainerType = {
  rightIcon?: ReactNode | ReactElement;
  LeftIcon?: ReactNode | ReactElement;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onRightIconPress?: () => void;
} & TextInputProps;
const SearchContainer = ({
  rightIcon,
  LeftIcon,
  style,
  inputStyle,
  onRightIconPress = () => {},
  ...rest
}: SearchContainerType) => {
  return (
    <TextField
      placeholder="Search"
      style={[searchContainerStyle.searchContainer, style]}
      inputStyle={[searchContainerStyle.inputStyle, inputStyle]}
      placeholderTextColor={COLOR.PLACEHOLDER_TEXT}
      rightIcon={rightIcon || <SearchIcon />}
      leftIcon={LeftIcon ? <SearchWhiteIcon /> : null}
      onRightIconPress={onRightIconPress}
      {...rest}
    />
  );
};

export default SearchContainer;
