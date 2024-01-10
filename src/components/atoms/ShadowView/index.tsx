import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import DropShadow from 'react-native-drop-shadow';
import {COLOR} from '../../../constants/colors';

type ShadowViewType = {
  children: ReactNode;
  shadowStyle?: StyleProp<ViewStyle>;
};
const ShadowView = ({children, shadowStyle}: ShadowViewType) => {
  return (
    <DropShadow style={[styles.shadowStyle, shadowStyle]}>
      {children}
    </DropShadow>
  );
};

export default ShadowView;

const styles = StyleSheet.create({
  shadowStyle: {
    shadowColor: COLOR.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.18,
    shadowRadius: 2,

    elevation: 3,
  },
});
