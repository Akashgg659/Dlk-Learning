import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { CodeContext } from "../CodeContext/CodeContext";

const PythonCompilerPage = () => {

    const {selectedcode} =  useContext(CodeContext)


    const [code, setCode] = useState(selectedcode)

    useContext(()=>{
      setCode(selectedcode)
       
    }, [selectedcode])

    const handlecodeChange = (e)=>{
      setCode(e.target.value)
    }
   

    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [isRunning , setIsRunning] = useState(false)

   


    
  const runCode = async () => {
    console.log(selectedcode )
    try {
      const response = await axios.post('http://localhost:5000/execute', 
        { code: selectedcode 
      });
      setOutput(response.data.output || response.data.error);
    } catch (error) {
      setOutput('Error connecting to server.');
    }
  };












  const executeCode = async () => {

   
  
    console.log(code)
   
    const apiUrl = 'https://api.jdoodle.com/v1/execute';  
    const apiKey = 'e5016c33505a1c4a969a15c762c4ac1b';  

    const requestBody = {
      script: code,
      language: 'python3',  
      versionIndex: '3',
      clientId: apiKey,
      clientSecret: '9a3fe63570bbdcf7ebaacd3fe82ecf030691af5278b4f19fcc144faa5c421e65'  
    };
    console.log(requestBody)
    
    try {
      const response = await axios.post(apiUrl, requestBody, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.data.statusCode === 200) {
        console.log((response.data.output))
        setOutput(response.data.output);
      } else {
        setOutput('Error: ' + response.data.error);
        console.log(('Error: ' + response.data.error));
      }
    } catch (error) {
      setOutput('Request failed: ' + error.message);
    }
  };
















    

  return (
    <div className="container-fluid vh-100 p-3">
    <div className="row h-100">
        {/* Left Section - Code Editor */}
        <div className="col-md-6 p-3 d-flex flex-column" style={{ backgroundColor: "#f8f9fa" }}>
            <h3 className="text-center mb-3">Python Code Editor</h3>
            <textarea
                className="form-control flex-grow-1"
                value={code}
                onChange={handlecodeChange}
                
                rows="15"
                placeholder="Write your Python code here..."
                style={{ fontFamily: "monospace", fontSize: "16px" }}
            ></textarea>
            
            <div className="d-flex justify-content-center">
            <button
                onClick={executeCode}
                className={`btn btn-primary mt-3  ${isRunning ? "disabled" : ""} a`} 
            >
                {isRunning ? "Running..." : "Compile & Run"}
            </button>
            </div>
            
        </div>

        {/* Right Section - Output */}
        <div className="col-md-6 p-3 d-flex flex-column" style={{ backgroundColor: "#000" }}>
            <h3 className="text-center text-white mb-3">Output</h3>
            <div
                className="flex-grow-1 text-white p-3 rounded"
                style={{
                    backgroundColor: "#333",
                    overflowY: "auto",
                    fontFamily: "monospace",
                    fontSize: "16px",
                }}
            >
                {output || (error && <span className="text-danger">{error}</span>) || ""}
            </div>
        </div>
    </div>

  
</div>
  )
}

export default PythonCompilerPage