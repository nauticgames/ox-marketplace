import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Icon as Iconify } from "@iconify/react";
import Link from "next/link";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const InsufficientWBNBModal = NiceModal.create(() => {
  const modal = useModal();

  return (
    <Modal
      open={modal.visible}
      onClose={modal.hide}
      closeIcon={<Icon name="close" />}
      size="tiny"
    >
      <Header
        icon
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Iconify
          icon="simple-icons:binance"
          width={32}
          height={32}
          style={{ marginRight: 10 }}
          color="#efbf15"
        />
        <p>Insufficient WBNB Balance</p>
      </Header>
      <Modal.Content>
        <p>
          You don't have enough WBNB to proceed with this purchase, you can get
          WBNB from PancakeSwap decentralized exchange
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Link href="https://pancakeswap.finance/swap" passHref>
          <Button
            color="green"
            fluid
            as="a"
            target="_blank"
            style={{ marginLeft: 0 }}
          >
            Get WBNB on PancakeSwap{" "}
            <Icon name="external alternate" style={{ marginLeft: 10 }} />
          </Button>
        </Link>
      </Modal.Actions>
    </Modal>
  );
});

export default InsufficientWBNBModal;
