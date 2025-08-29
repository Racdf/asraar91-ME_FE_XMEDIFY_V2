import { Container, Box, Stack } from "@mui/material";
import { Suspense, lazy } from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import NavBar from "../components/NavBar/NavBar";
import HeroServices from "../components/IconLayout/HeroServices";

const FAQs = lazy(() => import("../components/Sections/FAQs/FAQs"));
const OurFamilies = lazy(() => import("../components/Sections/OurFamilies/OurFamilies"));
const Blogs = lazy(() => import("../components/Sections/Blogs/Blogs"));
const PatientCaring = lazy(() => import("../components/Sections/PatientCaring/PatientCaring"));
const Specialists = lazy(() => import("../components/Sections/Specialists/Specialists"));
const Specialization = lazy(() => import("../components/Sections/Specialization/Specialization"));
const Offers = lazy(() => import("../components/Sections/Offers/Offers"));

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          "& section": { mb: { xs: 6, md: 10 } },
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <section id="offers" aria-label="Special Offers"><Offers /></section>
          <section id="specialization" aria-label="Our Specializations"><Specialization /></section>
          <section id="specialists" aria-label="Our Specialists"><Specialists /></section>
          <section id="patient-caring" aria-label="Patient Caring"><PatientCaring /></section>
          <section id="blogs" aria-label="Latest Blogs"><Blogs /></section>
          <section id="families" aria-label="Our Families"><OurFamilies /></section>
          <section id="faqs" aria-label="Frequently Asked Questions"><FAQs /></section>
        </Suspense>
      </Box>
    </Box>
  );
}
