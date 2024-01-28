import React from "react";
import "./News.css";

const News = (props) => {
  const { event, color } = props;

  return (
    <p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      {event} <span style={{ color }}>{color}</span>
    </p>
  );
};

export default News;
