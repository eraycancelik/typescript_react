import { InputGroup, InputLeftAddon, Input, FormLabel } from "@chakra-ui/react";
const WebSite = () => {
  return (
    <div>
      <FormLabel>Contact</FormLabel>
      <InputGroup>
        <InputLeftAddon children="+1" />  
        <Input
          mr={"10px"}
          variant={"filled"}
          type="tel"
          placeholder="212487****"
        />
        <InputLeftAddon children="https://" />
        <Input variant={"filled"} placeholder="ecorp.com" />
      </InputGroup>
    </div>
  );
};

export default WebSite;