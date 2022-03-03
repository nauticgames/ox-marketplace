export interface IGetStadiumsProps {
  account: string;
  order?: "asc" | "desc";
  page?: number;
  filters?: null | [];
  limitPerPage?: number;
}
