import React from 'react';

function FileUpload({ onFileUpload }) {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    onFileUpload(files);
  };

  return (
    <div>
      <input type="file" accept="audio/*" multiple onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;
