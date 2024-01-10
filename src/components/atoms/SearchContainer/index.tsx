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

import searchContainerStyle from './style';
type SearchContainerType = {
  rightIcon?: ReactNode | ReactElement;
  LeftIcon?: ReactNode | ReactElement;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onRightIconPress?: () => void;
} & TextInputProps;

/*
rightIcon: SvgIcon represent as a RightIcon,
  style: Style for SearchContainer,
  inputStyle: Style for TextInput,
  onRightIconPress : Function triggers when click on Right Icon,
*/

// SearchContainer Component is used to search a text

const SearchContainer = ({
  rightIcon,
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
      onRightIconPress={onRightIconPress}
      {...rest}
    />
  );
};

export default SearchContainer;
