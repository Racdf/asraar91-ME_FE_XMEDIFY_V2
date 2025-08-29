import { Chip, Stack, Typography, Divider } from "@mui/material";

export default function TimeSlotPicker({ availableSlots, details, handleBooking, selectedDate }) {
  const ChipButton = ({ label, onClick }) => (
    <Chip
      label={label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": { ml: 0 },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
      onClick={onClick}
    />
  );

  const selectSlot = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };

  const renderSlotGroup = (label, slots) => {
    if (!slots || slots.length === 0) return null;
    return (
      <Stack direction="row" alignItems="center" px={{ xs: 0, md: 6 }} flexWrap="wrap">
        <Typography width={{ xs: 1, md: "15%" }} fontSize={{ xs: 14, md: 16 }}>
          {label}
        </Typography>
        {slots.map((slot) => (
          <ChipButton key={slot} label={slot} onClick={() => selectSlot(slot)} />
        ))}
      </Stack>
    );
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {renderSlotGroup("Morning", availableSlots.morning)}
      {renderSlotGroup("Afternoon", availableSlots.afternoon)}
      {renderSlotGroup("Evening", availableSlots.evening)}
    </Stack>
  );
}
