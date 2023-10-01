import React from 'react'
import Data from '../JSON/data.json';
console.log(Data)
function Home() {
    let get=Data.map((val)=>val.address.pin.pincode)
    console.log(get)
  return (
    <div>
        <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Marks</th>
              <th scope="col">Pincode</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((value,ind)=>
            <tr>
                <td>{value.id}</td>
                <td>{value.value}</td>
                <td>{value.address.city}</td>
                <td>{value.marks}</td>
                <td>{value.address.pin}</td>
                <td>
                    <button className="btn btn-success" type="button">Update</button>
                    <button className="btn btn-danger" type="button">Delete</button>
                </td>
            </tr>)}
          </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default Home