import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Icon as Iconify } from "@iconify/react";
import Link from "next/link";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const MetamaskModal = NiceModal.create(() => {
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
          icon="logos:metamask-icon"
          width={32}
          height={32}
          style={{ marginRight: 15 }}
        />
        <p>You need metamask</p>
      </Header>
      <Modal.Content>
        <p>
          You need to install metamask to be able to interact with the assets of
          the marketplace, you can download it by pressing the following button
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Link href="https://metamask.io/download" passHref>
          <Button
            color="green"
            fluid
            as="a"
            target="_blank"
            style={{ marginLeft: 0 }}
          >
            Download <Icon name="download" style={{ marginLeft: 10 }} />
          </Button>
        </Link>
      </Modal.Actions>
    </Modal>
  );
});

export default MetamaskModal;
