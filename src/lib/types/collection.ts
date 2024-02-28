import { EviewType } from './enums';

export interface ICollection {
  id: number;
  type: EviewType;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod: null;
  installmentPrice: null;
  installmentPeriod: null;
  rating: number;
  startDate: null;
  endDate: null;
  viewType: 'TILE';
  createdAt: string;
  items: ICollectionItem[];
  media: any[];
  taggings: any[];
  singleCollections: any[];
}

export interface ICollectionItem {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  uuid: string;
  name: string;
  body: null | string;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey: null | string;
  publication: IPublication;
  prdType: number;
}

export interface IPublication {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  detailEntity: string;
  content?: string;
  offeringType: string;
  rating: number;
  isExistResidual: boolean;
  isAdult: number;
  preface?: string;
  prefaceIconUrl?: string;
  productName: string;
  brandName: string;
  media: Array<{
    seq: number;
    type: string;
    uri: string;
    mimeType: string;
    deviceType: null | string;
  }>;
  isTrial: boolean;
  tagsOnImage: string[];
  tagsOnDesc: string[];
  priceInfo: {
    price: number;
    discountPrice?: number;
    discountRate?: number;
    couponDiscountPrice?: number;
    couponDiscountRate?: number;
  };
  discounts: Array<{
    id: number;
    name: null | string;
    type: string;
    calcMethod: string;
    value: number;
    activeFrom: null | string;
    activeTo: null | string;
    qty: number;
    remain: null | number;
  }>;
  applyCoupon: boolean;
}
