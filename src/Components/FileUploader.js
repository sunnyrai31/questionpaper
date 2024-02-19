import React, { useState } from 'react';

const FileUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    console.log('Parsed JSON:', jsonData);
                    // Do something with the parsed JSON data, e.g., set it to state
                    // setJsonData(jsonData);
                } catch (error) {
                    console.error('Error parsing JSON:', error.message);
                }
            };

            reader.readAsText(selectedFile);
            setFile(selectedFile);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {file && <p>Selected File: {file.name}</p>}


        </div>
    );
};

export default FileUploader;
