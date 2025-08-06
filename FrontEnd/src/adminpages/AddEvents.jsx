import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../admincontext/MyContext";

export default function AddEvents() {
  const { events, setEvents } = useContext(myContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    event_name: "",
    event_details: "",
    date: "",
    time_start: "",
    time_end: "",
    venue: "",
    organizer: "",
    avatarFile: null,     // store actual File
    avatarPreview: null,  // store preview URL
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation rules config
  const MAX_NAME = 80;
  const MAX_DETAILS = 500;
  const MAX_VENUE = 120;
  const MAX_ORG = 80;
  const MAX_IMAGE_BYTES = 2 * 1024 * 1024; // 2MB
  const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

  // Validate a single field (called onChange)
  const validateField = (name, value) => {
    let err = "";

    if (["event_name", "event_details", "date", "time_start", "time_end", "venue", "organizer"].includes(name)) {
      // required
      if (!value || value.toString().trim() === "") {
        err = "This field is required.";
        return err;
      }
    }

    if (name === "event_name") {
      if (value.length > MAX_NAME) err = `Maximum ${MAX_NAME} characters allowed.`;
    }

    if (name === "event_details") {
      if (value.length > MAX_DETAILS) err = `Maximum ${MAX_DETAILS} characters allowed.`;
    }

    if (name === "venue") {
      if (value.length > MAX_VENUE) err = `Maximum ${MAX_VENUE} characters allowed.`;
    }

    if (name === "organizer") {
      if (value.length > MAX_ORG) err = `Maximum ${MAX_ORG} characters allowed.`;
    }

    if (name === "date") {
      const today = new Date();
      const chosen = new Date(value + "T00:00:00");
      // zero time for today comparison
      today.setHours(0, 0, 0, 0);
      if (chosen < today) err = "Event date cannot be in the past.";
    }

    // time validation for each field is deferred to cross-field check in validateForm
    return err;
  };

  // Validate full form (cross-field checks like start < end)
  const validateForm = (currentForm) => {
    const newErrors = {};

    // Per-field checks
    Object.entries({
      event_name: currentForm.event_name,
      event_details: currentForm.event_details,
      date: currentForm.date,
      time_start: currentForm.time_start,
      time_end: currentForm.time_end,
      venue: currentForm.venue,
      organizer: currentForm.organizer,
    }).forEach(([k, v]) => {
      const e = validateField(k, v);
      if (e) newErrors[k] = e;
    });

    // Cross-field: start < end (only if both present)
    if (currentForm.date && currentForm.time_start && currentForm.time_end) {
      const start = new Date(`${currentForm.date}T${currentForm.time_start}`);
      const end = new Date(`${currentForm.date}T${currentForm.time_end}`);
      if (end <= start) {
        newErrors.time_end = "End time must be after start time.";
      }
    }

    // Avatar checks (optional - only if a file is selected)
    if (currentForm.avatarFile) {
      if (!ALLOWED_IMAGE_TYPES.includes(currentForm.avatarFile.type)) {
        newErrors.avatar = "Only JPEG, PNG or WEBP images are allowed.";
      } else if (currentForm.avatarFile.size > MAX_IMAGE_BYTES) {
        newErrors.avatar = "Image must be smaller than 2MB.";
      }
    }

    return newErrors;
  };

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
    <div className="">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-yellow-50 to-white p-4">
        <div className="flex items-center justify-center my-3 bg-white/90 backdrop-blur-md rounded-lg shadow-lg shadow-black-300 p-6 w-full max-w-md border border-purple-200">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight mb-2">ADD EVENTS</h2>
            <form className="mt-5 space-y-4" onSubmit={handleAddEvent} noValidate>
              {/* Event Name */}
              <div>
                <label className="text-base font-medium text-gray-900">Event Name</label>
                <input
                  type="text"
                  name="event_name"
                  value={form.event_name}
                  onChange={handleChange}
                  placeholder="Event Name"
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${
                    errors.event_name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.event_name && <p className="text-red-600 text-xs mt-1">{errors.event_name}</p>}
              </div>

              {/* Event Details */}
              <div>
                <label className="text-base font-medium text-gray-900">Event Details</label>
                <textarea
                  name="event_details"
                  value={form.event_details}
                  onChange={handleChange}
                  placeholder="Details"
                  rows={3}
                  className={`w-full rounded-md border px-3 py-2 text-sm ${
                    errors.event_details ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.event_details && <p className="text-red-600 text-xs mt-1">{errors.event_details}</p>}
              </div>

              {/* Date */}
              <div>
                <label className="text-base font-medium text-gray-900">Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.date && <p className="text-red-600 text-xs mt-1">{errors.date}</p>}
              </div>

              {/* Start Time */}
              <div>
                <label className="text-base font-medium text-gray-900">Start Time</label>
                <input
                  type="time"
                  name="time_start"
                  value={form.time_start}
                  onChange={handleChange}
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${
                    errors.time_start ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.time_start && <p className="text-red-600 text-xs mt-1">{errors.time_start}</p>}
              </div>

              {/* End Time */}
              <div>
                <label className="text-base font-medium text-gray-900">End Time</label>
                <input
                  type="time"
                  name="time_end"
                  value={form.time_end}
                  onChange={handleChange}
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${
                    errors.time_end ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.time_end && <p className="text-red-600 text-xs mt-1">{errors.time_end}</p>}
              </div>

              {/* Venue */}
              <div>
                <label className="text-base font-medium text-gray-900">Venue</label>
                <input
                  type="text"
                  name="venue"
                  value={form.venue}
                  onChange={handleChange}
                  placeholder="Venue"
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${
                    errors.venue ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.venue && <p className="text-red-600 text-xs mt-1">{errors.venue}</p>}
              </div>

              {/* Organizer */}
              <div>
                <label className="text-base font-medium text-gray-900">Organizer Name</label>
                <input
                  type="text"
                  name="organizer"
                  value={form.organizer}
                  onChange={handleChange}
                  placeholder="Organizer Name"
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${
                    errors.organizer ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.organizer && <p className="text-red-600 text-xs mt-1">{errors.organizer}</p>}
              </div>

              {/* Avatar */}
              <div>
                <label className="text-base font-medium text-gray-900">Event Picture</label>
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleChange}
                  className={`file-input w-full max-w-xs ${
                    errors.avatar ? "border-red-500" : ""
                  }`}
                />
                {errors.avatar && <p className="text-red-600 text-xs mt-1">{errors.avatar}</p>}

                {form.avatarPreview && (
                  <div className="mt-2">
                    <img
                      src={form.avatarPreview}
                      alt="preview"
                      className="w-32 h-20 object-cover rounded-md border"
                    />
                  </div>
                )}
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={!canSubmit() || isSubmitting}
                  className={`inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold ${
                    !canSubmit() || isSubmitting
                      ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                      : "bg-purple-500 text-black hover:bg-purple-300"
                  }`}
                >
                  {isSubmitting ? "Adding..." : "Add Event"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
