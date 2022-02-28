export interface IGetStadiumsProps {
  account: string;
  chain: string;
  order: "asc" | "desc";
  page?: number;
}
