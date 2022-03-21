import { useDispatch, useSelector } from "react-redux";
import NiceModal, { ModalDef } from "@ebay/nice-modal-react";
import MetamaskModal from "../components/Modals/MetamaskModal";
import InsufficientWBNBModal from "../components/Modals/InsufficientWBNBModal";

const ModalsProvider = ({ children }) => {
  const modals = useSelector((state: any) => state.MODAL);
  const dispatch = useDispatch();

  return (
    <NiceModal.Provider modals={modals} dispatch={dispatch}>
      {children}
      <ModalDef id="metamask-modal" component={MetamaskModal} />
      <ModalDef
        id="insufficient-wbnb-modal"
        component={InsufficientWBNBModal}
      />
    </NiceModal.Provider>
  );
};

export default ModalsProvider;
