import { Container, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <Container css={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <Text h1>hi</Text>
    </Container>
  )
}
