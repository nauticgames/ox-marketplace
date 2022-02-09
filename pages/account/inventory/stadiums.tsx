import { useEffect } from "react";
import AsidePanel from "../../../components/AsidePanel/AsidePanel";
import Inventory from "../../../components/Inventory/Inventory";
import Main from "../../../Layout/Main";
import BasicLayout from "../../../Layout/BasicLayout";
import NavigationButtons from "../../../Layout/NavigationButtons";
import { useDispatch } from "react-redux";
import { clearStadiumDetailsStateAction } from "../../../redux/actions/stadiumsDetails";
import useAuth from "../../../hooks/useAuth";

const Stadiums = () => {
  useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStadiumDetailsStateAction());
  }, []);

  return (
    <>
      <BasicLayout />
      <AsidePanel type="account" />

      <Main>
        <NavigationButtons mt={40} path="/stadiums" />
        <Inventory />
      </Main>
    </>
  );
};

export default Stadiums;
