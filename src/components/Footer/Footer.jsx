import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

export default function Footer() {
  const socialIcons = [fb, twitter, yt, pinterest];
  const columnOne = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];
  const columnTwo = ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"];
  const columnThree = [...columnOne];

  const renderLinkColumn = (links) => (
    <Stack spacing={2}>
      {links.map((link, idx) => (
        <FooterLink key={idx}>{link}</FooterLink>
      ))}
    </Stack>
  );

  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
              <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
              <Stack direction="row" spacing={1.5}>
                {socialIcons.map((icon, idx) => (
                  <Box key={idx} component="img" src={icon} height={36} />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            {renderLinkColumn(columnOne)}
          </Grid>
          <Grid item xs={12} md={2.5}>
            {renderLinkColumn(columnTwo)}
          </Grid>
          <Grid item xs={12} md={2.5}>
            {renderLinkColumn(columnThree)}
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
