/* eslint-disable no-bitwise */
/*eslint no-bitwise: "error"*/
import { CONSTANT } from "@configs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { Platform, StatusBar, StatusBarStyle } from "react-native";

export const Utils = {
  delay: (ms: number) => new Promise(res => setTimeout(res, ms)),
  comparePrice: (minPrice: number, maxPrice: number) => {
    return minPrice < maxPrice;
  },
  storeTokenResponse: async (tokenResponse: any) => {
    Object.keys(tokenResponse).forEach(async t => {
      await AsyncStorage.setItem(t, String(tokenResponse[t]));
    });
  },
  changeStatusBar: (
    style: StatusBarStyle = "light-content",
    backgroundColor: string = "transparent",
  ) => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(backgroundColor);
      StatusBar.setTranslucent(true);
    }
    StatusBar.setBarStyle(style);
  },
  isEqualZero: (value: number) => {
    return value > 0;
  },
  isValidEmail: (email: any) => {
    return (
      email &&
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$/g).test(email)
    );
  },
  isValidPassword: (password: string) => {
    return (
      password &&
      new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/).test(password)
    );
  },
  isValidURL: (value: string) => {
    let res = value.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    );
    return res !== null;
  },

  removeAscent(str: string) {
    if (str === null || str === undefined) {
      return str;
    }
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
  },
  isUTF8(text: string) {
    var regexName = /^[a-zA-Z ]{2,}$/g;
    return regexName.test(Utils.removeAscent(text));
  },

  isNumeric: (value: string | number | null | undefined) => {
    if (!value) {
      return false;
    }

    if (typeof value === "number") {
      return true;
    }

    return /^-?\d+$/.test(value);
  },

  getLocation: (href: string) => {
    let match = href.match(
      /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/,
    );
    return (
      match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7],
      }
    );
  },

  isMatchPassword: (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  },

  isEmpty: (value: string) => {
    return value && value !== "" && value != null;
  },
  isPhone: (value: string | undefined | null) => {
    if (!value) {
      return false;
    }

    const length = value.trim().length;
    return (
      length >= 10 &&
      length <= 18 &&
      new RegExp(
        /^[+]?\d{2,}?[(]?\d{2,}[)]?[-\s.]?\d{2,}?[-\s.]?\d{2,}[-\s.]?\d{0,9}$/im,
      ).test(value)
    );
  },
  date: {
    formatDateTimeGTM9: (time: any) =>
      `${moment(time)
        .utcOffset("+09:00")
        .format("DD/MM/YYYY HH:mm:ss")} (GMT+9)`,
    formatDateTime: (datetime: any) =>
      moment(datetime).format("HH:mm DD/MM/YYYY"),
    formatDate: (datetime: any) => moment(datetime).format("DD/MM/YYYY"),
    formatYYMMDD: (datetime: any) => moment(datetime).format("YYYY-MM-DD"),
    formatYearDate: (datetime: any) => moment(datetime).format("yyyy-MM-dd"),
    formatDay: (datetime: any) => moment(datetime).format("DD"),
    formatMonth: (datetime: any) => moment(datetime).format("MM"),
    formatYear: (datetime: any) => moment(datetime).format("YYYY"),
    formatTime: (datetime: any) => moment(datetime).format("HH:mm:ss"),
    formatTimeA: (datetime: any) =>
      moment(datetime).format("hh:mm A - DD/MM/YYYY"),
    formatTimeAGMT9: (datetime: any) =>
      `${moment(datetime)
        .utcOffset("+09:00")
        .format("hh:mm A - DD/MM/YYYY")} (GMT+9)`,
    convert: (datetime: any, oldFormat: any, newFormat: any) =>
      moment(datetime, oldFormat).format(newFormat),
    parse: (date: any, format: any) => moment(date, format || "DD/MM/YYYY"),
    parse2String: (dateStr: any, format: any) =>
      moment(dateStr).format(format || "DD/MM/YYYY"),
    countingTime: (datetime: any) => {
      moment.locale("vi");
      return moment().diff(datetime);
    },
    diffDate: (datetime: any) => {
      return moment().diff(datetime, "days");
    },
    seconds2MinuteSeconds: (seconds: number) => {
      return moment().startOf("day").seconds(seconds).format("mm:ss");
    },
  },

  onChangeFormatText: (val: string) => {
    val = val.replace("-", "");
    val = val.replace(/,/g, "");
    const x = Number(val);
    return Utils.formatNumber(x.toString());
  },
  round: (num: number, decimalPlaces: number) => {
    let p = Math.pow(10, decimalPlaces);
    let e = Number.EPSILON * num * p;
    return Math.round(num * p + e) / p;
  },
  roundUp: (num: number) => {
    return Math.ceil(num);
  },
  range(length: number) {
    return Array.from({ length: length }, (_, index) => index + 1);
  },
  stripEmptyHtmlTags(html?: string): string | undefined {
    if (!html) {
      return undefined;
    }
    return html.replace(/<[^>]*>?/gm, "");
  },
  formatNumber: (money: string | number | null, replace?: string): string => {
    if (money === null || money === "") {
      return "0";
    }
    let moneyString = "";
    moneyString = money
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, replace ? replace : ",");
    return moneyString;
  },

  getTextOverCount: (quantity: number) => {
    return quantity >= 100 ? "99+" : quantity.toString();
  },
  step_bid: (p: number, t: number) => {
    var step = 10;
    if (p >= 1000 && p < 5000) {
      step = 100;
    }
    if (p >= 5000 && p < 10000) {
      step = 250;
    }
    if (p >= 10000 && p < 20000) {
      step = 500;
    }
    if (p >= 20000) {
      step = 1000;
    }
    if (t === 1) {
      return p + step;
    } else if (p - step < 0) {
      return 0;
    } else {
      return p - step;
    }
  },

  convertMoneyTextToNumber: (money: string) => {
    return Number(money.replace(/\D/g, "")) || 0;
  },
  formatMoneyCurrency: (
    money: number | null | undefined,
    currency: string = "JPY",
    rate: number = 1,
  ): string => {
    const convertValue = (!money || isNaN(money) ? 0 : money) * rate;
    switch (currency) {
      case CONSTANT.CURRENCY.JA:
        return Math.ceil(convertValue).toLocaleString(CONSTANT.LANGUAGES.JA, {
          style: "currency",
          currency: CONSTANT.CURRENCY.JA,
        });
      case CONSTANT.CURRENCY.VND:
        return Math.ceil(convertValue).toLocaleString(CONSTANT.LANGUAGES.EN, {
          style: "currency",
          currency: CONSTANT.CURRENCY.VND,
        });
      case CONSTANT.CURRENCY.USD:
        return Number(convertValue.toFixed(2)).toLocaleString(
          CONSTANT.LANGUAGES.EN,
          {
            style: "currency",
            currency: CONSTANT.CURRENCY.USD,
          },
        );
      case CONSTANT.CURRENCY.CNY:
        return convertValue.toLocaleString(CONSTANT.LANGUAGES.CN, {
          style: "currency",
          currency: CONSTANT.CURRENCY.CNY,
        });
      case CONSTANT.CURRENCY.TWD:
        return convertValue.toLocaleString(CONSTANT.LANGUAGES.TW, {
          style: "currency",
          currency: CONSTANT.CURRENCY.TWD,
        });
      default:
        return convertValue.toLocaleString(CONSTANT.LANGUAGES.EN, {
          style: "currency",
          currency: currency,
        });
    }
  },
  hash32: (str: string, asString = undefined, seed = undefined) => {
    let hVal = !seed ? 0x811c9dc5 : seed;

    for (let i = 0; i < str.length; i++) {
      hVal ^= str.charCodeAt(i);
      hVal +=
        (hVal << 1) + (hVal << 4) + (hVal << 7) + (hVal << 8) + (hVal << 24);
    }

    if (asString) {
      // Convert to 8 digit hex string
      return ("0000000" + (hVal >>> 0).toString(16)).substr(-8);
    }
    return hVal >>> 0;
  },
};
