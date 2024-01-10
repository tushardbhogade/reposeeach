import {StyleSheet} from 'react-native';
import {COLOR} from '../../../constants/colors';
const searchContainerStyle = StyleSheet.create({
  searchContainer: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 20,
    marginHorizontal: 6,
    paddingRight: 12,
    borderColor: COLOR.WHITE,
    height: 40,
  },
  inputStyle: {paddingHorizontal: 8},
});

export default searchContainerStyle;
