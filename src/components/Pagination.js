import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const Paginations = ({ info, pageNumber, updatePageNumber }) => {
  return (
    <Stack spacing={2} alignItems="center" marginTop="5%">
      <Pagination
        count={info?.pages}
        page={pageNumber}
        color="secondary"
        size="large"
        shape="rounded"
        variant="outlined"
        onChange={(e, value) => updatePageNumber(value)}
      />
    </Stack>
  );
};

export default Paginations;
