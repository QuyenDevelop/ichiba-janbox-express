import { BaseResponseEntity } from "@models";
import { BaseApi } from "./baseApi";

class OrderManagementApi extends BaseApi {
  // getListOrder(
  //   query: string,
  //   status: number,
  //   orderType: string,
  //   pageIndex: number = 1,
  //   pageSize: number = 10,
  // ) {
  //   const queryBody = {
  //     Keyword: query,
  //     PageSize: pageSize,
  //     PageIndex: pageIndex,
  //     Status: status,
  //     OrderType: orderType,
  //   };
  //   return this.get<BasePagingResponseEntity<Array<OrderResponse>>>(
  //     "filterorder",
  //     queryBody,
  //   );
  // }

  // getOrderDetail(orderId: number) {
  //   return this.get<BaseResponseEntity<OrderResponse>>(
  //     `getorderdetail/${orderId}`,
  //     {},
  //   );
  // }

  // getInformationCheckoutOrderInfo(orderIds: string[]) {
  //   return this.post("getinformationcheckoutorderinfo", { orderIds }, {});
  // }

  // getAllOrderServices(type: string) {
  //   return this.get<BaseResponseEntity<OrderService[]>>("getallorderservice", {
  //     type: type,
  //   });
  // }

  // createOrder(createOrderRequest: CreateOrderRequest) {
  //   return this.post("createOrder", createOrderRequest, {});
  // }

  // getOrderServiceRequestPhoto() {
  //   return this.get<BaseResponseEntity<OrderService>>(
  //     "getorderservicerequestphoto",
  //     {},
  //   );
  // }

  // orderRequestPhoto(orderIds: number[]) {
  //   return this.put("orderrequestphoto", { orderIds }, {});
  // }

  // updateStatusOrder(ordeId: number, status: number) {
  //   return this.put(
  //     "updatestatusorder",
  //     {
  //       orderId: ordeId,
  //       status: status,
  //     },
  //     {},
  //   );
  // }

  // getOrderBargainForMercari(productId: string) {
  //   return this.get<BaseResponseEntity<OrderResponseBargainMercari>>(
  //     "getorderbargainformerari",
  //     { ProductId: productId },
  //   );
  // }

  // bargainMercari(request: BargainMercariRequest) {
  //   return this.post("bargainnowformercari", request, {});
  // }

  // bargainYahooAuction(request: BargainMercariRequest) {
  //   return this.post("bargainnowforyahooauction", request, {});
  // }

  // updateOrderToPayOrder(request: UpdateOrderToPayOrderRequest) {
  //   return this.post("updateordertopayorder", request, {});
  // }

  // orderCancel(request: OrderCancelRequest) {
  //   return this.post("ordercancel", request, {});
  // }

  getCountOrderAuctionPaymentExpiredDate() {
    return this.get<BaseResponseEntity<number>>(
      "getcountorderauctionpaymentexpireddate",
      {},
    );
  }

  // getOrderAuctionPaymentExpiredDate() {
  //   return this.get<BaseResponseEntity<OrderResponse[]>>(
  //     "getsorderauctionpaymentexpireddate",
  //     {},
  //   );
  // }

  // orderByWalletV2(paymentRequest: PaymentWithOrderRequestV2) {
  //   return this.post("v2/paymultifromwallet", paymentRequest, {});
  // }

  // orderByPaypalV2(paymentRequest: PaymentRequestV2) {
  //   return this.post("v2/paymutilfrompaypal", paymentRequest, {});
  // }
}

export default new OrderManagementApi("order");
