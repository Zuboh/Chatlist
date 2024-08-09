import React, { useState } from 'react';
import { InputAdornment, OutlinedInput, styled } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled(OutlinedInput)(() => ({
  borderRadius: "8px",
  height: "35px",
  width: "100%",
  background: "#f0f2f5",
}));

interface SearchChatListProps {
  onSearch: (searchTerm: string) => void;
}

const SearchChatList = ({ onSearch }: SearchChatListProps )=> {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <Box sx={{ padding: "0 12px" }}>
      <Search
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        }
        placeholder="Cerca"
        value={searchTerm}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchChatList;
