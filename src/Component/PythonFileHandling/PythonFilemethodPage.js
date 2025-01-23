import React from 'react'
import { Link } from 'react-router-dom'


const PythonFilemethodPage = () => {
  return (
    <div class=" my-4">
    <h2 class="text-left mb-4">File Methods </h2>
    <h5 className="text-left text-justify wid'">Here's the content in a tabular format:</h5>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
            <tr>
                <th>File Method</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>open()</td>
                <td>Opens a file and returns a file object.</td>
            </tr>
            <tr>
                <td>close()</td>
                <td>Closes an opened file and releases system resources.</td>
            </tr>
            <tr>
                <td>read()</td>
                <td>Reads the entire file or a specified number of bytes.</td>
            </tr>
            <tr>
                <td>readline()</td>
                <td>Reads a single line from the file.</td>
            </tr>
            <tr>
                <td>readlines()</td>
                <td>Reads all lines in a file and returns them as a list.</td>
            </tr>
            <tr>
                <td>write()</td>
                <td>Writes a string to the file.</td>
            </tr>
            <tr>
                <td>writelines()</td>
                <td>Writes a list of strings to the file.</td>
            </tr>
            <tr>
                <td>seek()</td>
                <td>Changes the file's current position.</td>
            </tr>
            <tr>
                <td>tell()</td>
                <td>Returns the current position of the file pointer.</td>
            </tr>
            <tr>
                <td>flush()</td>
                <td>Flushes the internal buffer, writing data to the file.</td>
            </tr>
            <tr>
                <td>truncate()</td>
                <td>Resizes the file to a specified size.</td>
            </tr>
            <tr>
                <td>isatty()</td>
                <td>Checks if the file is connected to a terminal device.</td>
            </tr>
            <tr>
                <td>fileno()</td>
                <td>Returns the file descriptor of the file.</td>
            </tr>
            <tr>
                <td>readable()</td>
                <td>Checks if the file is readable.</td>
            </tr>
            <tr>
                <td>writable()</td>
                <td>Checks if the file is writable.</td>
            </tr>
            <tr>
                <td>seekable()</td>
                <td>Checks if the file supports random access.</td>
            </tr>
            <tr>
                <td>detach()</td>
                <td>Separates the underlying binary buffer from a TextIOWrapper object.</td>
            </tr>
            <tr>
                <td>closefd</td>
                <td>Ensures the underlying file descriptor is closed when the file is closed.</td>
            </tr>
        </tbody>
    </table>

    
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

export default PythonFilemethodPage