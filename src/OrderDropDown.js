import React from 'react';

function OrderDropDown ({onChange, entries, selected}) {
  console.log(selected);
    return (
      <div className= "select" onChange={onChange}>
        <select value={selected}>
          {entries.map(entry => {
            return <option
              value={entry.value}
              key={entry.value}
            >{entry.text}</option>
          })}
        </select>
      </div>
    );
  }

  export default OrderDropDown;
