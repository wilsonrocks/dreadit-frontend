import React from 'react';

function OrderDropDown ({onChange, entries}) {
    return (
      <div className= "select" onChange={onChange}>
        <select>
          {entries.map(entry => {
            return <option
              value={entry.value}
              key={entry.value}>{entry.text}</option>
          })}
        </select>
      </div>
    );
  }

  export default OrderDropDown;
