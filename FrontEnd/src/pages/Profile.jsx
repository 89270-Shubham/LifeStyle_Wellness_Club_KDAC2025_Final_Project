import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const getUserProfile = async () => {
  return {
    status: 'success',
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      dob: '1990-01-01',
      address: '123 Main St',
      gender: 'male',
      occupation: 'Engineer',
    },
  };
};

const updateUserProfile = async (profileData) => {
  return { status: 'success' };
};

function Profile() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    const result = await getUserProfile();
    if (result.status === 'success') {
      const user = result.data;
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPhone(user.phone);
      setDob(user.dob);
      setAddress(user.address);
      setGender(user.gender);
      setOccupation(user.occupation);
    } else {
      toast.error('Failed to load user profile');
    }
  };

  const onSave = async () => {
    if (!firstName || !lastName || !phone || !dob || !address || !gender || !occupation) {
      toast.warn('Please fill all fields');
      return;
    }

    const data = {
      firstName, lastName, phone, dob, address, gender, occupation,
    };

    const result = await updateUserProfile(data);

    if (result.status === 'success') {
      toast.success('Profile updated successfully');
      navigate('/');
    } else {
      toast.error('Error updating profile');
    }
  };

  const onBack = () => navigate(-1);

  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: '700px' }}>
        <div className="card shadow-lg rounded-4 p-4">
          <h2 className="text-center mb-4 text-primary fw-bold">Edit Profile</h2>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email (cannot be changed)</label>
            <input type="email" className="form-control" value={email} disabled />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">First Name</label>
            <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Last Name</label>
            <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone</label>
            <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Date of Birth</label>
            <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Address</label>
            <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Occupation</label>
            <input type="text" className="form-control" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Gender</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={gender === 'other'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="other">Other</label>
            </div>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-secondary me-3 px-4" onClick={onBack}>Back</button>
            <button className="btn btn-primary px-4" onClick={onSave}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
