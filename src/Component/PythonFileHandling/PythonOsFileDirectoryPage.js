import React from 'react'
import { Link } from 'react-router-dom'

const PythonOsFileDirectoryPage = () => {
  return (
    <div class="container my-4">
    <h1 class="text-left mb-4">OS File/Directory Methods</h1>
    <p className="text-left fs-5 ">Here is a comprehensive table listing major os module methods in Python, categorized and with one-line descriptions for each.
    </p>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
            <tr>
                <th>Method Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>os.getcwd()</td><td>Returns the current working directory.</td></tr>
            <tr><td>os.chdir(path)</td><td>Changes the current working directory to the specified path.</td></tr>
            <tr><td>os.listdir(path)</td><td>Returns a list of entries in the given directory.</td></tr>
            <tr><td>os.mkdir(path)</td><td>Creates a single directory.</td></tr>
            <tr><td>os.makedirs(path)</td><td>Creates directories recursively.</td></tr>
            <tr><td>os.rmdir(path)</td><td>Removes a single empty directory.</td></tr>
            <tr><td>os.removedirs(path)</td><td>Removes directories recursively.</td></tr>
            <tr><td>os.rename(src, dst)</td><td>Renames a file or directory.</td></tr>
            <tr><td>os.replace(src, dst)</td><td>Replaces a file or directory, overwriting if it exists.</td></tr>
            <tr><td>os.remove(path)</td><td>Deletes a file.</td></tr>
        </tbody>
    </table>

    <h2 class="text-left my-4">Path Utilities (os.path)</h2>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
            <tr>
                <th>Method Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>os.path.exists(path)</td><td>Checks if the path exists.</td></tr>
            <tr><td>os.path.isfile(path)</td><td>Checks if the path is a file.</td></tr>
            <tr><td>os.path.isdir(path)</td><td>Checks if the path is a directory.</td></tr>
            <tr><td>os.path.join(*paths)</td><td>Joins multiple path components.</td></tr>
            <tr><td>os.path.abspath(path)</td><td>Returns the absolute path of the given path.</td></tr>
            <tr><td>os.path.basename(path)</td><td>Returns the base name of the path.</td></tr>
            <tr><td>os.path.dirname(path)</td><td>Returns the directory portion of the path.</td></tr>
        </tbody>
    </table>

    <h2 class="text-left my-4">Process Management</h2>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
            <tr>
                <th>Method Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>os.system(command)</td><td>Executes a system command.</td></tr>
            <tr><td>os.spawnv(mode, path, args)</td><td>Executes a program specified by path with the arguments args.</td></tr>
            <tr><td>os.spawnvp(mode, file, args)</td><td>Similar to spawnv but uses PATH to find the program.</td></tr>
            <tr><td>os.execv(path, args)</td><td>Replaces the current process with the one specified in path.</td></tr>
            <tr><td>os.kill(pid, sig)</td><td>Sends a signal to the process with the given PID.</td></tr>
        </tbody>
    </table>

    <h2 class="text-left my-4">Environment Variables</h2>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
            <tr>
                <th>Method Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>os.environ</td><td>A mapping object representing environment variables.</td></tr>
            <tr><td>os.getenv(key, default)</td><td>Gets the value of an environment variable.</td></tr>
            <tr><td>os.putenv(key, value)</td><td>Sets an environment variable (deprecated, use os.environ).</td></tr>
            <tr><td>os.unsetenv(key)</td><td>Removes an environment variable (deprecated).</td></tr>
        </tbody>
    </table>

    <h2 class="text-left my-4">Permissions and Ownership</h2>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
            <tr>
                <th>Method Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>os.chmod(path, mode)</td><td>Changes the permissions of a file.</td></tr>
            <tr><td>os.chown(path, uid, gid)</td><td>Changes the owner and group of a file.</td></tr>
            <tr><td>os.access(path, mode)</td><td>Checks file access permissions (read, write, execute).</td></tr>
        </tbody>
    </table>

    <h2 class="text-left my-4">File Descriptors</h2>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
            <tr>
                <th>Method Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>os.open(path, flags, mode)</td><td>Opens a file and returns its file descriptor.</td></tr>
            <tr><td>os.close(fd)</td><td>Closes a file descriptor.</td></tr>
            <tr><td>os.read(fd, n)</td><td>Reads up to n bytes from a file descriptor.</td></tr>
            <tr><td>os.write(fd, str)</td><td>Writes a string to a file descriptor.</td></tr>
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

export default PythonOsFileDirectoryPage