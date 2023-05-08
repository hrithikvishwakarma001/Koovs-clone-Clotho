import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";

const Checkout = () => {
  const [address, setAddress] = useState(localStorage.getItem("address") || "");
  const [payment, setPayment] = useState(localStorage.getItem("payment") || "");
  const [otp, setOtp] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const toast = useToast();

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSaveAddress = () => {
    localStorage.setItem("address", address);
    toast({
      title: "Address saved",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleSavePayment = () => {
    localStorage.setItem("payment", payment);
    toast({
      title: "Payment method saved",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleSubmit = () => {
    // Here you would handle the payment and send the OTP
    // For this example, we'll just log the values and show the confirmation
    console.log("Address:", address);
    console.log("Payment method:", payment);
    console.log("OTP:", otp);
    setShowConfirmation(true);
  };

  return (
    <Box maxW={"lg"} mx={"auto"} mt={12} p={6} borderWidth={1}>
      {!showConfirmation ? (
        <>
          <Heading as="h2" size="lg" mb={6}>
            Checkout
          </Heading>
          <Stack spacing={3}>
            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <Input type="text" value={address} onChange={handleAddressChange} />
              <Button mt={2} onClick={handleSaveAddress}>
                Save Address
              </Button>
            </FormControl>
            <FormControl id="payment">
              <FormLabel>Payment Method</FormLabel>
              <Input type="text" value={payment} onChange={handlePaymentChange} />
              <Button mt={2} onClick={handleSavePayment}>
                Save Payment Method
              </Button>
            </FormControl>
            <FormControl id="otp">
              <FormLabel>OTP</FormLabel>
              <Input type="text" value={otp} onChange={handleOtpChange} />
            </FormControl>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Pay
            </Button>
          </Stack>
        </>
      ) : (
        <>
          <Heading as="h2" size="lg" mb={6}>
            Payment Successful
          </Heading>
          <Text>Address: {address}</Text>
          <Text>Payment Method: {payment}</Text>
        </>
      )}
    </Box>
  );
};

export default Checkout;
