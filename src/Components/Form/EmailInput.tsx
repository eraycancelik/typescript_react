import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
function EmailInput() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  let isError = input === "a";
  return (
    <FormControl mb={"10px"}>
      <FormLabel>Email</FormLabel>
      <Input
        variant={"filled"}
        placeholder={"elliotA@ecorp.com"}
        type="email"
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}
export default EmailInput;
