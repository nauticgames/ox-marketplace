import Data from "../components/Marketplace/Stadiums/Data";

export default function getStadiumData(type: number) {
  return Data.find((item) => item.type === type);
}
