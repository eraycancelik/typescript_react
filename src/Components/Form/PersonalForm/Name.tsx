import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const Name = () => {
  return (
    <FormControl mr={"10px"}>
      <FormLabel>First name</FormLabel>
      <Input variant={"filled"} placeholder={"Elliot"} type={"text"} />
    </FormControl>
  );
};

export default Name;
