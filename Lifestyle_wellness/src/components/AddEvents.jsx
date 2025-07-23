import React from "react";

export default function AddEvents()
{
    return(
       <>
       <div className="">
  <section className="rounded-md p-2 bg-white">
    <div className="flex items-center justify-center my-3">
      <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2"></div>
        <h2 className="text-2xl font-bold leading-tight">
          ADD-EVENTS
        </h2>
        
        <form className="mt-5">
          <div className="space-y-4">
            <div>
              <label className="text-base font-medium text-gray-900">
                Event Name
              </label>
              <div className="mt-2">
                <input
                  placeholder="Event Name"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="event_name"
                />
              </div>
            </div>
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">
                 Event Details
              </label>
              <div className="mt-2">
                <input
                  placeholder="details"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="event_details"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Event Date
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter date"
                  type="date"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="date"
                />
              </div>
              </div>

              <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Start time
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter date"
                  type="time"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="time"
                />
              </div>
              </div>
              <div>
              
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  End time
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter time"
                  type="time"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="time"
                />
              </div>

              <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Venue
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter venue"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="venue"
                />
              </div>

              <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Organizer Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="enter organizer name"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="text"
                />
              </div>

              <div className="flex items-center justify-between mt-3">
                <label className="text-base font-medium text-gray-900">
                Event Picture
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
                className="inline-flex w-full items-center justify-center rounded-md bg-purple-500 px-3.5 py-2.5  font-semibold leading-7 text-black hover:bg-purple/80"
                type="button"
              >
                Add Event
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
