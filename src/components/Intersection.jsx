import React from "react";

/**
 * @param {Object} props
 * @param {string|null} props.value - 'black', 'white', or null
 * @param {function} props.onClick
 * @param {boolean} props.isStarPoint
 */
function Intersection({ value, onClick, isStarPoint }) {
  return (
    <button className="go-cell go-cell-large" onClick={onClick}>
      {value && <span className={`go-stone go-stone-large ${value}`}></span>}
      {isStarPoint && <span className="go-star-point go-star-point-large"></span>}
    </button>
  );
}

export default Intersection; 