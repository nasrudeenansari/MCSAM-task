import React from "react";
function List({ people }) {
  return (
    <div className="list_container">
      {people.map((people) => {
        const { id, name, age, imgURL } = people;
        return (
          <div className="list_data">
            <img src={imgURL} alt="" />
            <h2>{name}</h2> 
            <p>{age}</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
