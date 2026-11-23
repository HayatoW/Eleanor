import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { Link, createRootRoute } from "@tanstack/react-router";
import { Layout } from "../Layout";

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <Stack gap="5" align="start">
      <Heading as="h1" size="3xl">
        Page not found
      </Heading>
      <Text color="muted">This page does not exist.</Text>
      <Button asChild colorPalette="brand">
        <Link to="/">Back to home</Link>
      </Button>
    </Stack>
  );
}
