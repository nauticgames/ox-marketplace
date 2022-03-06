export interface IGetStadiumsProps {
  account: string;
  order?: "asc" | "desc";
  page?: number;
  balance: number;
  filters?: null | [];
  limitPerPage?: number;
}
