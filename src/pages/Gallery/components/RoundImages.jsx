import { } from "@mui/material";

function RoundImages({ pic, picname }) {
    return (
        <img src={pic} alt={picname} style={{ margin: "8px", width: "200px", height: "auto" }} />
    );
}
export default RoundImages;