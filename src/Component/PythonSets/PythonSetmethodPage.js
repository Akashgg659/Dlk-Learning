import React from 'react'
import { Link } from 'react-router-dom'


const PythonSetmethodPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Python Set Methods                                                                                                                      
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>Python provides various built-in methods to perform operations on sets, allowing you to manipulate and retrieve information about them. Below is a comprehensive list of set methods and their descriptions
    </p>
    </div>

    <div>
      <p className='text-justify wid'>Here is a comprehensive table for <b>Python Set Methods</b> and their equivalent operators (if any):
    </p>
    </div>

      
    <div className="container mt-4 pt-4">
  <div className="">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Method</th>
          <th scope="col">Operator</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>add()</td>
          <td>N/A</td>
          <td>Adds an element to the set.</td>
        </tr>
        <tr>
          <td>clear()</td>
          <td>N/A</td>
          <td>Removes all elements from the set.</td>
        </tr>
        <tr>
          <td>copy()</td>
          <td>N/A</td>
          <td>Returns a shallow copy of the set.</td>
        </tr>
        <tr>
          <td>difference(set)</td>
          <td>-</td>
          <td>Returns a new set with elements in the first set but not in the second</td>
        </tr>
        <tr>
          <td>difference_update(set)</td>
          <td>-=</td>
          <td>Removes elements from the set that are also in another specified set</td>
        </tr>
        <tr>
          <td>discard(element)</td>
          <td>N/A</td>
          <td>Removes a specific element without raising an error if it doesn’t exist.</td>
        </tr>
        <tr>
          <td>intersection(set)</td>
          <td>&</td>
          <td>Returns a set with elements common to both sets</td>
        </tr>
        <tr>
          <td>intersection_update(set)</td>
          <td>&=</td>
          <td>Updates the set to keep only elements found in both sets.</td>
        </tr>
        <tr>
          <td>issubset(set)</td>
          <td>{`>=`}</td>
          <td>Returns True if the set is a subset of another set.</td>
        </tr>
        <tr>
          <td>issuperset(set)</td>
          <td>{`>=`}</td>
          <td>Returns True if the set is a superset of another set.</td>
        </tr>
        <tr>
          <td>pop()</td>
          <td>N/A</td>
          <td>Removes and returns a random element from the set</td>
        </tr>
        <tr>
          <td>remove(element)</td>
          <td>N/A</td>
          <td>Removes the specified element, raising a KeyError if the element doesn’t exist</td>
        </tr>
        <tr>
          <td>symmetric_difference(set)</td>
          <td>^</td>
          <td>Returns a set with elements in either set but not in both (exclusive OR)</td>
        </tr>
        <tr>
          <td>symmetric_difference_update(set)</td>
          <td>^=</td>
          <td>Updates the set with symmetric differences of the set and another set</td>
        </tr>
        <tr>
          <td>union(set)</td>
          <td>`</td>
          <td>`</td>
        </tr>
        <tr>
          <td>update(set)</td>
          <td>`</td>
          <td>=`</td>
        </tr>
       


      </tbody>
    </table>
  </div>
</div>


















    <div className='wid text-justify pt-4'>
      <h4><b>Key Points to Note</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  <b>Operator Usage:</b> While methods like union() and intersection() have operator equivalents (e.g., | and &), others like add() or clear() do not have operator forms.

</p>
  
  <b>In-place Methods:</b><p> Methods ending with _update (e.g., intersection_update) modify the original set in place, while their counterparts return a new set without modifying the original.</p>
  <b>Error Handling:</b><p> Methods like remove() will raise an error if the element doesn't exist, but discard() avoids this issue.</p>
</div>



   
    
    <div className="d-flex justify-content-end pt-4">
     <Link to={"/python/intro"}  className="button-link m-1">
         <button className="button bg-primary text-white "   onClick={(e) => e.preventDefault()}>Prev</button>
     </Link>
       <Link to={"/python/hello "} className="button-link m-1">
         <button className="button bg-primary text-white ">Next</button>
       </Link>
     </div>
    
    </>
    
        </div>
  )
}

export default PythonSetmethodPage