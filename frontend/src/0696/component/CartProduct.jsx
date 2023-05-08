import styled from "@emotion/styled";
import {
  Button,
  HStack,
  Input,
  Text,
  VStack,
  useNumberInput,
} from "@chakra-ui/react";

export default function CartProduct({ title, image, price, swatches }) {
  const size = "S";

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <DIV>
      <img src={image[0].src} />
      <VStack alignItems={"left"}>
        <Text fontSize={"20px"} fontWeight={"medium"}>
          {title}
        </Text>
        <Text fontSize={"20px"} fontWeight={"medium"} display={"flex"}>
          SIZE:
          <Text marginLeft={"5px"} fontWeight={"normal"}>
            {size}
          </Text>
        </Text>
        <Text fontSize={"20px"} fontWeight={"medium"} display={"flex"}>
          Color:
          <Text marginLeft={"5px"} fontWeight={"normal"}>
            {swatches[0].colorName}
          </Text>
        </Text>
        <Text fontSize={"20px"}>{price}</Text>
          <HStack gap={"-10px"}>
            <Button {...dec}>-</Button>
            <Input {...input} width={"50px"} />
            <Button {...inc}>+</Button>
           <Text as="u" cursor={"pointer"}>Remove</Text>
          </HStack>
      </VStack>
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 20px;
  display: flex;
  height: 250px;
  gap: 20px;

  img {
    height: 100%;
  }
`;
