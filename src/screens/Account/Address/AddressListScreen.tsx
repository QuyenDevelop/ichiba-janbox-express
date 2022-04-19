/* eslint-disable react-native/no-inline-styles */
import { customerApi } from "@api";
import { ConfirmDialog, Header } from "@components";
import { SCREENS } from "@configs";
import { Alert, ScreenUtils } from "@helpers";
import { useAppDispatch, useAppSelector, useStatusBar } from "@hooks";
import { Address } from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { setAddressSelectedId } from "@redux";
import { Flatlist, Icon, RadioButton, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IRootState } from "../../../redux/store";
import EditAddressModal from "./EditAddressModal/EditAddressModal";
import styles from "./styles";

interface Props {}

export const AddressListScreen: FunctionComponent<Props> = () => {
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [data, setData] = useState<Address[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  const selectedAddressId = useAppSelector(
    (state: IRootState) => state.user.selectedAddressId,
  );
  const [idAddress, setIdAddress] = useState<number>();
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [isShowEditAddress, setIsShowEditAddress] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getData();
  }, [isEdited]);

  const getData = () => {
    customerApi
      .getListAddress()
      ?.then(res => {
        const defaultAddress = res?.data?.find(address => address.active);
        if (defaultAddress) {
          const listAddRess = res?.data.filter(
            address => address.id !== defaultAddress.id,
          );
          listAddRess?.unshift(defaultAddress);
          setData(listAddRess);
        } else {
          setData(res?.data || []);
        }
        if (!selectedAddressId) {
          const id = res?.data?.find(address => address.active)?.id;
          dispatch(setAddressSelectedId(id ? id : 0));
        }
      })
      .finally(() => setIsLoading(false));
  };

  const onDelete = () => {
    customerApi
      .deleteAddress(idAddress!)
      ?.then((response: any) => {
        if (response.status) {
          Alert.success(response.message[0], true);
          getData();
        }
      })
      .finally(() => {
        setIsShowConfirm(false);
        setIdAddress(undefined);
      });
  };

  const setDefault = (id: number) => {
    customerApi.setDefaultAddress(id)?.then(() => {
      let newData = data && [...data];
      newData?.map(address => {
        if (address.active) {
          address.active = false;
        }
        if (address?.id === id) {
          address.active = true;
        }
        return address;
      });
      setData(newData);
    });
  };

  const renderItem = ({ item }: { item: Address; index: number }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setAddressSelectedId(item?.id));
        }}
        style={[
          styles.item,
          item?.id === selectedAddressId && {
            backgroundColor: Themes.colors.colGray10,
          },
        ]}
      >
        <RadioButton
          checked={item?.id === selectedAddressId}
          onChange={() => {
            dispatch(setAddressSelectedId(item?.id));
          }}
        />
        <View
          style={{
            marginLeft: ScreenUtils.scale(13),
          }}
        >
          <View style={styles.flex}>
            <Text style={styles.name}>{item?.name}</Text>
            {item?.active ? (
              <>
                <Icon
                  name={"ic_check-circle"}
                  size={Metrics.icons.smallSmall}
                  color={Themes.colors.success60}
                  styles={{ marginLeft: ScreenUtils.scale(8) }}
                />
                <Text style={styles.default}>{translate("label.default")}</Text>
              </>
            ) : (
              <TouchableOpacity onPress={() => setDefault(item.id)}>
                <Text style={styles.setDefault}>
                  {translate("button.setDefault")}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.content}>{`${item?.address}, ${
            item?.ward || ""
          }, ${item?.district || ""}, ${item?.province || ""}, ${
            item?.postalCode || ""
          }`}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: ScreenUtils.scale(8),
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[styles.phone]}>{item?.phone}</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{ marginRight: ScreenUtils.scale(16) }}
                onPress={() => {
                  setIsEdited(false);
                  setIsShowEditAddress(true);
                  item.id > 0 && setIdAddress(item.id);
                }}
              >
                <Text style={[styles.phone, { color: Themes.colors.blue008 }]}>
                  {translate("button.edit")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginRight: ScreenUtils.scale(5) }}
                onPress={() => {
                  setIsShowConfirm(true);
                  item.id > 0 && setIdAddress(item.id);
                }}
              >
                <Text style={[styles.phone, { color: Themes.colors.blue008 }]}>
                  {translate("button.delete")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={translate("label.addressList")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <View style={styles.childContainer}>
        <Flatlist
          data={data}
          renderItem={renderItem}
          isLoading={isLoading}
          disableRefresh
          disableLoadMore
          ListFooterComponent={
            <TouchableOpacity
              style={styles.add}
              onPress={() =>
                navigation.navigate(SCREENS.ACCOUNT_STACK, {
                  screen: SCREENS.ADD_ADDRESS_SCREEN,
                })
              }
            >
              <Icon
                name={"ic_plus"}
                size={Metrics.icons.smallSmall}
                color={Themes.colors.coolGray60}
              />
              <Text style={styles.addText}>
                {translate("button.addAddress")}
              </Text>
            </TouchableOpacity>
          }
        />
      </View>
      <ConfirmDialog
        message={translate("button.deleteAddress")}
        isVisible={isShowConfirm}
        onDismiss={() => setIsShowConfirm(false)}
        onDeclinePress={() => {
          setIsShowConfirm(false);
          setIdAddress(undefined);
        }}
        onAcceptPress={onDelete}
        acceptText={translate("button.confirm")}
      />
      {isShowEditAddress && (
        <EditAddressModal
          isShowModal={isShowEditAddress}
          onCloseModal={() => {
            setIsShowEditAddress(false);
          }}
          id={idAddress!}
          setEdited={(pre: any) => setIsEdited(pre)}
        />
      )}
    </View>
  );
};
