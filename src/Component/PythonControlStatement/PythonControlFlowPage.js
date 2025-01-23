import React from 'react'
import { Link } from 'react-router-dom'


const PythonControlFlowPage = () => {
  return (


 <div className='paddownforcol'>
        <>
   
   <div>
  <h1>PYTHON CONTROL FLOW
</h1> 
</div>

<div>
  <p className='text-justify wid'>Python provides tools to control the execution flow of a program based on conditions and to perform repetitive tasks. Here's a detailed overview:


</p>  
</div>
<div className='wid text-justify pt-4'>
  <h4>1. Decision-Making Statements



</h4>  
</div>
<div className='wid text-justify'>
  <p><b>a.if, elif, and else</b>




</p>  
</div>
<div className='wid text-justify'>
  <p>These are used to execute code blocks conditionally.





</p>  
</div>
<div className='wid text-justify'>
  <p><b>Syntax:</b>
</p>  
</div>
<div className='wid text-justify'>
  <p>if condition:

</p>  
  </div>
  <div className='wid text-justify'>
  <p className='sp'> # code block if condition is True


</p>  
  </div>
  <div className='wid text-justify'>
  <p > elif another_condition:



</p>  
  </div>
  <div className='wid text-justify'>
  <p className='sp'>    # code block if another_condition is True



</p>  
  </div>
  <div className='wid text-justify'>
  <p > else:




</p>  
  </div>
  <div className='wid text-justify'>
  <p className='sp'>       # code block if all conditions are False




</p>  
  </div>
<div className="box mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariabledynamic14">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>age = 20




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>if age {'<'} 18:





</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>    print("You are a minor.")





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>elif age == 18:





</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>    print("You just became an adult!")




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>else:




</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'   > print("You are an adult.")





</p>
   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div> 

<div className='text-justify wid'>
  <p>

  <b>b.match-case (Introduced in Python 3.10)</b>





</p>  
</div>
<div className='text-justify wid'>
  <p>

  match-case is Python's implementation of a "switch-case" style structure, useful for pattern matching.






</p>  
</div>
<div className='text-justify wid'>
  <p>
<b>Syntax:</b>
 





</p>  
</div>
<div className='text-justify wid'>
  <p>
  match variable:

</p>  
</div>
<div className='text-justify wid'>
  <p>
  case value1:


</p>  
</div>
<div className='text-justify wid'>
  <p className='sp'>
  # code block



</p>  
</div>
<div className='text-justify wid'>
  <p>
  case value2:




</p>  
</div>
<div className='text-justify wid'>
  <p className='sp'>
  # code block





</p>  
</div>
<div className='text-justify wid'>
  <p>
  case _:






</p>  
</div>
<div className='text-justify wid'>
  <p className='sp'>
  # default block







</p>  
</div>
<div className="box mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariabledynamic15">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>day = "Monday"




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>match day:





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>    case "Monday":





</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>        print("Start of the work week.")





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>    case "Friday":




</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>        print("Almost the weekend!")
 



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>    case _:





</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>        print("It's a regular day.")





</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div> 
<div className='text-justify wid pt-4'>
  <h4>

  2. Loop or Iteration Statements






</h4>  
</div>
<div className='text-justify wid'>
  <p>

  Loops allow you to execute a block of code repeatedly.






</p>  
</div>
<div className='text-justify wid'>
  <p>

 <b>a.for loop</b>







</p>  
</div>
<div className='text-justify wid'>
  <p>

  Used to iterate over a sequence (like a list, tuple, or string) or a range of numbers.








</p>  
</div>
<div className='text-justify wid'>
  <p>

 <b>Syntax:</b> 

</p>  

</div>
<div className='text-justify wid'>
  <p>

  for variable in sequence:

</p>  
</div>
<div className='text-justify wid sp'>
  <p>

  # code block


</p>  
</div>
<div className="box mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariabledynamic15">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>numbers = [1, 2, 3, 4]





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>for num in numbers:





</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>     print(num)





</p>

   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div> 
<div className='text-justify wid'>
  <p>

 <b>b.range()</b> 



</p>  
</div>
<div className="box mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariabledynamic15">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>for i in range(1, 5):  # Range from 1 to 4






</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'> print(i)





</p>

   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div> 
<div className='text-justify wid'>
  <p>
 <b>c.while loop</b> 


  

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Executes as long as a condition is True.



  

</p>  
</div>
<div className='text-justify wid'>
  <p>
<b>Syntax:</b>


  

</p>  
</div>
<div className='text-justify wid'>
  <p>while condition:


  

</p>  
</div>
<div className='text-justify wid sp'>
  <p>
  # code block


  

</p>  
</div>

<div className="box mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariabledynamic15">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>count = 1






</p>
<p className='text-justify fnt wid mgn whitevariablep1'> while count {'<'}= 5:







</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>    print(count)








</p>

<p className='text-justify fnt wid mgn whitevariablep1 sp'>    count += 1








</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div> 
<div className='text-justify wid pt-4'>
  <h4>


  3. Jump Statements

  

</h4>  
</div>
<div className='text-justify wid'>
  <p>
  Jump statements alter the flow of loops by skipping or breaking the execution.




  

</p>  
</div>
<div className='text-justify wid'>
  <p>
<b>a.break
</b>




  

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Exits the loop entirely when encountered.




  

</p>  
</div>
<div className="box mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariabledynamic15">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>for num in range(10):







</p>
<p className='text-justify fnt wid mgn whitevariablep1'>     if num == 5:








</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>           break  # Stops the loop when num is 5









</p>

<p className='text-justify fnt wid mgn whitevariablep1'>        print(num)









</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div> 
<div className='text-justify wid'>
  <p>
 <b>b.continue</b>

  

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Skips the rest of the code in the current iteration and moves to the next iteration.



  

</p>  
</div>
<div className="box mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariabledynamic15">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>for num in range(5):








</p>
<p className='text-justify fnt wid mgn whitevariablep1'>         if num == 2:









</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>                  continue  # Skips the iteration when num is 2









</p>

<p className='text-justify fnt wid mgn whitevariablep1'>           print(num)









</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div> 
<div className='text-justify wid pt-4'>
  <h4>


  Combining Loops and Decision-Making

  

</h4>  
</div>
<div className='text-justify wid'>
  <p>
  You can use if statements inside loops for advanced control.



  

</p>  
</div>
<div className="box mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariabledynamic15">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>numbers = [1, 2, 3, 4, 5]








</p>
<p className='text-justify fnt wid mgn whitevariablep1'>        for num in numbers:









</p>
<p className='text-justify fnt wid mgn whitevariablep1 '>                   if num % 2 == 0:










</p>

<p className='text-justify fnt wid mgn whitevariablep1 sp'>            print("It is even.")










</p>
<p className='text-justify fnt wid mgn whitevariablep1 '>           else










</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>            print("It is odd.")










</p>

   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div> 
<div className='text-justify wid'>
  <p>
Summary Table


  

</p>  
</div>


<div>
 <table className="table">
 <thead>
   <tr>
     <th>Control Flow</th>
     <th>Description</th>
     <th>Example

     </th>
   
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>if-elif-else</td>
     <td>Executes code based on conditions</td>
     <td>if x {'>'} 0:</td>
     
   </tr>
   <tr>
     <td>match-case</td>
     <td>Pattern matching structure for cleaner decision-making</td>
     <td>match x:
     </td>
    
   </tr>
   <tr>
     <td>for loop</td>
     <td>Iterates over sequences or ranges</td>
     <td>for i in range(5):
     </td>
     
   </tr>
   <tr>
     <td>while loop</td>
     <td>Repeats code while a condition is True</td>
     <td>while x {'>'} 0:

     </td>
     
   </tr>
   <tr>
     <td>break</td>
     <td>Exits a loop before completing all iterations	</td>
     <td>if x == 5: break


     </td>
     
   </tr>
   <tr>
     <td>continue</td>
     <td>Skips the rest of the current iteration</td>
     <td>if x % 2 == 0: continue


     </td>
     
   </tr>
  
 </tbody>
</table>
</div>
<div className='text-justify wid'>
  <p>
  By mastering these control flow tools, you can write dynamic, efficient, and readable Python programs!



  

</p>  
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
</>
 </div>
  )
}

export default PythonControlFlowPage
