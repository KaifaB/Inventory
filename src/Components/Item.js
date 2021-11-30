import React, { useEffect, useState } from'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { HiMinusCircle } from 'react-icons/hi'
import { MdDeleteForever } from 'react-icons/md'

function Item(props) {
    //const [column, setColumn] = useState(props.column);
    //const [row, setRow] = useState(props.row);
    useEffect(() =>{
      console.log("useEffect ran")
    }, [props])

    const column = props.column
    return(
        <div className="item" style={props.style}>
          <MdDeleteForever className={props.delete}/>
          <HiMinusCircle className={props.resize + " size minus "} />
          <h1>Style (#):</h1>
          <input type="text" disabled={props.disabled} />
          <h1>Color:</h1>
          <input type="text" disabled={props.disabled} />
          <h1>Quantity:</h1>
          <input type="text" disabled={props.disabled} />
          <BsFillPlusCircleFill className={props.resize + " size plus "} />
        </div>
    );
}
export default Item;