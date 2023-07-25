import React from "react";

const BtnContainer = ({ tabs, currentItem, setCurrentItem }) => {
  return (
    <section className="btn-container">
      {tabs.map((tab, index) => {
        return (
          <button
            key={tab.id}
            type="button"
            className={index === currentItem ? "active-btn job-btn" : "job-btn"}
            onClick={() => setCurrentItem(index)}
          >
            {tab.company}
          </button>
        );
      })}
    </section>
  );
};

export default BtnContainer;
