import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink, Outlet } from "@tanstack/react-router";

export function Layout() {
  return (
    <Flex minH="100dvh" direction="column">
      <Box as="header" borderBottomWidth="1px" borderColor="line">
        <Container maxW="6xl" py="5">
          <Flex align="center" justify="space-between" gap="6" wrap="wrap">
            <Link
              asChild
              fontFamily="heading"
              fontSize="2xl"
              fontWeight="bold"
              textDecoration="none"
            >
              <RouterLink to="/">
                eleanor<span aria-hidden="true">.</span>
              </RouterLink>
            </Link>
            <HStack as="nav" aria-label="Main navigation" gap="7">
              {(["/", "/about"] as const).map((to) => (
                <Link
                  key={to}
                  asChild
                  color="muted"
                  fontSize="sm"
                  fontWeight="medium"
                  _currentPage={{
                    color: "brand.fg",
                    textDecoration: "underline",
                    textUnderlineOffset: "8px",
                  }}
                >
                  <RouterLink to={to} activeOptions={{ exact: true }}>
                    {to === "/" ? "Home" : "About"}
                  </RouterLink>
                </Link>
              ))}
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Container as="main" id="main-content" maxW="6xl" flex="1" py={{ base: "12", md: "20" }}>
        <Outlet />
      </Container>
      <Box as="footer" borderTopWidth="1px" borderColor="line">
        <Container maxW="6xl" py="7">
          <Flex justify="space-between" gap="3" wrap="wrap" color="muted" fontSize="sm">
            <Text fontFamily="heading" fontSize="lg" color="ink">
              Eleanor
            </Text>
            <Text>A thoughtful foundation. Room to grow.</Text>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}
