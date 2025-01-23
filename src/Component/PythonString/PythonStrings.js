import React from 'react'
import { Link } from 'react-router-dom'


const PythonStrings = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Python Strings
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>Strings in Python are sequences of characters that can be defined using single quotes, double quotes, or triple quotes for multi-line strings. Here's a detailed look at working with strings in Python:


</p>  
 </div>
 <div className='wid text-justify pt-4'>
<h2>Defining Strings with Single Quotes
</h2>
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


   Strings can be created using single quotes ('). Single-quoted strings are particularly useful when the content doesn't include apostrophes (') to avoid escape characters.




</p>  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''># Single-quoted string




             </p>
             <p className=' '>message = 'Hello, Python!'





             </p>
             <p className=' '>print(message)  # Output: Hello, Python!




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
<h2>Defining Strings with Double Quotes
</h2>
 </div>
 
 <div className='wid text-justify pt-4'>
  <p>
  Strings can also be created using double quotes ("). This format is useful when the content contains apostrophes, as it eliminates the need for escape characters.


  </p>
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''># Double-quoted string





             </p>
             <p className=' '>greeting = "Welcome to Python!"






             </p>
             <p className=' '>print(greeting)  # Output: Welcome to Python!





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
  <h2>
    Escape Characters</h2> 
 </div>
 <div className='wid text-justify '>
   <p>                  
  


   In Python, escape characters are used to represent special characters within strings that are difficult or impossible to include directly. An escape character is a backslash (\) followed by a specific character or sequence that represents a particular action or character.





</p>  
 </div>
 <div>
  <table className="table table-striped">
  <thead>
    <tr>
      <th>Escape Character</th>
      <th>Meaning</th>
      <th>Example</th>
      <th>Output</th>
      

      
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>\'</td>
      <td>Single quote
      </td>
      <td>'It\'s Python!'
      </td>
      <td>It's Python!
      </td>
      
      
    </tr>
    <tr>
    <td>\"</td>
      <td>Double quote
      </td>
      <td>"She said, \"Hello!\""
      </td>
      <td>She said, "Hello!"
      </td>
     
    </tr>
    <tr>
    <td>\\</td>
      <td>Backslash
      </td>
      <td>"A\\B\\C"
      </td>
      <td>A\B\C
      </td>
     
    </tr>
    <tr>
    <td>\n</td>
      <td>Newline
      </td>
      <td>"Hello\nWorld!"
      </td>
      <td>Hello
      World!
      </td>
     
    </tr>
    <tr>
    <td>\t</td>
      <td>Tab
      </td>
      <td>"Python\tis\tfun"
      </td>
      <td>Python is fun
      </td>
     
    </tr>
    <tr>
    <td>\r</td>
      <td>Carriage return
      </td>
      <td>"Hello\rWorld"
      </td>
      <td>World
      </td>
     
    </tr>
    <tr>
    <td>\b</td>
      <td>Backspace
      </td>
      <td>"Hello\bWorld"
      </td>
      <td>HellWorld
      </td>
     
    </tr>
    <tr>
    <td>\f</td>
      <td>Form feed
      </td>
      <td>"Page\fBreak"
      </td>
      <td>Page Break
      </td>
     
    </tr>
    <tr>
    <td>\v</td>
      <td>Vertical tab
      </td>
      <td>"Line1\vLine2"
      </td>
      <td>Line1 Line2
      </td>
     
    </tr>
    <tr>
    <td>\a</td>
      <td>Bell/Alert (produces a beep sound)
      </td>
      <td>"\a"
      </td>
      <td>(beep sound)
      </td>
     
    </tr>
    <tr>
    <td>\0</td>
      <td>Null character
      </td>
      <td>"Hello\0World"
      </td>
      <td>Hello World
      </td>
     
    </tr>
    <tr>
    <td>\xhh</td>
      <td>Hexadecimal character
      </td>
      <td>"\x41"
      </td>
      <td>A
      </td>
     
    </tr>
    <tr>
    <td>\ooo</td>
      <td>Octal character
      </td>
      <td>"\101"
      </td>
      <td>A
      </td>
     
    </tr>
    
    
  </tbody>
</table>
</div>
<div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''># Using escape characters





             </p>
             <p className=' '>message_with_apostrophe = 'It\'s a beautiful day!'






             </p>
             <p className=' '>print(message_with_apostrophe)  # Output: It's a beautiful day!





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
   <h2>                  
 

   Including apostrophes


  


</h2>  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>message = "It's a wonderful language."





             </p>
             <p className=' '>print(message)  # Output: It's a wonderful language.






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
   
<h2>
Accessing Strings Assigned to a Variable

</h2>



 
 </div>
 <div className='wid text-justify pt-4'>
   
<p>Strings are often stored in variables, and their content can be accessed using indexing.
</p>



 
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''># Assigning a string to a variable




             </p>
             <p className=' '>text = "Python"





             </p>
             <p className=' '># Accessing characters by index




</p>
<p className=' '>print(text[0])   # Output: P (first character)

</p>
<p className=' '>print(text[3])   # Output: h (fourth character)

</p>
<p className=' '># Using negative indexing

</p>
<p className=' '>print(text[-1])  # Output: n (last character)

</p>
<p className=' '>print(text[-3])  # Output: h (third character from the end)


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
   <h2>
   Multi-line Strings


   </h2>



  
 </div>
 <div className='wid text-justify pt-4'>
<p>Multi-line strings can be created using triple quotes (''' or """). They are particularly useful for documentation or when defining large text blocks.

  </p>



  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''># Multi-line string





             </p>
             <p className=' '>multi_line = '''Python is fun.






             </p>
             <p className=' '>It is easy to learn.




</p>
<p className=' '>It has a rich library.'''


</p>
<p className=' '>print(multi_line)


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
  <h2>Looping Through a String
  </h2>


  
 </div>
 <div className='wid text-justify pt-4'>
 <p>You can iterate through each character in a string using a for loop.
 </p>

  
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''># Looping through a string






             </p>
             <p className=' '>word = "Python"







             </p>
             <p className=' '>for char in word:





</p>
<p className=' '>print(char)



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
  <h2>Getting the Length of a String

  </h2>


  
 </div>
 <div className='wid text-justify pt-4'>
<p>The len() function is used to find the number of characters in a string.
</p>


  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''># Finding the length of a string







             </p>
             <p className=' '>text = "Python Programming"








             </p>
             <p className=' '>length = len(text)






</p>
<p className=' '>print(length)  # Output: 18




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
  <h2>Check if a Substring is in a String


  </h2>


  
 </div>
 <div className='wid text-justify pt-4'>
 <p>The in keyword checks if a substring exists within a string, and not in checks if it does not.
 </p>


  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''># Using 'in' to check if a substring exists








             </p>
             <p className=' '>text = "Python programming is powerful."









             </p>
             <p className=' '>print("Python" in text)   # Output: True







</p>
<p className=' '>print("Java" in text)     # Output: False




</p>
<p className=' '># Using 'not in' to check if a substring is absent





</p>
<p className=' '>print("Java" not in text)  # Output: True





</p>
<p className=' '>print("Python" not in text) # Output: False



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


    
   
<div className="d-flex justify-content-end pt-4">
 <Link to={'/python/hello'} className="button-link m-1">
     <button className="button bg-primary text-white ">Prev</button>
   </Link>
   <Link to={'/python/variable'}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
     </Link>
 </div>
 
 </div>
  )
}

export default PythonStrings