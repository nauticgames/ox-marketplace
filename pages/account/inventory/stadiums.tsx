import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import AsidePanel from "../../../components/AsidePanel/AsidePanel";
import Inventory from "../../../components/Inventory/Inventory";
import Main from "../../../Layout/Main";
import BasicLayout from "../../../Layout/BasicLayout";
import NavigationButtons from "../../../Layout/NavigationButtons";
import { useDispatch } from "react-redux";
import { clearStadiumDetailsStateAction } from "../../../redux/actions/stadiumsDetails";

const Stadiums = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/stadiums");
    }
  }, [isInitialized, isAuthenticated]);

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
