import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
  Button,
  CloseButton,
  Dialog,
  Portal,
  Input,
} from "@chakra-ui/react";
import { SquarePen } from "lucide-react";
import React, { useState } from "react";
import { useColorModeValue } from "./ui/color-mode";
import { IoTrashBin } from "react-icons/io5";
import { useProductStore } from "../store/product";
import { toaster } from "./ui/toaster";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        closable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        closable: true,
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        closable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        closable: true,
      });
    }
  };

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      bg={bg}
      transition={"all 0.3s"}
      _hover={{
        transform: "translateY(-5px)",
        shadow: "xl",
      }}
    >
      <Dialog.Root>
        <Image
          src={product.image}
          alt={product.name}
          h={48}
          w={"full"}
          fit={"cover"}
        />
        <Box p={"4"}>
          <Heading size={"md"} mb="2">
            {product.name}
          </Heading>
          <Text color={textColor} mb="4">
            ${product.price}
          </Text>
          <HStack>
            <Dialog.Trigger asChild>
              <IconButton bgColor={"blue.400"} size="xs">
                <SquarePen />
              </IconButton>
            </Dialog.Trigger>

            <IconButton
              bgColor={"red.300"}
              size="xs"
              onClick={() => handleDeleteProduct(product._id)}
            >
              <IoTrashBin />
            </IconButton>
          </HStack>
        </Box>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Update Product</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <VStack>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={(e) => {
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      });
                    }}
                  />
                  <Input
                    placeholder="Price"
                    name="price"
                    type="number"
                    value={updatedProduct.price}
                    onChange={(e) => {
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      });
                    }}
                  />
                  <Input
                    placeholder="Image URL"
                    name="image"
                    value={updatedProduct.image}
                    onChange={(e) => {
                      setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      });
                    }}
                  />
                </VStack>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Dialog.ActionTrigger asChild>
                  <Button
                    onClick={() =>
                      handleUpdateProduct(product._id, updatedProduct)
                    }
                  >
                    Save
                  </Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};

export default ProductCard;
