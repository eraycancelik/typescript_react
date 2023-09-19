import { useState, useRef } from "react";
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
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { useAddressStore } from "../../../states/addressState";
import { useDisclosure } from "@chakra-ui/react";
type AddressProp = {};
interface address {
  id: number;
  addressType: string;
  country: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
}
const AddressCard = (props: AddressProp) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const removeAddress = useAddressStore((state) => state.removeAddress);
  const addressToDelete = useAddressStore((state) => state.addressToDelete);
  const setAddressToDelete = useAddressStore(
    (state) => state.setAddressToDelete
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const deleteAddress = (address: any) => {
    setAddressToDelete(address);
    onOpen();
  };
  const confirm = () => {
    removeAddress(addressToDelete);
    onClose();
  };

  const addresses = useAddressStore((state) => state.address);

  const setEditAddress = useAddressStore((state) => state.setEditAddress);
  const editAdress = useAddressStore((state) => state.editAddress);
  const addressToEdit = useAddressStore((state) => state.addressToEdit);

  const [newAddressType, setAddressType] = useState(addressToEdit.addressType);
  const [newCountry, setCountry] = useState(addressToEdit.country);
  const [newStreet, setStreet] = useState(addressToEdit.street);
  const [newCity, setCity] = useState(addressToEdit.city);
  const [newZipcode, setZipcode] = useState(addressToEdit.zipcode);
  const [newPhone, setPhone] = useState(addressToEdit.phone);

  const editAddress = (props: address) => {
    setEditAddress(props);
    setAddressType(props.addressType);
    setCountry(props.country);
    setStreet(props.street);
    setCity(props.city);
    setZipcode(props.zipcode);
    setPhone(props.phone);
    onOpenEdit();
  };
  const saveAddress = () => {
    const newAddress = {
      id: addressToEdit.id,
      addressType: newAddressType,
      country: newCountry,
      street: newStreet,
      city: newCity,
      zipcode: newZipcode,
      phone: newPhone,
    };
    editAdress(newAddress);

    onCloseEdit();
  };
  const addressList = addresses.map((address) => {
    return (
      <div key={address.id}>
        <Card mb={"5px"} boxShadow="md" width={"200px"} height={"330px"}>
          <CardHeader>
            <Heading size="md">{address.addressType}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{address.street}</Text>
            <Text>{address.country}</Text>
          </CardBody>
          <CardFooter>
            <Button
              onClick={() => {
                editAddress(address);
              }}
              mr={"5px"}
              colorScheme="teal"
              variant="outline"
            >
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
      </div>
    );
  });
  return (
    <>
      {addressList}
      {/* Delete address Modal */}
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

      {/* Edit address Modal */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        closeOnOverlayClick={false}
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new address</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel ref={initialRef}>Address type</FormLabel>
              <Input
                value={newAddressType}
                onChange={(e) => setAddressType(e.target.value)}
                placeholder="home etc."
              />
            </FormControl>
            <FormControl>
              <FormLabel>Street</FormLabel>
              <Input
                value={newStreet}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
                placeholder="street name"
              />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                value={newCity}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                placeholder="London"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input
                value={newCountry}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                placeholder="England"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Zip code</FormLabel>
              <Input
                value={newZipcode}
                onChange={(e) => {
                  setZipcode(e.target.value);
                }}
                placeholder="34266"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone number</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  value={newPhone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="tel"
                  placeholder="Phone number"
                />
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                saveAddress();
              }}
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onCloseEdit}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddressCard;
