import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const DatePublished = ({ date }) => {
  let timeAgo = "";
  if (date) {
    const time = parseISO(date);
    const timeDistance = formatDistanceToNow(time);
    timeAgo = `${timeDistance} ago`;
  }
  return (
    <span title={timeAgo}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default DatePublished;
