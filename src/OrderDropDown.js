import React from 'react';

function OrderDropDown ({onChange, entries}) {
    return (
      <div className= "select" onChange={onChange}>
        <select>
          {entries.map(entry => {
            <option value={entry.value}>{entry.text}</option>
          })}
          <option value="time">Newest</option>
          <option value="votes">Most Votes</option>
        </select>
      </div>
    );
  }

  export default OrderDropDown;
