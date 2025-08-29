import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ list, filterList }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = !inputText.trim()
      ? list
      : list.filter((item) =>
          item["Hospital Name"]
            .toLowerCase()
            .includes(inputText.trim().toLowerCase())
        );
    filterList(filtered);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} >
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 80, sx: {width: 620}}}
          aria-label="Search hospitals by name"
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}
