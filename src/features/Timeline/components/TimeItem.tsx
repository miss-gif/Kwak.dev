import FastfoodIcon from "@mui/icons-material/Fastfood";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

interface TimeItemProps {
  year?: string;
  label?: string;
  text?: string;
  icon?: React.ReactNode;
  color?: "secondary" | "primary" | "success" | "warning" | "inherit" | "info";
}

const TimeItem = ({ year, label, text, icon = <FastfoodIcon />, color = "primary" }: TimeItemProps) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
        {year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color={color}>{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <h3 className="font-semibold">{label}</h3>
        <p className="text-sm">{text}</p>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimeItem;
