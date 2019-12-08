
export class CallInfoItem {
  telephone: string;
  name: string;
  year:number;
  month:number;
  day: number;
  callSum:number;
  callDurationSum:number;
}

export class CallInfoRequest {
  telephone: string;
  name: string;
  year:number;
  month:number;
  day: number;
}

/**
 * 基本响应
 */
export class BaseResponse<T> {
  code: string;
  message: string;
  data: T;
}

/**
 * 分页响应
 */
export class PageResponse<T> {
  code: string;
  message: string;
  totalItem:number;
  data: T[];
}

export class PageResponseNone {
  code: string;
  message: string;
  totalItem:number;
  data: [];
}
