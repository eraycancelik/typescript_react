import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import { useAddressStore } from "../../../states/addressState";
import AddressCard from "./AddressCard";
type AddressProp = {};
function AddressForm() {
  const address = useAddressStore((state) => state.address);
  const removeAddress = useAddressStore((state) => state.removeAddress);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteme = () => {
    removeAddress(address[0]);
    onClose();
  };
  let content = <p>No address on record.</p>;
  if (address.length > 0) {
    content = <AddressCard onOpen={onOpen} />;
  }
  return (
    <>
      <SimpleGrid width={"700px"} columns={2} spacing={10}>
        {content}
        {/* <AddressCard onOpen={onOpen} /> */}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Address Deletion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>"Are you sure you want to proceed?"</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={deleteme}>
              Delete
            </Button>
            <Button variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default AddressForm;
