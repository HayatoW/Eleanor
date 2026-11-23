import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Box, Button, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <Stack gap="14">
      <Stack gap="6" maxW="3xl">
        <Text
          color="brand.600"
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="widest"
          textTransform="uppercase"
        >
          About Eleanor
        </Text>
        <Heading as="h1" fontSize={{ base: "5xl", md: "6xl" }} lineHeight="1.1" fontWeight="normal">
          A small beginning.
          <br />
          An open horizon.
        </Heading>
        <Text fontSize="xl" lineHeight="1.8" color="muted">
          Great experiences don’t need to start with complexity. Eleanor is a simple, welcoming
          place to turn an idea into something real.
        </Text>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={{ base: "8", md: "16" }}
        borderTopWidth="1px"
        borderColor="line"
        pt="10"
      >
        <Heading as="h2" size="3xl" fontWeight="normal">
          Thoughtful by default.
        </Heading>
        <Stack gap="6" color="muted" lineHeight="1.9">
          <Text>
            This is a single-page app built with React and file-based routing from TanStack Router.
            Each page has its own space, while a shared layout keeps the experience connected.
          </Text>
          <Text>
            Chakra UI provides the building blocks. A custom theme brings together forest greens,
            warm neutrals, and expressive typography — a reusable visual language that can grow with
            the project.
          </Text>
        </Stack>
      </SimpleGrid>
      <Box bg="brand.900" color="white" p={{ base: "8", md: "12" }} borderRadius="3xl">
        <Stack gap="5" align="start">
          <Text fontSize="xs" letterSpacing="widest" textTransform="uppercase" color="brand.200">
            Room for what’s next
          </Text>
          <Heading as="h2" size="3xl" fontWeight="normal">
            Make yourself at home.
          </Heading>
          <Text color="brand.100" maxW="xl" lineHeight="1.8">
            Explore the starting point, find your direction, and build from here.
          </Text>
          <Button
            asChild
            bg="brand.100"
            color="brand.900"
            borderRadius="full"
            mt="2"
            _hover={{ bg: "brand.200" }}
          >
            <Link to="/">
              Back to home <span aria-hidden="true">↗</span>
            </Link>
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
