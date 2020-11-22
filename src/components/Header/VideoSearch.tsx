import React, { useState, useRef, useEffect } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles, Theme } from "@material-ui/core/styles";
import debounce from "lodash/debounce";

import { searchYoutube, VideoResult } from "../../services/videoSearch";
import { Search, Clear } from "../icons";
import { IconButton } from "../index";

/**
 * There might be an easier way to make Material TextField white...
 */
const ColoredTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& input": {
      color: "white",
      width: "100%",
    },
    "& .MuiInputAdornment-root": {
      color: "white",
    },
    "& .MuiInputAdornment-root button": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme: Theme) => ({
  inputWidth: {
    [theme.breakpoints.up("sm")]: {
      width: "20rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "25rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30rem",
    },
  },
  clearIconButton: {
    color: "white",
  },
}));

interface VideoSearchProps {
  fullWidth?: boolean;
}

const VideoSearch: React.FC<VideoSearchProps> = ({ fullWidth }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<VideoResult[]>([]);
  const classes = useStyles();

  /**
   * Fetch Youtube search results by using searchYoutube service
   * @param {string} q
   */
  const fetchYoutubeResults = async (q: string) => {
    const results = await searchYoutube(q);
    setSearchResults(results);
  };

  /**
   * Debounced version of fetchYoutubeResults to prevent spamming the API.
   * useRef guarantees, that the function won't be recreated on rerenders (since it needs to get cancelled)
   */
  const debounced = useRef(
    debounce(async (q: string) => {
      await fetchYoutubeResults(q);
    }, 1000)
  );

  /**
   * Call the debounced search function whenever input value changes
   */
  useEffect(() => {
    if (inputValue.length > 2) {
      debounced.current(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    // TODO: show these results on UI
    // eslint-disable-next-line no-console
    console.log(searchResults);
  }, [searchResults]);

  /**
   * Basic onChange handler for text input
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  /**
   * Clear text from input
   */
  const clearInput = () => setInputValue("");

  return (
    <ColoredTextField
      id="search-input"
      className={classes.inputWidth}
      type="text"
      label="Search for videos..."
      value={inputValue}
      onChange={handleChange}
      variant="outlined"
      fullWidth={fullWidth}
      size="small"
      autoComplete="off"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {inputValue.length > 0 && (
              <IconButton
                className={classes.clearIconButton}
                icon={<Clear />}
                onClick={clearInput}
              />
            )}
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default VideoSearch;
