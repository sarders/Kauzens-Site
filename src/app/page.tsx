import { Card } from "./components/Card";
import { Stack } from "./components/Stack";
import { Typography } from "./components/Typography";

export default function Home() {
  return (
    <Stack direction="vertical" gap={20}>
      <Typography variant="h1">
        High-converting B2B websites that flood your business with ready-to-buy
        customers
      </Typography>
      <Typography variant="h2">
        Design, copy, and development engineered to turn visitors into customers
        and drive sales on autopilot.
      </Typography>
      <Card
        theme="dark"
        paddingY={32}
        paddingX={24}
        borderRadius={20}
        borderless={false}
        borderThickness={2}
      >
        <Stack direction="horizontal" gap={48}>
          <Typography variant="body2">About Us</Typography>
          <Typography variant="body2">Services</Typography>
          <Typography variant="body2">Pricing</Typography>
          <Typography variant="body2">Packages</Typography>
          <Typography variant="body2" color="#FBFF4B">
            Contact Us
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
}
