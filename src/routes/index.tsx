import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Badge, Box, Button, Card, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Stack gap={{ base: "12", md: "20" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="12" alignItems="center">
        <Stack gap="7" align="start">
          <Badge colorPalette="brand" variant="subtle" px="3" py="1" borderRadius="full">
            A fresh starting point
          </Badge>
          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "6xl" }}
            lineHeight="1.08"
            fontWeight="normal"
            letterSpacing="tight"
          >
            Good things start with a little space.
          </Heading>
          <Text color="muted" fontSize="lg" lineHeight="1.8" maxW="md">
            Meet Eleanor: a considered foundation for your next idea. Simple to explore,
            thoughtfully built, and ready to become your own.
          </Text>
          <Button asChild colorPalette="brand" size="lg" borderRadius="full" px="7">
            <Link to="/about">
              Get to know Eleanor <span aria-hidden="true">↗</span>
            </Link>
          </Button>
        </Stack>
        <Box
          bg="brand.100"
          borderRadius="3xl"
          p={{ base: "8", md: "12" }}
          minH="360px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text color="brand.800" fontSize="xs" letterSpacing="widest" textTransform="uppercase">
            Built with intention
          </Text>
          <Text
            aria-hidden="true"
            fontFamily="heading"
            fontSize="9xl"
            lineHeight="1"
            color="brand.700"
            alignSelf="center"
          >
            e.
          </Text>
          <Box borderTopWidth="1px" borderColor="brand.300" pt="5">
            <Text fontFamily="heading" fontSize="2xl" color="brand.900">
              Less noise. More possibility.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
      <Stack gap="6">
        <Text
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="widest"
          color="muted"
          textTransform="uppercase"
        >
          A solid foundation
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="5">
          {[
            [
              "01",
              "Made to feel at home",
              "Clear navigation and a calm, consistent layout keep the focus on what matters.",
            ],
            [
              "02",
              "Connected by design",
              "React and TanStack Router bring fast, seamless movement between pages.",
            ],
            [
              "03",
              "Ready for your ideas",
              "Reusable Chakra UI components and a shared theme make it easy to build what comes next.",
            ],
          ].map(([number, title, description]) => (
            <Card.Root key={number} bg="surface" borderColor="line" borderRadius="2xl">
              <Card.Body gap="4" p="7">
                <Text color="brand.600" fontSize="sm">
                  {number}
                </Text>
                <Heading as="h2" size="xl" fontWeight="normal">
                  {title}
                </Heading>
                <Text color="muted" lineHeight="1.8" fontSize="sm">
                  {description}
                </Text>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
