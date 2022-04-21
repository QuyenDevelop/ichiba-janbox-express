import { CodeCopySuccess, Header } from "@components";
import { SCREENS } from "@configs";
import { Utils } from "@helpers";
import { DepositTransactionResponse } from "@models";
import { DepositStackParamList } from "@navigation";
import Clipboard from "@react-native-community/clipboard";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { translate } from "@shared";
import React, { FunctionComponent, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { InputBankInfo, ModalSucessPay } from "../Component";
import styles from "../styles";
export interface InfoPayBankRouteParams {
  itemBank: DepositTransactionResponse;
}

type InfoPayBankNavigationRoute = RouteProp<
  DepositStackParamList,
  SCREENS.INFO_PAYMENT_SCREEN
>;

interface Props {}

export const InfoPayBankScreen: FunctionComponent<Props> = () => {
  const route = useRoute<InfoPayBankNavigationRoute>();

  const navigation = useNavigation<StackNavigationProp<any>>();
  const [visible, setVisible] = useState<boolean>(false);
  const { itemBank } = route.params;
  const [isShowCopy, setIsShowCopy] = useState(false);

  // console.log(itemBank);

  const handleConfirm = () => {
    setVisible(true);
  };

  const copyTopClipboard = () => {
    if (itemBank) {
      Clipboard.setString(itemBank.code);
      setIsShowCopy(true);
      setTimeout(() => {
        setIsShowCopy(false);
      }, 2000);
    }
  };

  return (
    <View style={{ ...styles.container }}>
      <Header
        title={translate("labelPaymentInfo")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <ScrollView style={styles.content}>
        {itemBank && itemBank.bankIc ? (
          <InputBankInfo
            title={translate("labelBank")}
            textInput={itemBank.bankIc.bankFullName}
          />
        ) : null}
        {itemBank && itemBank.bankIc ? (
          <InputBankInfo
            title={translate("labelAccountNumber")}
            textInput={itemBank.bankIc.accountNumber}
          />
        ) : null}
        {itemBank && itemBank.bankIc ? (
          <InputBankInfo
            title={translate("labelAccountHolder")}
            textInput={itemBank.bankIc.accountName}
          />
        ) : null}
        {itemBank && itemBank.bankIc ? (
          <InputBankInfo
            title={translate("labelBranchBank")}
            textInput={itemBank.bankIc.branch}
          />
        ) : null}
        {itemBank && itemBank.bankIc ? (
          <InputBankInfo
            title={translate("placeholder.provinces")}
            textInput={itemBank.bankIc.province}
          />
        ) : null}

        {itemBank ? (
          <InputBankInfo
            title={translate("labelPaymentAmount")}
            textInput={Utils.formatNumber(itemBank.amount)}
            textRight={"VND"}
          />
        ) : null}
        {itemBank ? (
          <InputBankInfo
            onPressRight={() => copyTopClipboard()}
            title={translate("labelTransferContents")}
            textInput={itemBank.code}
            iconRight="copy"
          />
        ) : null}
        <View style={styles.note}>
          <View style={styles.noteLeft}>
            <Text style={styles.notedot}>.</Text>
          </View>
          <Text style={styles.textNotePayBank}>
            {translate("label.note.note")}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonSubMit}
          onPress={() => handleConfirm()}
        >
          <Text style={styles.textSubmit}>
            {translate("labelConfirmInformation")}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <CodeCopySuccess isShowCopy={isShowCopy} />
      <ModalSucessPay
        content={itemBank.contentResult}
        visible={visible}
        handleClose={setVisible}
      />
    </View>
  );
};
