import React from "react";
import Canton from "../canton/canton";

const Cantons = ({ cantons, vistedCanton }) => {
  return (
    <section>
      <div className="title">
        <h2>Cantons Of Switzerland</h2>
        <div className="underline"></div>
      </div>
      <div>
        {cantons.map((canton) => {
          return (
            <Canton
              key={canton.id}
              {...canton}
              vistedCanton={vistedCanton}
            ></Canton>
          );
        })}
      </div>
    </section>
  );
};

export default Cantons;
