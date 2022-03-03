import AsidePanel from "../../../components/AsidePanel";
import Inventory from "../../../components/Account/Inventory";
import Main from "../../../Layout/Main";
import BasicLayout from "../../../Layout/BasicLayout";
import NavigationButtons from "../../../components/Navigation";
import useAuth from "../../../hooks/useAuth";
import ContainerLayout from "../../../Layout/Container";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Stadiums = ({ page }) => {
  useAuth();
  const router = useRouter();

  useEffect(() => {
    if (page <= 1) {
      router.replace({
        pathname: router.pathname,
        query: {
          ...router.query,
          page,
        },
      });
    }
  }, []);

  return (
    <>
      <BasicLayout />
      <AsidePanel type="account" />
      <Main>
        <NavigationButtons mt={40} path="/stadiums" />
        <ContainerLayout>
          <Inventory />
        </ContainerLayout>
      </Main>
    </>
  );
};

export default Stadiums;

export async function getServerSideProps(ctx) {
  const { page } = ctx.query;

  if (typeof page === "undefined" || Number(page) < 1) {
    return {
      props: {
        page: 1,
      },
    };
  }

  return {
    props: {
      page: Number(page),
    },
  };
}
