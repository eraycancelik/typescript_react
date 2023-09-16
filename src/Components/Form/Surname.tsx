import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const SurName = () => {
  return (
    <FormControl>
      <FormLabel>Last Name</FormLabel>
      <Input variant={"filled"} placeholder={"Alderson"} type={"text"} />
    </FormControl>
  );
};

export default SurName;
