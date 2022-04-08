import { ScreenUtils } from "@helpers";
import { Icon } from "@shared";
import { Metrics, Themes } from "@themes";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface IProps {
  header?: string;
  isShowModal: boolean;
  onCloseModal: Function;
  onModalHide?: () => void;
  children: JSX.Element;
  headerTitle?: string;
  showCloseModal?: boolean;
}

export const BaseBottomSheetRef: ForwardRefRenderFunction<any, IProps> = (
  props,
  ref,
) => {
  const {
    onCloseModal,
    isShowModal,
    onModalHide,
    children,
    headerTitle,
    showCloseModal,
  } = props;
  const [isShowModalState, setIsShowModalState] = useState(isShowModal);
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);

  const hideModal = function () {
    setIsShowModalState(false);
    if (onCloseModal) {
      onCloseModal();
    }
  };

  useEffect(() => {
    setIsShowModalState(isShowModal);
  }, [isShowModal]);

  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      (scrollRef?.current as any)?.scrollTo({ y: 0, animated: true });
    },
  }));

  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      onBackdropPress={() => hideModal()}
      onBackButtonPress={() => hideModal()}
      onSwipeComplete={() => hideModal()}
      onModalHide={onModalHide ? () => onModalHide() : () => {}}
      // swipeDirection="down"
      style={styles.modalContainer}
      isVisible={isShowModalState}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
    >
      <KeyboardAvoidingView behavior="position" enabled>
        <View
          style={{
            maxHeight:
              Metrics.screenHeight -
              insets.top -
              ScreenUtils.scale(Metrics.baseMargin * 20),
          }}
        >
          <View style={styles.headerContainer} />

          <View
            style={[styles.contentContainer, { paddingBottom: insets.bottom }]}
          >
            {headerTitle && (
              <View style={styles.headerView}>
                <Text style={styles.headerTitle}>{headerTitle}</Text>
                {showCloseModal && (
                  <TouchableOpacity onPress={hideModal}>
                    <Icon
                      name="ic_close"
                      size={Metrics.icons.medium}
                      color={Themes.colors.coolGray100}
                    />
                  </TouchableOpacity>
                )}
              </View>
            )}
            <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
              {children}
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export const BaseBottomSheet = forwardRef(BaseBottomSheetRef);
