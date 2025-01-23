import React from 'react'
import { Link } from 'react-router-dom'


const PythonStringMethods = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>String Methods
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>
   Strings are one of the most commonly used data types in Python. Python provides a variety of string methods that allow you to manipulate, search, and modify strings efficiently. In this section, we will explore the most commonly used string methods.


</p>  
 </div>
 <div className='wid text-justify pt-4'>
<h2>1. len() – Get Length of a String

</h2>
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


   The len() function returns the number of characters in a string (including spaces).



</p>  
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "Hello, World!"






             </p>
             <p className=' '>print(len(s))  # Output: 13







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
<h2>2. lower() – Convert to Lowercase
</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The lower() method converts all characters in the string to lowercase.
</p>
 </div>
 
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "HELLO"







             </p>
             <p className=' '>print(s.lower())  # Output: hello







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
 <h2>3. upper() – Convert to Uppercase
 </h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The upper() method converts all characters in the string to uppercase.
</p>
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "hello"








             </p>
             <p className=' '>print(s.upper())  # Output: HELLO









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
 <h2>4. capitalize() – Capitalize the First Character
 </h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>The capitalize() method capitalizes the first letter of the string and makes all other characters lowercase.
</p>
 </div>
 
<div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "hello"







             </p>
             <p className=' '>print(s.capitalize())  # Output: Hello









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
<h2>5. title() – Capitalize the First Letter of Each Word
</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The title() method capitalizes the first letter of each word in the string.
</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "hello world"







             </p>
             <p className=' '>print(s.title())  # Output: Hello World







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
6. strip() – Remove Leading and Trailing Whitespaces



</h2>



 
 </div>
 <div className='wid text-justify pt-4'>
   
<p>The strip() method removes any leading and trailing whitespace characters (spaces, tabs, newlines).
</p>



 
 </div>

 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "  Hello, World!  "






             </p>
             <p className=' '>print(s.strip())  # Output: Hello, World!








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
<h2>7. replace() – Replace Substrings
</h2>



  
 </div>
 <div className='wid text-justify pt-4'>
<p>The replace() method replaces all occurrences of a substring with another substring.
</p>



  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "Hello, World!"








             </p>
             <p className=' '>print(s.replace("World", "Python"))  # Output: Hello, Python!








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
<h2>8. split() – Split a String into a List
</h2>

  
 </div>
 <div className='wid text-justify pt-4'>
<p>The split() method divides the string into a list based on a specified separator (by default, it splits by spaces).
</p>

  
 </div>


 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "Hello World"








             </p>
             <p className=' '>print(s.split())  # Output: ['Hello', 'World']
 </p>
 <p className=' '>#You can also specify a separator:
 </p>
 <p className=' '>s = "apple,orange,banana"
 </p>
 <p className=' '>print(s.split(","))  # Output: ['apple', 'orange', 'banana']

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
 <h2>9. join() – Join Elements of an Iterable into a String

 </h2>


  
 </div>
 <div className='wid text-justify pt-4'>
 <p>The join() method concatenates a list or tuple of strings into a single string, with a specified separator.
 </p>


  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "-"









             </p>
             <p className=' '>seq = ("a", "b", "c")









             </p>
             <p className=' '>print(s.join(seq))  # Output: a-b-c









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
<h2>10. find() – Find the Position of a Substring
</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The find() method returns the index of the first occurrence of a specified substring. If the substring is not found, it returns -1.
</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "Hello, World!"











             </p>
             <p className=' '>print(s.find("World"))  # Output: 7










             </p>
             <p className=' '>print(s.find("Python"))  # Output: -1










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
 <h2>11. count() – Count the Occurrences of a Substring

 </h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The count() method returns the number of times a substring appears in the string.
</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "apple apple orange"












             </p>
             <p className=' '>print(s.count("apple"))  # Output: 2

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
<h2>12. startswith() – Check if String Starts with a Substring
</h2>
  
 </div>
 <div className='wid text-justify pt-4'>
<p>The startswith() method checks if the string begins with a specified substring.
</p>
  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "Hello, World!"












             </p>
             <p className=' '>print(s.startswith("Hello"))  # Output: True


 </p>
 <p className=' '>print(s.startswith("Python"))  # Output: False



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
<h2>13. endswith() – Check if String Ends with a Substring
</h2>
  
 </div>
 <div className='wid text-justify pt-4'>
<p>The endswith() method checks if the string ends with a specified substring.
</p>
  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "Hello, World!"












             </p>
             <p className=' '>print(s.endswith("World!"))  # Output: True



 </p>
 <p className=' '>print(s.endswith("Python"))  # Output: False



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
<h2>14. isalpha() – Check if String Contains Only Alphabetic Characters

</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The isalpha() method checks if the string contains only alphabetic characters (letters).
</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "Hello"













             </p>
             <p className=' '>print(s.isalpha())  # Output: True




 </p>
 <p className=' '>s = "Hello123"




</p>
<p className=' '>print(s.isalpha())  # Output: False





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
<h2>15. isdigit() – Check if String Contains Only Digits
</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The isdigit() method checks if the string contains only digits.
</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "12345"














             </p>
             <p className=' '>print(s.isdigit())  # Output: True





 </p>
 <p className=' '>s = "12345abc"






 </p>
 <p className=' '>print(s.isdigit())  # Output: False





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
<h2>16. isalnum() – Check if String Contains Only Alphanumeric Characters
</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The isalnum() method checks if the string contains only alphanumeric characters (letters and digits).
</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "Hello123"














             </p>
             <p className=' '>print(s.isalnum())  # Output: True



 </p>
 <p className=' '>s = "Hello 123"




</p>
<p className=' '>print(s.isalnum())  # Output: False (because of the space)



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
<h2>17. isupper() – Check if All Characters are Uppercase
</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The isupper() method checks if all characters in the string are uppercase.

</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "HELLO"















             </p>
             <p className=' '>print(s.isupper())  # Output: True




 </p>
 <p className=' '>s = "Hello"





</p>
<p className=' '>print(s.isupper())  # Output: False




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
<h2>18. islower() – Check if All Characters are Lowercase

</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The islower() method checks if all characters in the string are lowercase.

</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "hello"














             </p>
             <p className=' '>print(s.islower())  # Output: True



 </p>
 <p className=' '>s = "Hello"





</p>
<p className=' '>print(s.islower())  # Output: False




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
<h2>19. zfill() – Pad String with Zeros

</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The zfill() method pads the string with leading zeros until it reaches a specified width.

</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>s = "42"















             </p>
             <p className=' '>print(s.zfill(5))  # Output: 00042




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
<p>These are just a few of the many string methods Python offers. By mastering these methods, you can handle string manipulation tasks efficiently and effectively. Understanding these methods will help you work with text data in a variety of scenarios, from cleaning data to formatting strings for output.

</p>
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

export default PythonStringMethods