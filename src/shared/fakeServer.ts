import { Notification, Product } from "@models";
import { Images } from "@themes";

let category = ["All", "Y!Auction", "Mercari", "Y!Shopping", ""];

function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let arrProduct: Array<Product> = [];
for (let i = 1; i < 300; i++) {
  let categories = category[randomIntFromInterval(0, category.length)];
  arrProduct.push({
    id: i,
    brandName: "Amazon",
    imageSource: Images.yourFavoriteItems1,
    timeCountdown: "99d 59m 59s",
    // title: "Apple Watch Series 3 - 38mm GPS/Cellu...",
    title: categories,
    author: "Nobita Xuka...",
    starPoint: 4,
    starCount: 600,
    likeCount: 139,
    primaryPrice: "¥10.000.000",
    promotionPrice: "$10.000.000",
    percentPromotion: "99%",
    calculatedPrice: "$10.000.000",
    categories: categories,
  });
}

let lastProductItem: Product;

let notifications: Notification[] = [];

let productRecently: Product[] = [];

for (let i = 1; i <= 20; i++) {
  productRecently.push({
    id: i,
    brandName: "Rakuten",
    imageSource: Images.shoe,
    timeCountdown: "99d 59m 59s",
    title:
      "KITCHER 6.8QT Air Fryer, 1700W Toaster Oven & Oilless Cooker with Te...",
    author: "Nobita Xuka...",
    starPoint: 4,
    starCount: 600,
    likeCount: 139,
    primaryPrice: "¥10.000.000",
    promotionPrice: "$10.000.000",
    percentPromotion: "99%",
    calculatedPrice: "$10.000.000",
  });
}

for (let i = 1; i <= 20; i++) {
  notifications.push({
    id: i,
    image: Images.notificationSample,
    title: "Thông báo xuất hàng hóa trở lại của Ezbuy",
    content:
      "Hàng hóa sẽ được thông trở lại dự kiến từ ngày 24/3/2021. \nThời gian gần đây vì những lí do khách quan nên hàng hóa về chậm hơn so với dự kiến khiến khách hàng phải chờ đợi lâu. iChiba thành thật xin lỗi và kính mong Quý khách hàng thông cảm!",
    date: new Date(),
  });
}

export const fakeServer = (qty: number) =>
  new Promise<Array<Product>>(resolve => {
    let newArr: Array<Product> = [];
    const lastItemIndex = arrProduct.indexOf(lastProductItem);
    if (lastItemIndex === arrProduct.length - 1) {
      return resolve([]);
    }

    if (!lastProductItem) {
      newArr = [...arrProduct].slice(0, qty);
      lastProductItem = [...newArr].pop() as Product;
    } else {
      const newIndex = arrProduct.indexOf(lastProductItem) + 1;
      newArr = [...arrProduct].slice(newIndex, qty + newIndex);
      lastProductItem = [...newArr].pop() as Product;
    }
    setTimeout(() => {
      resolve(newArr);
    }, 1000);
  });

export const fakeServerListProduct = () => {};

export const fakeServerFilter = (
  qty: number,
  categories: string | undefined,
) => {
  let arrFilter = arrProduct.filter(x => x?.categories == categories);
  return new Promise(resolve => {
    let newArr: Array<Product | null | undefined> = [];
    newArr = [...arrFilter].slice(0, qty);
    setTimeout(() => {
      resolve(newArr);
    }, 1000);
  });
};

export const fakeServerNotification = (
  skip = 0,
  take = 10,
  isEmpty = false,
) => {
  return new Promise<{ count: number; items: Notification[] }>(resolve => {
    setTimeout(() => {
      if (isEmpty) {
        resolve({ count: 0, items: [] });
        return;
      }
      let newArr: Array<Notification> = [];
      newArr = [...notifications].slice(skip, skip + take);
      resolve({ count: notifications.length, items: newArr });
    }, 1000);
  });
};

export const fakeServerRecentlyViewProduct = (
  skip = 0,
  take = 10,
  isEmpty = false,
) => {
  return new Promise<{ count: number; items: Product[] }>(resolve => {
    setTimeout(() => {
      if (isEmpty) {
        resolve({ count: 0, items: [] });
        return;
      }
      let newArr: Array<Product> = [];
      newArr = [...productRecently].slice(skip, skip + take);
      resolve({ count: notifications.length, items: newArr });
    }, 1000);
  });
};
