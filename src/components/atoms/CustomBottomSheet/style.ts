import {StyleSheet} from 'react-native';
import {COLOR} from '../../../constants/colors';

const CustomBottomSheetStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 27,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    maxHeight: '90%',
  },
  headerView: {flexDirection: 'row'},

  headerChildrenView: {alignItems: 'flex-start', alignSelf: 'center'},
  headerTextView: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -30,
  },
  headerText: {fontSize: 16},
  horizontalLine: {
    height: 0.5,
    backgroundColor: COLOR.DARK_GREY,
    marginTop: 12,
    marginBottom: 26,
  },
});

export default CustomBottomSheetStyle;
