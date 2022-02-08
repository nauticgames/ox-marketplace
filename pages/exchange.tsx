import ComingSoon from "../components/UI/ComingSoon/ComingSoon";
import BasicLayout from "../Layout/BasicLayout";
import NavigationButtons from "../Layout/NavigationButtons";

const Exchange = () => {
  return (
    <>
      <BasicLayout />
      <main>
        <NavigationButtons mt={120} path="/stadiums" />
        <ComingSoon width={400} height={400} />
      </main>
    </>
  );
};

export default Exchange;
