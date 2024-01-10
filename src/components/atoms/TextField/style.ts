import {StyleSheet} from 'react-native';
import {COLOR} from '../../../constants/colors';

const TextFieldStyle = StyleSheet.create({
  inputContainer: {
    borderColor: COLOR.DARK_GREY,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  inputStyle: {
    flex: 1,
    padding: 0,
  },
  errStyle: {
    color: COLOR.BACKGROUND_RED,
    marginTop: 8,
    fontSize: 12,
  },
});

export default TextFieldStyle;
