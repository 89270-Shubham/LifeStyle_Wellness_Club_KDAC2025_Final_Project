import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../admincontext/MyContext";
import { registerEvent } from "../services/adminevent";
import { toast } from "react-toastify";

export default function AddEvents() {
  const { events, setEvents } = useContext(myContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [start_time, setStartTime] = useState('');
  const [end_time, setEndTime] = useState('');
  const [organizer_name, setOrganizerName] = useState('');
  const [event_type, setEventType] = useState('');
  const [fee, setFee] = useState('');
  const [status, setStatus] = useState('');
  const [created_by, setCreatedBy] = useState('');

  // const handleAddEvent = () => {
  //   const newEvent = {
  //     id: Date.now(),
  //     name,
  //     description,
  //     location,
  //     start_time,
  //     end_time,
  //     organizer_name,
  //     event_type,
  //     fee,
  //     status,
  //     created_by
  //   };
  //   setEvents([...events, newEvent]);
  //   navigate('/eventlist');
  // };


     const onBack = () => {
             navigate(-1)
         }
     
         const onAddEvent = async () => {
             if (name.length === 0) {
                 toast.warn('Please enter your name')
             } else if (description.length === 0) {
                 toast.warn('Please enter your email')
             } else if (location.length === 0) {
                 toast.warn('Please enter a loc')
             }else if (start_time.length === 0) {
                 toast.warn('Please enter a st')
             } else if ( end_time.length === 0) {
                 toast.warn('Please enter a et')
             }  else if (organizer_name.length === 0) {
                 toast.warn('Please enter a organizer')
             }  else if (event_type.length === 0) {
                 toast.warn('Please enter a etype')
                }
                else if (fee.length === 0) {
                 toast.warn('Please enter a fee')}
                 else if (status.length === 0) {
                 toast.warn('Please enter a status')
                 }
                 else if (created_by.length === 0) {
                 toast.warn('Please enter a created_by')
                  } else {
                 const result = await registerEvent( name,
                 description,
                 location,
                start_time,
                  end_time,
                  organizer_name,
                  event_type,
                  fee,
                  status,
                  created_by,)
                 console.log(result);
     
                 if (result==null) {
                     toast.error('Error while registering the user')
                 } else {
                     if (result.status === 'success') {
                         toast.success('Successfully registered!')
                        navigate('/eventlist');
                     } else {
                         toast.error('Registration failed')
                     }
                 }
             }
         }
     


  // handleChange supports file and non-file inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const file = files[0];

      // create a preview URL and store file
      const preview = URL.createObjectURL(file);

      const updated = {
        ...form,
        avatarFile: file,
        avatarPreview: preview,
      };
      setForm(updated);

      // validate avatar immediately
      const fieldErr = validateField(name, file) || null; // avatar uses validateForm for specifics
      const nextErrors = validateForm(updated);
      setErrors(nextErrors);
      return;
    }

    const updated = { ...form, [name]: value };
    setForm(updated);

    // validate field and cross-fields
    const nextErrors = validateForm(updated);
    setErrors(nextErrors);
  };

  // disable submit if there are errors or required fields missing
  const canSubmit = () => {
    const nextErrors = validateForm(form);
    return Object.keys(nextErrors).length === 0;
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    // Build newEvent — store preview URL so listing can display image
    const newEvent = {
      event_name: form.event_name.trim(),
      event_details: form.event_details.trim(),
      date: form.date,
      time_start: form.time_start,
      time_end: form.time_end,
      venue: form.venue.trim(),
      organizer: form.organizer.trim(),
      avatar: form.avatarPreview || null,
      // if you plan to upload file to server, use form.avatarFile
      id: Date.now(),
    };

    setEvents([...events, newEvent]);
    setIsSubmitting(false);
    navigate("/eventlist");
  };

  // cleanup preview URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (form.avatarPreview) URL.revokeObjectURL(form.avatarPreview);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add Event</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Event Name"
            value={name} onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Description"
            value={description} onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Location"
            value={location} onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="datetime-local" placeholder="Start Date & Time"
            value={start_time} onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="datetime-local" placeholder="End Date & Time"
            value={end_time} onChange={(e) => setEndTime(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Organizer"
            value={organizer_name} onChange={(e) => setOrganizerName(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Event Type"
            value={event_type} onChange={(e) => setEventType(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="number" placeholder="Fee"
            value={fee} onChange={(e) => setFee(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Status"
            value={status} onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Created By"
            value={created_by} onChange={(e) => setCreatedBy(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <button type="button"
            onClick={onAddEvent}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-md transition">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}
