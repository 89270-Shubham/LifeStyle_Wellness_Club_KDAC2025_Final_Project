import React from "react";

export default function AddDoctor()
{
    return(
       <>
       <div className="">
  <section className="rounded-md p-2 bg-white">
    <div className="flex items-center justify-center my-3">
      <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2"></div>
        <h2 className="text-2xl font-bold leading-tight">
          ADD-DOCTORS
        </h2>
        
        <form className="mt-5">
          <div className="space-y-4">
            <div>
              <label className="text-base font-medium text-gray-900">
                Doctor Name
              </label>
              <div className="mt-2">
                <input
                  placeholder="doctor Name"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="doctor_name"
                />
              </div>
            </div>
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">
                 Email
              </label>
              <div className="mt-2">
                <input
                  placeholder="enter email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="doctor_email"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Gender
                </label>
              </div>
              <select
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
              </div>

              <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Phone Number
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter phone number"
                  type="number"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="number"
                />
              </div>
              </div>
              <div>
              
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Specialization
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter specilization"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="specilization"
                />
              </div>

              <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Experience
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter experience in years"
                  type="number"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="venue"
                />
              </div>

              <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Clinic Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter clinic name"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="clinic"
                />
              </div>

              <div className="flex items-center justify-between mt-3">
                <label className="text-base font-medium text-gray-900">
                Doctor Profile Picture
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="file-input w-full max-w-xs"
                  type="file"
                  name="avatar"
                />
              </div>
            </div>
            <div>
              <button
                className="inline-flex w-full items-center justify-center rounded-md bg-green-500 px-3.5 py-2.5  font-semibold leading-7 text-black hover:bg-green/80"
                type="button"
              >
                Add Doctor
              </button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>
</>

    );

};
