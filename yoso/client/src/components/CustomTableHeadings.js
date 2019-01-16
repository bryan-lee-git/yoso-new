import React from "react";

export default props => {
  const { headings } = props;

  const tableHeadings = headings.filter(heading => heading || null);
  const tableHeadElements = tableHeadings.map((item, index) => (
    <th key={index}>{item}</th>
  ));

  return (
    <thead>
      <tr>{tableHeadElements}</tr>
    </thead>
  );
};
