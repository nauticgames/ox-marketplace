import StadiumsData from "../components/Stadiums/StadiumsData";

export default function getStadiumDetails(type: number) {
  return StadiumsData.find((item) => item.type === type);
}
