import React, {ReactNode} from 'react';

import {
  View,
  Pressable,
  Modal,
  TouchableOpacity,
  ModalProps,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';

import CustomBottomSheetStyle from './style';
import CrossIcon from '../../../assets/icons/CrossIcon';

type CustomBottomSheetPropType = {
  children?: ReactNode;
  title?: string;
  titleStyle?: object;
  showModal?: boolean;
  onDismiss?: () => void;
  onRequestClose?: () => void;
  hrLineStyle?: StyleProp<ViewStyle>;
  cardStyle?: StyleProp<ViewStyle>;
  showHeader?: boolean;
} & ModalProps;

const CustomBottomSheet = ({
  showModal = false,
  onDismiss = () => {},
  onRequestClose = () => {},
  title,
  titleStyle,
  hrLineStyle,
  cardStyle,
  showHeader = true,
  ...props
}: CustomBottomSheetPropType) => {
  return (
    <Modal
      onRequestClose={() => {
        onDismiss();
        onRequestClose();
      }}
      animationType="slide"
      transparent={true}
      visible={showModal}
      {...props}>
      <Pressable style={CustomBottomSheetStyle.container} onPress={onDismiss}>
        <Pressable style={[CustomBottomSheetStyle.card, cardStyle]}>
          {showHeader ? (
            <>
              <View style={CustomBottomSheetStyle.headerView}>
                <View style={CustomBottomSheetStyle.headerChildrenView}>
                  <TouchableOpacity
                    style={{marginRight: 2}}
                    onPress={onDismiss}>
                    <CrossIcon />
                  </TouchableOpacity>
                </View>
                <View style={CustomBottomSheetStyle.headerTextView}>
                  <Text style={[CustomBottomSheetStyle.headerText, titleStyle]}>
                    {title}
                  </Text>
                </View>
              </View>
              <View
                style={[CustomBottomSheetStyle.horizontalLine, hrLineStyle]}
              />
            </>
          ) : null}
          {props.children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default CustomBottomSheet;
