import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <section>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id} className="job-desc">
            <MdKeyboardDoubleArrowRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Duties;
