import React from "react";
import "components/DayListItem.scss";

import classnames from 'classnames';

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  });
  const formatSpots = function(props) {
    if (props.spots === 0) {
      return <h3 className="text--light">no spots remaining</h3>
    }
    if (props.spots === 1) {
      return <h3 className="text--light">{props.spots} spot remaining</h3>
    }
    if (props.spots > 1) {
      return <h3 className="text--light">{props.spots} spots remaining</h3>
    }
  };

  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass}>{props.name}</h2> 
      {formatSpots(props)}
    </li>
  );
}
