import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../../assets/Doctor.png";
import pharmacyIcon from "../../assets/Drugstore.png";
import hospitalIcon from "../../assets/Hospital.png";
import capsuleIcon from "../../assets/Capsule.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  const services = useMemo(
    () => [
      { img: doctorIcon, title: "Doctors" },
      { img: pharmacyIcon, title: "Labs" },
      { img: hospitalIcon, title: "Hospitals", active: true },
      { img: capsuleIcon, title: "Medical Store" },
      { img: ambulanceIcon, title: "Ambulance" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={{ xs: 18, md: 20 }}
        color="primary.dark"
        fontWeight={500}
        textAlign="center"
        mb={3}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent="center"
      >
        {services.map((service) => (
          <Grid item key={service.title} xs={6} sm={4} md={2}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="grey.50"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
