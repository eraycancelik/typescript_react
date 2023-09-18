import React, { useEffect } from "react";
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import { useAddressStore } from "../../../states/addressState";
import { useDisclosure } from "@chakra-ui/react";
type AddressProp = {};

const AddressCard = (props: AddressProp) => {
  const removeAddress = useAddressStore((state) => state.removeAddress);
  const addressToDelete = useAddressStore((state) => state.addressToDelete);
  const setAddressToDelete = useAddressStore(
    (state) => state.setAddressToDelete
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteAddress = (address: any) => {
    setAddressToDelete(address);
    onOpen();
  };
  const confirm = () => {
    removeAddress(addressToDelete);
    onClose();
  };
  const addresses = useAddressStore((state) => state.address);
  const addressList = addresses.map((address) => {
    return (
      <>
        <Card mb={"5px"} boxShadow="md" width={"200px"} height={"330px"}>
          <CardHeader>
            <Heading size="md">{address.addressType}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{address.street}</Text>
            <Text>{address.country}</Text>
          </CardBody>
          <CardFooter>
            <Button mr={"5px"} colorScheme="teal" variant="outline">
              Edit
            </Button>
            <Button
              onClick={() => {
                deleteAddress(address);
              }}
              colorScheme={"red"}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  });
  return (
    <>
      {addressList}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Address Deletion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>"Are you sure you want to proceed?"</ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                confirm();
              }}
            >
              Confirm
            </Button>
            <Button
              onClick={() => {
                onClose();
              }}
              variant="ghost"
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddressCard;
