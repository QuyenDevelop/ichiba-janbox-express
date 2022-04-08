export interface Address {
  id: number;
  customerId: number;
  name: string;
  phone: string;
  address: string;
  district: string;
  province: string;
  country: string;
  ward: string;
  countryCode: string;
  active: boolean;
  postalCode: string;
  note?: string;
  taxCode?: string;
}
