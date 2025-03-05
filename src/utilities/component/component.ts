import { styled } from "@mui/system";

// Styled components for the custom checkbox
export const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 20,
  width: 25,
  height: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent", // Transparent by default
  border: "2px solid #ccc", // Optional border for better visibility
  transition: "background-color 0.3s ease", // Smooth transition
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(73, 189, 19, 0.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "rgba(73, 189, 19, 0.5)",
  },
  "input:disabled ~ &": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

export const BpCheckedIcon = styled(BpIcon)(() => ({
  backgroundColor: "var(--color-green, #0e9f6e)", // Checked background color
  border: "2px solid var(--color-green, #0e9f6e)", // Optional border
  "&:before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
}));
