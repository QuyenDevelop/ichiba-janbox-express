/* eslint-disable react-native/no-inline-styles */
import { customerApi } from "@api";
import { Header, ModalBottomRadioButton, Separator } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { Alert, ScreenUtils, Utils } from "@helpers";
import { useBoolean } from "@hooks";
import {
  BaseResponseEntity,
  CustomerCreateWithdrawalTransactionRequest,
} from "@models";
import { DepositStackParamList } from "@navigation";
import { useNavigation } from "@react-navigation/core";
import { RouteProp, useRoute } from "@react-navigation/native";
import { BottomSheetOption, Button, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import { Formik, FormikHelpers } from "formik";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  DeviceEventEmitter,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import { WithdrawSuccessModal } from "./components/WithdrawSuccessModal";
import styles from "./styles";

type WithdrawScreenNavigationRoute = RouteProp<
  DepositStackParamList,
  SCREENS.WITHDRAW_SCREEN
>;
export interface WithdrawScreenParams {
  walletId: string;
}
interface FormWithdraw {
  amount: string;
  bankName: string;
  userName: string;
  accountNumber: string;
  bankBrand: string;
  reason: string;
}

export const WithdrawScreen: FunctionComponent = () => {
  const navigation = useNavigation();
  const route = useRoute<WithdrawScreenNavigationRoute>();
  const { walletId } = route.params;
  const [isShowWithdrawSuccess, showWithdrawSuccess, hideWithdrawSuccess] =
    useBoolean();
  const [amountSuccess, setAmountSuccess] = useState<string>("");
  const [availableBalance, setAvailableBalance] = useState<number>(0);
  const [isShowBankModal, showBankModal, hideBankModal] = useBoolean();
  const [banks, setBanks] = useState<Array<BottomSheetOption>>([]);

  const isUpdate = useRef<boolean>(false);
  const initialValues: FormWithdraw = {
    amount: "",
    bankName: "",
    userName: "",
    accountNumber: "",
    bankBrand: "",
    reason: "",
  };

  const validationSchema = Yup.object({
    amount: Yup.string()
      .required(translate("error.validation.pleaseEnterInfo"))
      .test(
        "available balance",
        translate("error.validation.notEnoughMoney"),
        (val: any) =>
          Utils.convertMoneyTextToNumber(val || "0") <= availableBalance,
      )
      .test(
        "enter info",
        translate("error.validation.pleaseEnterInfo"),
        (val: any) => Utils.convertMoneyTextToNumber(val || "0") > 0,
      )
      .test(
        "enter info",
        translate("error.validation.amountMin"),
        (val: any) => Utils.convertMoneyTextToNumber(val || "0") > 9999,
      ),
    bankName: Yup.string().required(
      translate("error.validation.pleaseSelectBank"),
    ),
    userName: Yup.string().required(
      translate("error.validation.pleaseEnterInfo"),
    ),
    accountNumber: Yup.string().required(
      translate("error.validation.pleaseEnterInfo"),
    ),
    bankBrand: Yup.string().required(
      translate("error.validation.pleaseEnterInfo"),
    ),
    reason: Yup.string().required(
      translate("error.validation.pleaseEnterInfo"),
    ),
  });

  const fetchDataCustomerWallet = () => {
    customerApi.getCustomerWallet()?.then(response => {
      if (response && response.data && response.data.length > 0) {
        setAvailableBalance(
          response.data.find(wallet => wallet.walletId === "VND_WALLET")
            ?.cashAvailable || 0,
        );
      }
    });
  };

  const getListBank = () => {
    customerApi.getListBank()?.then(response => {
      if (response && response.data && response.data.length > 0) {
        const listBank: Array<BottomSheetOption> = response.data.map(bank => {
          return {
            title: bank,
            key: bank,
            onPress: () => {},
          };
        });
        setBanks(listBank);
      }
    });
  };

  useEffect(() => {
    fetchDataCustomerWallet();
    getListBank();
  }, []);

  const onSubmit = (
    values: FormWithdraw,
    formikActions: FormikHelpers<FormWithdraw>,
  ) => {
    const request: CustomerCreateWithdrawalTransactionRequest = {
      amount: Utils.convertMoneyTextToNumber(values.amount),
      walletId: walletId,
      paymentMethod: "",
      bankName: values.bankName,
      bankNumber: values.accountNumber,
      description: values.reason,
      accountHolder: values.userName,
      bankBrand: values.bankBrand,
    };

    customerApi
      .customerCreateWithdrawalTransaction(request)
      ?.then((response: BaseResponseEntity<null>) => {
        if (response.status) {
          isUpdate.current = true;
          formikActions.setSubmitting(false);
          setAmountSuccess(values.amount);
          formikActions.resetForm();
          fetchDataCustomerWallet();
          showWithdrawSuccess();
          DeviceEventEmitter.emit(CONSTANT.RELOAD_ACTION.RELOAD_TRANSACTION);
        } else {
          switch (response.errorCodeApi) {
            case CONSTANT.ERROR.ACCOUNT_ID_NOT_ALLOW_EMPTY:
            case CONSTANT.ERROR.ACCOUNT_ID_NOT_ALLOW_NULL:
              Alert.error("error.accountInvalid");
              break;
            case CONSTANT.ERROR.WALLET_ID_NOT_ALLOW_EMPTY:
            case CONSTANT.ERROR.WALLET_ID_NOT_ALLOW_NULL:
              Alert.error("error.walletInvalid");
              break;
            case CONSTANT.ERROR.WALLET_ID_NOT_FOUND:
              Alert.error("error.walletNotFound");
              break;
            case CONSTANT.ERROR.AMOUNT_INVALID:
              Alert.error("error.amountInvalid");
              break;
            default:
              Alert.error("error.errorServer");
              break;
          }
        }
      })
      .catch(() => {
        Alert.error("error.errorServer");
      });
  };

  const goBack = () => {
    if (isUpdate.current) {
      DeviceEventEmitter.emit(CONSTANT.RELOAD_ACTION.RELOAD_WALLET);
    }
    navigation.goBack();
  };

  return (
    <View style={[styles.container]}>
      <Header
        title={translate("labelWithdraw")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(1)} />
      <KeyboardAvoidingView
        enabled={Platform.OS === "ios"}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.balanceView}>
            <Text style={styles.normalText16}>
              {translate("labelAvailableBalance")}
            </Text>
            <Text style={styles.balanceText}>
              {Utils.formatMoneyCurrency(availableBalance, "VND")}
            </Text>
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <View style={styles.form}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputTitle}>
                    {translate("labelEnterMount")}
                  </Text>
                  <View style={styles.selectInput}>
                    <Text
                      style={[
                        styles.inputTitle,
                        { marginRight: ScreenUtils.scale(8) },
                      ]}
                    >
                      ₫
                    </Text>
                    <TextInput
                      onChangeText={text => {
                        handleChange("amount")(Utils.onChangeFormatText(text));
                      }}
                      onBlur={handleBlur("amount")}
                      value={values.amount}
                      autoFocus
                      placeholder={translate("labelEnterMount")}
                      style={styles.input}
                      keyboardType="number-pad"
                      contextMenuHidden={true}
                      placeholderTextColor={Themes.colors.coolGray60}
                    />
                  </View>
                </View>
                {touched.amount && errors.amount && (
                  <Text style={styles.error}>{errors.amount}</Text>
                )}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputTitle}>
                    {translate("labelBank")}
                  </Text>
                  <TouchableOpacity
                    style={styles.bankBtn}
                    onPress={showBankModal}
                  >
                    <Text style={styles.bankName}>
                      {values.bankName || translate("labelBank")}
                    </Text>
                    <Icon
                      name="ic_arrow_down"
                      size={Metrics.icons.small}
                      color={Themes.colors.coolGray60}
                    />
                  </TouchableOpacity>
                </View>
                {touched.bankName && errors.bankName && (
                  <Text style={styles.error}>{errors.bankName}</Text>
                )}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputTitle}>
                    {translate("labelAccountHolder")}
                  </Text>
                  <TextInput
                    onChangeText={handleChange("userName")}
                    onBlur={handleBlur("userName")}
                    value={values.userName}
                    placeholder={translate("labelAccountHolder")}
                    style={styles.input}
                    placeholderTextColor={Themes.colors.coolGray60}
                  />
                </View>
                {touched.userName && errors.userName && (
                  <Text style={styles.error}>{errors.userName}</Text>
                )}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputTitle}>
                    {translate("labelAccountNumber")}
                  </Text>
                  <TextInput
                    onChangeText={handleChange("accountNumber")}
                    onBlur={handleBlur("accountNumber")}
                    value={values.accountNumber}
                    placeholder={translate("labelAccountNumber")}
                    style={styles.input}
                    placeholderTextColor={Themes.colors.coolGray60}
                  />
                </View>
                {touched.accountNumber && errors.accountNumber && (
                  <Text style={styles.error}>{errors.accountNumber}</Text>
                )}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputTitle}>
                    {translate("labelBranchBank")}
                  </Text>
                  <TextInput
                    onChangeText={handleChange("bankBrand")}
                    onBlur={handleBlur("bankBrand")}
                    value={values.bankBrand}
                    placeholder={translate("labelBranchBank")}
                    style={styles.input}
                    placeholderTextColor={Themes.colors.coolGray60}
                  />
                </View>
                {touched.bankBrand && errors.bankBrand && (
                  <Text style={styles.error}>{errors.bankBrand}</Text>
                )}
                <View style={styles.inputContainer}>
                  <Text style={styles.inputTitle}>
                    {translate("labelReasonWithdraw")}
                  </Text>
                  <TextInput
                    onChangeText={handleChange("reason")}
                    onBlur={handleBlur("reason")}
                    value={values.reason}
                    placeholder={translate("labelReasonWithdraw")}
                    style={styles.input}
                    placeholderTextColor={Themes.colors.coolGray60}
                  />
                </View>
                {touched.reason && errors.reason && (
                  <Text style={styles.error}>{errors.reason}</Text>
                )}
                <Button
                  title={translate("buttonWithdraw")}
                  onPress={handleSubmit}
                  buttonStyle={{
                    marginBottom: ScreenUtils.scale(20),
                  }}
                  buttonChildStyle={styles.withdrawBtn}
                  isLoading={isSubmitting}
                />
                <ModalBottomRadioButton
                  handleSubmitSearch={(obj: BottomSheetOption) => {
                    handleChange("bankName")(obj.title || "");
                    hideBankModal();
                  }}
                  isTranslated={true}
                  keyActive={values.bankName}
                  contentContainerStyle={{
                    height: 0.9 * ScreenUtils.HEIGHT_SCREEN,
                  }}
                  itemStyle={{ height: ScreenUtils.scale(40) }}
                  titleModal={translate("labelBank")}
                  isShowModal={isShowBankModal}
                  arrOption={banks}
                  onCloseModal={hideBankModal}
                  isSearch={true}
                  titleSearch={translate("labelBank")}
                  // disabledRadioButton={true}
                />
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
      <WithdrawSuccessModal
        isShowModal={isShowWithdrawSuccess}
        closeModal={hideWithdrawSuccess}
        amount={Utils.convertMoneyTextToNumber(amountSuccess)}
        currency="VND"
      />
    </View>
  );
};
