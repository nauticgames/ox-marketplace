export interface IRpcError {
  code: number;
  data: {
    message: string;
  };
}
