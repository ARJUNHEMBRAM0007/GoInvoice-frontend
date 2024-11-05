import AddCircleIcon from '@mui/icons-material/AddCircle';

const Appointments = () => {
  return (
    <>
      {/* Top Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Appointments</button>
        </div>

        {/* Right-hand side buttons */}
        <div className="flex items-center space-x-2">
          {/* Create Button */}
          <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
            <AddCircleIcon className="text-black mr-2" />
            Create Appointments
          </button>
        </div>
      </div>

      {/* Appointment Table Headers */}
      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-9 m-2">
        <div className="w-1/6 px-4 text-center">Appointment ID</div>
        <div className="w-1/6 px-4 text-center">Client Name</div>
        <div className="w-1/6 px-4 text-center">Date & Type</div>
        <div className="w-1/6 px-4 text-center">Appointment Type</div>
        <div className="w-1/6 px-4 text-center">Location/Mode</div>
        <div className="w-1/6 px-4 text-center">Status</div>
      </div>

      {/* Appointment Rows */}
      {[...Array(5)].map((_, index) => (
        <div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6" key={index}>
          <div className="w-1/6 px-4 text-center">APT-1000</div>
          <div className="w-1/6 px-4 text-center">Acme Industries</div>
          <div className="w-1/6 px-4 text-center">12 Aug 2024, 11:00AM</div>
          <div className="w-1/6 px-4 text-center">Review</div>
          <div className="w-1/6 px-4 text-center">Zoom</div>
          <div className={`w-32 ml-10 px-6 text-center ${
            index === 2 || index === 3 ? 'bg-red-500' : 'bg-yellow-500'
          }`}>
            {index === 4 ? 'Completed' : index === 2 || index === 3 ? 'Missed' : 'Scheduled'}
          </div>
        </div>
      ))}

      <div className="grid grid-cols-3 gap-4 pl-6 pr-6 pt-6">
        {/* Left Section with Tabs and Upcoming Appointments */}
        <div className="col-span-2 flex flex-col">
          {/* Top Navigation Tabs */}
          <div className="flex mb-4 space-x-4">
            <button>Upcoming Appointments</button>
          </div>

          {/* Appointment Details Table */}
          <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF]">
            <div className="w-1/3 px-4 text-center">Client Name</div>
            <div className="w-1/3 px-4 text-center">Appointment Type</div>
            <div className="w-1/3 px-4 text-center">Date & Time</div>
            <div className="w-1/3 px-4 text-center">Reminder Sent</div>
          </div>

          {/* Appointment Rows */}
          <div className="flex-grow">
            {Array(6).fill("").map((_, index) => (
              <div className="flex items-center border py-2 border-black bg-[#FFFFFF]" key={index}>
                <div className="w-1/4 px-2 text-center">Acme Industries</div>
                <div className="w-1/4 px-2 text-center">Review</div>
                <div className="w-1/4 px-2 text-center">09 Aug 2024, 01:45 PM</div>
                <div className="w-1/4 px-2 text-center">Yes</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section for Appointment Status */}
        <div className="col-span-1 flex flex-col">
          <button className="pb-4">Appointment Status</button>
          <div className="bg-white p-4 border border-black flex-grow flex flex-col justify-between">
            <div className="flex-grow">
              <textarea
                placeholder=""
                className="w-full h-full text-gray-600 border-none resize-none focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
