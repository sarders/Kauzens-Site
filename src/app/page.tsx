import { Card } from "./components/Card";
import { Container } from "./components/Container";
import { Stack } from "./components/Stack";
import { Typography } from "./components/Typography";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.Background}>
      <Container marginTop={20} marginBottom={64}>
        <Stack
          direction="vertical"
          gap={64}
          justifyContent="center"
          alignItems="center"
        >
          <Container marginTop={20}>
            <Image
              src="/KauzensLogo.svg"
              alt="Logo"
              width={180}
              height={40}
              priority
            />
          </Container>
          <Container maxWidth={"1040px"}>
            <Stack gap={32}>
              <Typography variant="body2" textAlign="center" color="#FBFF4B">
                Welcome to Kauzens International
              </Typography>

              <Typography variant="h1" textAlign="center">
                High-converting B2B websites that flood your business with
                ready-to-buy customers
              </Typography>
              <Container maxWidth={"692px"}>
                <Typography variant="body1" textAlign="center" fontWeight={400}>
                  Design, copy, and development engineered to turn visitors into
                  customers and drive sales on autopilot.
                </Typography>
              </Container>
              <Stack gap={16}>
                <button>Get on a free call now</button>
                <Typography variant="body2" textAlign="center">
                  We provide customized services just for you so that you
                  benefit from each 💵 you pay
                </Typography>
              </Stack>
            </Stack>
          </Container>

          <Card
            theme="dark"
            paddingY={32}
            paddingX={24}
            borderRadius={20}
            borderless={false}
            borderThickness={2}
          >
            <Stack direction="horizontal" gap={48}>
              <Card padding={8}>
                <Image
                  src="/KauzensLogoSmall.svg"
                  alt="Logo"
                  width={26}
                  height={26}
                />
              </Card>
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
      </Container>
    </div>
  );
}
