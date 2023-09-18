import React, { useEffect } from "react";
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { useAddressStore } from "../../../states/addressState";
type AddressProp = {
  onOpen: () => void;
};
const AddressCard = (props: AddressProp) => {
  const addresses = useAddressStore((state) => state.address);
  const addressList = addresses.map((address) => {
    return (
      <div>
        <Card width={"200px"} height={"330px"}>
          <CardHeader>
            <Heading size="md">{address.addressType}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{address.street}</Text>
            <Text>{address.state}</Text>
            <Text>{address.city}</Text>
            <Text>{address.country}</Text>
          </CardBody>
          <CardFooter>
            <Button mr={"5px"} colorScheme="teal" variant="outline">
              Edit
            </Button>
            <Button
              onClick={() => {
                props.onOpen();
                console.log("clicked");
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
  return <>{addressList}</>;
};

export default AddressCard;
