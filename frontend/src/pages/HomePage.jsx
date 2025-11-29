import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";
import { Container, Flex, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IoIosRocket } from "react-icons/io";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("Products: ", products);
  return (
    <Container maxW={"80rem"}>
      <VStack gap={6}>
        <Flex
          align="center"
          justify="center"
          gap={2}
          fontSize="4xl"
          fontWeight="bold"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip="text"
        >
          <Text>Current Products</Text>
          <IoIosRocket color="red" />
        </Flex>
        <SimpleGrid gap={6} columns={{ base: 1, md: 2, lg: 3 }} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text>
            No products found 😢{" "}
            <Text
              as="span"
              color="cyan.400"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/create">Create a product</Link>
            </Text>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
