import React from 'react'
import Data from '../JSON/data.json';
function Select() {
    let rr = Data.map((val) => val.address.pin.pincode)
    console.log(rr)
    // const handleChange=()=>{

    // }
    return (
        <div>
            <select>
                {Data.map((val, ind) => {
                    return <option
                        key={ind}>
                        {val.address.city}
                    </option>
                })}
                {/* {Data.map((val,ind)=>{
                    return <option key={ind}>
                        <input type="checkbox" onSelect={val.address.city}/>
                    </option>
                })} */}
            </select>
            <select>
                {Data.map((val,ind)=>{
                    return <option key={ind}>{val.address.pin.pincode}</option>
                })}
            </select>

        </div>
    )
}

export default Select