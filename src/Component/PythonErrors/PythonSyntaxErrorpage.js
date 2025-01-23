import React from 'react'
import { Link } from 'react-router-dom'


const PythonSyntaxErrorpage = () => {
  return (
    <div class="container my-4">
    <h1 class="mb-4">Syntax Errors</h1>
    <p className='fs-5'>Syntax errors occur when the Python interpreter encounters code that does not conform to the language's grammar rules. These errors prevent the code from being executed until they are corrected. Below is a comprehensive guide to syntax errors in Python, suitable for a Python tutorial website.</p>
    <section>
        <h2>What are Syntax Errors?</h2>
        <p className='fs-5'>Syntax errors occur when the Python interpreter encounters code that does not conform to the language's grammar rules. These errors prevent the code from being executed until they are corrected. Syntax errors are detected during the parsing stage before the code runs and indicate that the code structure is invalid and must be fixed to proceed.</p>
    </section>

    <section>
        <h2>Common Causes of Syntax Errors</h2>
        <table class="table table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>Cause</th>
                    <th>Description</th>
                    <th>Example</th>
                    <th>Fix</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Missing Colon (:)</td>
                    <td>A colon is required at the end of compound statements like if, for, while, and def.</td>
                    <td><code>if x {`>`} 5 print(x)</code></td>
                    <td><code>if x {`>`} 5: print(x)</code></td>
                </tr>
                <tr>
                    <td>Improper Indentation</td>
                    <td>Python uses indentation to define blocks of code. Incorrect or inconsistent indentation causes errors.</td>
                    <td><code>def func():\nprint("Hello")</code></td>
                    <td><code>def func():\n    print("Hello")</code></td>
                </tr>
                <tr>
                    <td>Mismatched Brackets</td>
                    <td>Parentheses, brackets, or braces are not closed properly.</td>
                    <td><code>print("Hello")</code></td>
                    <td><code>print("Hello")</code></td>
                </tr>
                <tr>
                    <td>Invalid Assignment</td>
                    <td>Using reserved keywords or improper syntax for variable assignments.</td>
                    <td><code>5 = x</code></td>
                    <td><code>x = 5</code></td>
                </tr>
                <tr>
                    <td>Misplaced Keywords</td>
                    <td>Using keywords like return, break, or continue outside their valid context.</td>
                    <td><code>return x</code></td>
                    <td>Ensure the keyword is in a valid block.</td>
                </tr>
                <tr>
                    <td>String Errors</td>
                    <td>Missing or mismatched quotes for string literals.</td>
                    <td><code>print('Hello")</code></td>
                    <td><code>print('Hello')</code></td>
                </tr>
                <tr>
                    <td>Incorrect Imports</td>
                    <td>Using invalid syntax in import statements.</td>
                    <td><code>import os sys</code></td>
                    <td><code>import os\nimport sys</code></td>
                </tr>
                <tr>
                    <td>Unexpected Tokens</td>
                    <td>Adding extraneous characters or tokens in the code.</td>
                    <td><code>x = 5; y = 6;</code></td>
                    <td><code>x = 5\ny = 6</code></td>
                </tr>
            </tbody>
        </table>
    </section>

    <section className='pt-4'>
        <h2>Error Message Structure</h2>
        <ol>
            <li className='fs-5'><strong>File Name:</strong> The file where the error was found.</li>
            <li className='fs-5' ><strong>Line Number:</strong> The line number where the error occurred.</li>
            <li className='fs-5'><strong>Caret (^):</strong> Points to the exact location in the line causing the error.</li>
            <li className='fs-5'><strong>Error Description:</strong> A brief description of the syntax issue.</li>
        </ol>
        <p><strong>Example:</strong></p>
        <pre>
        <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
                <p>File "example.py", line 3</p>
                <p className=''>print("Hello")</p>
                <p> <span class="">       {`^`} </span></p>
                <p className=''><span class="text-warning">print</span><span class="text-success">(f"An error occurred: {`{e}`}")</span></p>
                
                
                

                
               
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
            <code className='fs-5'>

<p>SyntaxError: unexpected EOF while parsing</p>
            

        </code></pre>
    </section>

    <section>
        <h2>Tips to Avoid Syntax Errors</h2>
        <ol className='pt-3'>
            <li className='fs-5'>
                <strong>Use an IDE or Text Editor with Syntax Highlighting:</strong>
                Tools like PyCharm, VS Code, or Jupyter Notebook highlight syntax errors in real-time.
            </li>
            <li className='fs-5'>
                <strong>Follow Python’s Indentation Rules:</strong>
                Use consistent spaces or tabs for indentation (preferably spaces).
            </li>
            <li className='fs-5'>
                <strong>Close Brackets and Quotes Immediately:</strong>
                Whenever you open a parenthesis, bracket, or quote, immediately close it to prevent mismatches.
            </li>
            <li className='fs-5'>
                <strong>Check for Reserved Keywords:</strong>
                Avoid using Python’s reserved keywords (like <code>for</code>, <code>if</code>, <code>def</code>) as variable names.
            </li>
            <li className='fs-5'>
                <strong>Read Error Messages Carefully:</strong>
                Python's error messages provide clues to the problem. Focus on the line and the caret symbol.
            </li>
        </ol>
    </section>

          <section>
              <h2>Common Examples of Syntax Errors and Fixes</h2>
              <div class="mb-3 ">
                  <strong>Incorrect Function Definition:</strong>
                  <pre><code>
                    <p>def my_function()</p>
                    <p>print("Hello")</p>
                    <p> Error: SyntaxError: expected ':'</p>  
                  </code></pre>
                  <p><strong>Fix:</strong></p>
                  <pre><code>
                      def my_function():
                      print("Hello")
                  </code></pre>
              </div>
              <div class="mb-3">
                  <strong>Improper Indentation:</strong>
                  <pre><code>
                      if x {`>`} 5:
                      print("Greater")
                      Error: IndentationError: expected an indented block
                  </code></pre>
                  <p><strong>Fix:</strong></p>
                  <pre><code>
                      if x {`>`} 5:
                      print("Greater")
                  </code></pre>
              </div>
              <div class="mb-3">
                  <strong>Missing Parentheses in print:</strong>
                  <pre><code>
                      print "Hello"
                      Error: SyntaxError: Missing parentheses in call to 'print'
                  </code></pre>
                  <p><strong>Fix:</strong></p>
                  <pre><code>
                      print("Hello")
                  </code></pre>
              </div>
          </section>

    <section className='fs-5'>
        <p>Understanding and avoiding syntax errors is a fundamental part of Python programming. With practice and attention to detail, developers can quickly identify and resolve these issues. Encourage learners to write clean, readable code and leverage Python’s helpful error messages to debug effectively.</p>
    </section>
    
    <div className="d-flex justify-content-end pt-4">
     <Link to={"/python/intro"}  className="button-link m-1">
         <button className="button bg-primary text-white "   onClick={(e) => e.preventDefault()}>Prev</button>
     </Link>
       <Link to={"/python/hello "} className="button-link m-1">
         <button className="button bg-primary text-white ">Next</button>
       </Link>
     </div>
</div>



  )
}

export default PythonSyntaxErrorpage