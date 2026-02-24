export interface IDataProperties {
  createdAt?: string;
  updatedAt?: string;
}
export interface IResponse<T> {
  status: 'success' | 'error';
  statuCode: number;
  data?: (T & IDataProperties) | (T & IDataProperties)[];
  meta?: object;
  error?: object;
}
