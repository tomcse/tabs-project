import React from "react";
import Duties from "./Duties";

const JobInfo = ({ tabs, currentItem }) => {
  const { company, dates, duties, title } = tabs[currentItem];

  return (
    <section>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <div className="job-date">{dates}</div>
      <Duties duties={duties} />
    </section>
  );
};

export default JobInfo;
