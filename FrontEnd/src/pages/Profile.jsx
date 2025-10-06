import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { config } from "../../config";
import axios from "axios";

const getUserProfile = async () => {
  try {
    const id = sessionStorage.getItem("id");
    const url = `${config.serverURL}/user/profile/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (ex) {
    console.log(`exception: `, ex);
  }
};



function Profile() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    loadUserProfile();
    loadProfilePicture();
  }, []);

  const loadUserProfile = async () => {
    const result = await getUserProfile();
    if (result) {
      setFirstName(result.firstName);
      setLastName(result.lastName);
      setEmail(result.email);
      setPhone(result.phone);
      setDob(result.dob);
      setAddress(result.address);
      setGender(result.gender);
      setOccupation(result.occupation);
      setPassword(result.password);
    } else {
      toast.error("Failed to load user profile");
    }
  };

  const loadProfilePicture = async () => {
    try {
      const id = sessionStorage.getItem("id");
      setProfilePicUrl(`${config.serverURL}/user/${id}/picture`);
    } catch (err) {
      console.error("Error loading profile picture", err);
    }
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        toast.warn("Please select a file first");
        return;
      }

      const id = sessionStorage.getItem("id");
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        `${config.serverURL}/user/${id}/upload-picture`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        toast.success("Profile picture uploaded successfully!");
        loadProfilePicture();
        setPreview(null); // reset preview after upload
      }
    } catch (error) {
      console.error(error);
      toast.error("Error uploading profile picture");
    }
  };

  const updateUserProfile = async (
  firstName,
  lastName,
  phone,
  email,
  dob,
  address,
  gender,
  occupation,
  password
) => {
  try {
    const id = sessionStorage.getItem("id");
    const url = `${config.serverURL}/user/profile/${id}`;
    const body = {   
  firstName,
  lastName,
  phone,
  email,
  dob,
  address,
  gender,
  occupation,
  password };
    console.log(body);
    const response = await axios.put(url, body);
    if (response.status === 200) {
      return response.data;
    }
  } catch (ex) {
    console.log(`exception: `, ex);
  }
};

  const onSave = async () => {
    if (!firstName || !lastName || !email || !phone || !dob || !address || !gender || !occupation || !password) {
      toast.warn("Please fill all fields");
      return;
    }

    const result = await updateUserProfile(
  firstName,
  lastName,
  phone,
  email,
  dob,
  address,
  gender,
  occupation,
  password
    );

    if (result && result.statusCodeValue === 200) {
      toast.success("Profile updated successfully");
      navigate("/profile");
    } else {
      toast.error("Error updating profile");
    }
  };

  const onBack = () => navigate(-1);

  // 👇 handle file change with preview
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card shadow-lg rounded-4 p-4">
          <h2 className="text-center mb-4 text-primary fw-bold">Edit Profile</h2>

          {/* Profile Picture */}
          <div className="mb-3 text-center">
            <div className="d-flex align-items-center justify-content-center gap-4">
              {/* Preview Image */}
              {profilePicUrl && (
                <img
                  src={profilePicUrl}
                  alt="Profile"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              )}

              {/* File Input + Upload Button */}
              <div className="text-start">
                <input
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setProfilePicUrl(URL.createObjectURL(e.target.files[0])); // preview logic
                  }}
                />
                <button
                  className="btn btn-sm btn-outline-primary mt-2 w-100"
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email (cannot be changed)</label>
            <input type="email" className="form-control" value={email} disabled />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone</label>
            <input
              type="tel"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Address</label>
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Occupation</label>
            <input
              type="text"
              className="form-control"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Gender</label>
            <input
              type="text"
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-secondary me-3 px-4" onClick={onBack}>
              Back
            </button>
            <button className="btn btn-primary px-4" onClick={onSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
