import React, { useState } from 'react'
import { config } from './../../config';
import axios from 'axios';

function AddGallery() {
 const [file, setFile] = useState(null);
  const [section, setSection] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("section", section);

    await axios.post(`${config.serverURL}/gallery/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Image uploaded successfully!");
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Section name"
        value={section}
        onChange={(e) => setSection(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default AddGallery
