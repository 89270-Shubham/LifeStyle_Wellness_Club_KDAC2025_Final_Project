import React from "react";

export default function Gallery() {
  return (
    <div className="flex flex-col items-center mt-8 space-y-8">
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-gray-700">Our Gallery</h2>

      {/* First Section Heading */}
      <h3 className="text-2xl font-semibold text-gray-700">Spa Treatments</h3>
      <div className="grid grid-cols-3 gap-10">
       {/* Card 1 */}
      <div className="bg-amber-700 rounded-2xl shadow-sm shadow-sky-500">
      <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-12 after:h-12 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-12 before:h-12 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">

    {/* Full background image */}
    <img
      src="https://media.istockphoto.com/id/484252440/photo/ayurvedic-spa-massage-still-life.webp?a=1&b=1&s=612x612&w=0&k=20&c=VT-tSbP5yZ2fMsYth0JZc2RFhFasg40awZo9in_Tl3g="
      alt="Spa"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

   

  </div>
</div>


        {/* Card 2 */}
        <div className="bg-amber-700 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-12 after:h-12 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-12 before:h-12 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=600&auto=format&fit=crop&q=60" 
            alt="Spa" 
            className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-amber-700 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-12 after:h-12 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-12 before:h-12 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://media.istockphoto.com/id/1392177469/photo/woman-getting-her-hair-washed-in-hair-salon.jpg?s=612x612&w=0&k=20&c=4ArL4GZgM23SCaSIOogiaeNkTBQ3LIrC2rNksDi9sDc=" 
            alt="Spa"
             className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
      </div>

      {/* Second Section Heading */}
      <h3 className="text-2xl font-semibold text-gray-700">Yoga&Meditation Sessions</h3>
      <div className="grid grid-cols-3 gap-10">
        {/* Card 4 */}
        <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHlvZ2F8ZW58MHx8MHx8fDA%3D"
             alt="yoga" 
             className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHlvZ2F8ZW58MHx8MHx8fDA%3D" 
            alt="Massage" 
            className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
        {/* Card 6 */}
        <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://media.istockphoto.com/id/637872606/photo/woman-doing-yoga-asana-natarajasana-outdoors-on-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZw8mnhieNznajlkN388sfDfE1mS8RbAHREn7zRdcvw=" 
            alt="Massage" 
            className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
      </div>

      {/* Second Section Heading */}
      <h3 className="text-2xl font-semibold text-gray-700">Adventures Treeking</h3>
      <div className="grid grid-cols-3 gap-10">
        {/* Card 7 */}
        <div className="bg-green-700 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJla3xlbnwwfHwwfHx8MA%3D%3D"
             alt="yoga" 
             className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
        {/* Card 8 */}
        <div className="bg-green-700 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://images.unsplash.com/photo-1587547131116-a0655a526190?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyZWt8ZW58MHx8MHx8fDA%3D" 
            alt="Massage" 
            className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
        {/* Card 9 */}
        <div className="bg-green-700 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://images.unsplash.com/photo-1533446083008-d30308b67b55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJla3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="Massage" 
            className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
      </div>

      {/* Second Section Heading */}
      <h3 className="text-2xl font-semibold text-gray-700">Free Health Check-up and Blood Donation</h3>
      <div className="grid grid-cols-3 gap-10">
        {/* Card 7 */}
        <div className="bg-yellow-300 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://media.istockphoto.com/id/1347306304/photo/doctor-in-protective-mask-measuring-body-temperature-of-sick-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=k2PLHFDRkv7Zx16avCjmNoqaBRVhX0adsjybAzb_Ecs="
             alt="blood" 
             className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
        {/* Card 8 */}
        <div className="bg-yellow-300 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeFn34pmFSIV6EYyz2-N9IYmUsLPQL76S-g&s" 
            alt="blood" 
            className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
        {/* Card 9 */}
        <div className="bg-yellow-300 rounded-2xl shadow-sm shadow-sky-500">
          <div className="group overflow-hidden relative hover:rotate-12 flex flex-col justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3o_RIdL5E8OZtDwmSHDYLyAkfLp0_WMp-Zw&s" 
            alt="blood" 
            className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
