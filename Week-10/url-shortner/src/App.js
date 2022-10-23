import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";
import { Button, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import ReactGa from "react-ga";

function App() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shortUrls, setShortUrls] = useState([]);

  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
    const data = localStorage.getItem("data");
    if (!data) return;
    const columns = JSON.parse(localStorage.getItem("data"));
    if (columns && columns.length) {
      setShortUrls(columns);
    }
  }, []);

  const columns = [
    { field: "original_link", headerName: "Link", width: 350 },
    { field: "full_short_link", headerName: "ShortLink", width: 350 },
    { field: "copy", headerName: "Copy to clipboard", width: 350 },
  ];

  const shortenUrl = async () => {
    setIsLoading(true);
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const json = await result.json();
    setIsLoading(false);
    if (json.ok) {
      json.result.id = Date.now();
      json.result.copy = "Copy";
      const urls = [...shortUrls, json.result];
      localStorage.setItem("data", JSON.stringify(urls));
      setShortUrls(urls);
    }
    console.log(json);
  };

  const handleCopy = (param, event) => {
    if (param.field === "copy") {
      const value = param.row.full_short_link;
      navigator.clipboard.writeText(value);
      alert(`${value} copied to clipboard`);
    }
  };
  return (
    <Container>
      <Grid container spacing={2} direction="column" sx={{ mt: 10 }}>
        <Grid container justifyContent="center">
          <Grid>
            <TextField
              variant="outlined"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              type="url"
              label="shorten a link here"
            />
          </Grid>

          <Grid>
            <Button variant="outlined" onClick={shortenUrl}>
              {isLoading ? "loading..." : "Shorten It"}
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ height: 400, width: "100%" }}>
          {shortUrls && shortUrls.length && (
            <DataGrid
              columns={columns}
              rows={shortUrls}
              onCellClick={handleCopy}
            />
          )}
        </Box>
      </Grid>
    </Container>
  );
}

export default App;
