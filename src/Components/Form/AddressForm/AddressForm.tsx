import {
  SimpleGrid,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon, PhoneIcon } from "@chakra-ui/icons";
import { useAddressStore } from "../../../states/addressState";
import AddressCard from "./AddressCard";
import style from "./AddressForm.module.css";
type AddressProp = {};

function AddressForm(props: AddressProp) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const address = useAddressStore((state) => state.address);
  const addAddress = useAddressStore((state) => state.addAddress);
  let content = <p className={style.noAdress}>No address on record.</p>;
  if (address.length > 0) {
    content = <AddressCard />;
  }
  const [addressType, setAddressType] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const defaultValues = () => {
    setAddressType("");
    setCountry("");
    setStreet("");
    setCity("");
    setZipcode("");
    setPhone("");
  };
  const saveAddress = () => {
    const newAddress = {
      id: uuidv4(),
      addressType: addressType,
      country: country,
      street: street,
      city: city,
      zipcode: zipcode,
      phone: phone,
    };
    addAddress(newAddress);
    onClose();
    defaultValues();
  };
  return (
    <>
      <div>
        <div className={style.main}>
          <Heading>Your Addresses</Heading>
          <AddIcon
            onClick={onOpen}
            cursor={"pointer"}
            fontSize="4xl"
            border={"1px"}
            borderRadius={"full"}
            padding={"5px"}
            color={"teal"}
          />
        </div>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new address</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel ref={initialRef}>Address type</FormLabel>
                <Input
                  onChange={(e) => setAddressType(e.target.value)}
                  placeholder="home etc."
                />
              </FormControl>
              <FormControl>
                <FormLabel>Street</FormLabel>
                <Input
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                  placeholder="street name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  placeholder="London"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  placeholder="England"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Zip code</FormLabel>
                <Input
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
              <Button onClick={saveAddress} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <div className={style.liste}>
          <SimpleGrid width={"700px"} columns={3} spacing={"20px"}>
            {content}
          </SimpleGrid>
        </div>
      </div>
    </>
  );
}
export default AddressForm;
