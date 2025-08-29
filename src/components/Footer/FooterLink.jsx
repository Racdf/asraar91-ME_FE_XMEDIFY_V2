import { Link, Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function FooterLink({ children }) {
  return (
    <Link
      underline="none"
      color="#fff"
      fontWeight={300}
      fontSize={14}
      display="flex"
      alignItems="center"
    >
      <Stack direction="row" spacing={0.5} alignItems="center">
        <KeyboardArrowRightIcon fontSize="small" />
        {children}
      </Stack>
    </Link>
  );
}
