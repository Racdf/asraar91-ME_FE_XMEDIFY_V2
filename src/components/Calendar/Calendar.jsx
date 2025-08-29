import { Box } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import DaySelector from "./DaySelector/DaySelector";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

export default function Calendar({ availableSlots, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const getTotalSlots = () => {
    const { morning, afternoon, evening } = availableSlots;
    return morning.length + afternoon.length + evening.length;
  };

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={getTotalSlots()}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        details={details}
        handleBooking={handleBooking}
        selectedDate={selectedDate}
      />
    </Box>
  );
}
