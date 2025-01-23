import React from 'react'
import { Link } from 'react-router-dom'

const PythonComparisonOperatorsPage = () => {
  return (
  

 <div className='paddownforcol'>
    <>
   
   <div>
  <h1>Comparison Operators
</h1> 
</div>

<div>
  <p className='text-justify wid'>
  Comparison operators in Python are used to compare two values or expressions. They help in determining the relationship between two operands, such as equality, greater than, or less than. These operators return a Boolean value (True or False), which is useful in conditional statements and loops.



</p>  
</div>





<div className='wid text-justify pt-4'>
  <h2>

  Types of Comparison Operators 





</h2>  
</div>
<div className='wid text-justify '>
 <ul className='row p-3 text-dark'>
   <li>Equal to (==)
   </li>
   <li>Not equal to (!=)
   </li>
   <li>Greater than ({'>'})
   </li>
   <li>Less than ({'<'})
   </li>
   <li>Greater than or equal to ({'>'}=)
   </li>
   <li>Less than or equal to ({'<'}=)
   </li>
 </ul>
</div>
<div className='wid text-justify pt-4'>
  <h2>
  1. Equal to (==)


</h2>  
</div>

<div className='wid text-justify '>
  <p>The == operator is used to check if two values are equal. It returns True if the values are the same, otherwise False.



</p>  
  </div>
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow bg-white">
   
   <div class=" bg-light text-dark p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''>a = 10




             </p>
             <p className=' '>b = 10



             </p>
             <p className=' '>result = a == b



</p>
<p className=' '>print(result)  # Output: True






</p>

<p className=' '>c = 15





</p>
<p className=' '>result = a == c





</p>
<p className=' '>print(result)  # Output: False






</p>

            
     </pre>
   </div>

  
   <div class="text-start bg-light ">
     <div className='p-2'>
     <button 
       class="btn btn-primary px-2 py-2" 
      
     >
       Try it Yourself
     </button>
     </div>
     
   </div>
 </div>



</div>
  <div className='wid text-justify pt-4'>
  <h2 className=''> 2. Not equal to (!=)





</h2>  
  </div>
  <div className='wid text-justify'>
  <p className=''> The != operator checks if two values are not equal. It returns True if the values are different, otherwise False.






</p>  
  </div>
  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light  text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''>a = 10




            </p>
            <p className=' '>b = 15




            </p>
            <p className=' '>result = a != b




</p>
<p className=' '>print(result)  # Output: True





</p>
<p className=' '>c = 10






</p>
<p className=' '>result = a != c







</p>
<p className=' '>print(result)  # Output: False








</p>
           
    </pre>
  </div>

 
  <div class="text-start bg-light">
    <div className='p-2'>
    <button 
      class="btn btn-primary px-2 py-2" 
     
    >
      Try it Yourself
    </button>
    </div>
    
  </div>
</div>
</div>
  <div className='wid text-justify pt-4 '>
  <h2 > 3. Greater than ({'>'})





</h2>  
  </div>
  <div className='wid text-justify '>
  <p >The {'>'} operator is used to check if the left-hand value is greater than the right-hand value. It returns True if the left value is greater, otherwise False.








</p>  
  </div>
  
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow bg-white">
   
   <div class=" bg-light text-dark p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''>a = 15


             </p>
             <p className=' '>b = 10


             </p>
             <p className=' '>result = a {'>'} b


             </p>
             <p className=' '>print(result)  # Output: True



</p>
<p className=' '>c = 20



</p>
<p className=' '>result = a {'>'} c




</p>
<p className=' '>print(result)  # Output: False





</p>
           
            
            
     </pre>
   </div>

  
   <div class="text-start bg-light">
     <div className='p-2'>
     <button 
       class="btn btn-primary px-2 py-2" 
      
     >
       Try it Yourself
     </button>
     </div>
     
   </div>
 </div>



</div>
  <div className='wid text-justify pt-4 '>
  <h2 className=''> 4. Less than ({'<'})




</h2>  
  </div>
  <div className='wid text-justify '>
  <p className=''> The {'<'} operator checks if the left-hand value is less than the right-hand value . It returns True if the left value is smaller, otherwise False.




</p>  
  </div>
  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''>a = 10



            </p>
            <p className=' '>b = 15


            </p>
            <p className=' '>result = a {'<'} b


            </p>
            <p className=' '>c = 5




</p>
<p className=' '>result = a {'<'} c





</p>
<p className=' '>print(result)  # Output: False



</p>
           
           
           
    </pre>
  </div>

 
  <div class="text-start bg-light">
    <div className='p-2'>
    <button 
      class="btn btn-primary px-2 py-2" 
     
    >
      Try it Yourself
    </button>
    </div>
    
  </div>
</div>



</div>
  <div className='wid text-justify pt-4'>
  <h2 >5. Greater than or equal to ({'>'}=)





</h2>  
  </div>
  <div className='wid text-justify '>
  <p >The{'>'} = operator checks if the left-hand value is greater than or equal to the right-hand value. It returns True if the left value is greater or equal, otherwise False.







</p>  
  </div>
  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white ">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''>a = 10




            </p>
            <p className=' '>b = 10



            </p>
            <p className=' '>result = a {'>'}= b



            </p>
            <p className=' '>print(result)  # Output: True






</p>
            <p className=' '>c = 5






</p>
<p className=' '>result = a {'>'}= c






</p>
<p className=' '>print(result)  # Output: True






</p>
<p className=' '>d = 20



</p>
<p className=' '>result = a {'>'}= d




</p>
<p className=' '>print(result)  # Output: False




</p>
           
           
           
    </pre>
  </div>

 
  <div class="text-start bg-light">
    <div className='p-2'>
    <button 
      class="btn btn-primary px-2 py-2" 
     
    >
      Try it Yourself
    </button>
    </div>
    
  </div>
</div>



</div>
<div className='wid text-justify pt-4'>
  <h2 >6. Less than or equal to ({'<'}=)






</h2>  
  </div>
  <div className='wid text-justify '>
  <p >The {'<'}= operator checks if the left-hand value is less than or equal to the right-hand value. It returns True if the left value is less or equal, otherwise False.






</p>  
  </div>
  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''>a = 10




            </p>
            <p className=' '>b = 10



            </p>
            <p className=' '>result = a {'<'}= b



            </p>
            <p className=' '>print(result)  # Output: True






</p>
            <p className=' '>c = 15






</p>
<p className=' '>result = a {'<'}= c






</p>
<p className=' '>print(result)  # Output: True






</p>
<p className=' '>d = 5



</p>
<p className=' '>result = a {'<'}= d




</p>
<p className=' '>print(result)  # Output: False




</p>
           
           
           
    </pre>
  </div>

 
  <div class="text-start bg-light">
    <div className='p-2'>
    <button 
      class="btn btn-primary px-2 py-2" 
     
    >
      Try it Yourself
    </button>
    </div>
    
  </div>
</div>



</div>
  <div className='wid text-justify pt-4'>
  <h2>Summary Table






</h2>  
  </div>
  <div>
 <table className="table table-striped">
 <thead>
   <tr>
     <th>Operator</th>
     <th>Description</th>
     <th>Example</th>
     <th>Result</th>
     

     
   
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>==</td>
     <td>Equal to
     </td>
     <td>a == b
     </td>
     <td>True or False
     </td>
     
     
   </tr>
   <tr>
   <td>!=</td>
     <td>Not equal to
     </td>
     <td>a != b
     </td>
     <td>True or False

     </td>
    
   </tr>
   <tr>
   <td>{'>'}</td>
     <td>Greater than
     </td>
     <td>a {'>'} b
     </td>
     <td>True or False

     </td>
    
   </tr>
   <tr>
   <td>{'<'}</td>
     <td>Lesser than
     </td>
     <td>a {'<'} b
     </td>
     <td>True or False

     </td>
    
   </tr>
   <tr>
   <td>{'>'}=</td>
     <td>Greater than or equal to
     </td>
     <td>a {'>'}= b
     </td>
     <td>True or False

     </td>
    
   </tr>
   <tr>
   <td>{'<'}=</td>
     <td>Lesser than or equal to
     </td>
     <td>a {'<'}= b
     </td>
     <td>True or False

     </td>
    
   </tr>
   
 </tbody>
</table>
</div>

<div className="d-flex justify-content-end">
< Link to={"/python"} className="button-link m-1">
    <button className="button bg-primary text-white "
     
    >Prev</button>
  </Link>
  <Link to={"/python/installation "}  className="button-link m-1">
    <button className="button bg-primary text-white ">Next</button>
 </Link>
</div>

<div></div>
</>
 </div>
  )
}

export default PythonComparisonOperatorsPage
