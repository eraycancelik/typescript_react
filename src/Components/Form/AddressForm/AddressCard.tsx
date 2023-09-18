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
      <Card width={"320px"} height={"350px"}>
        <CardHeader>
          <Heading size="md">{address.addressType}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{address.street}</Text>
          <Text>{address.state}</Text>
          <Text>{address.city}</Text>
          <Text>{address.country}</Text>
          <Text>{address.zipcode}</Text>
          <Text>{address.phone}</Text>
        </CardBody>
        <CardFooter>
          <Button mr={"10px"} colorScheme="teal" variant="outline">
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
    );
  });
  return <>{addressList}</>;
};

export default AddressCard;
