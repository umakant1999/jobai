import React, { useState } from 'react';
import { Plus, Search, Building2, MapPin, BriefcaseIcon } from 'lucide-react';

const JobPortal = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Looking for an experienced software engineer...",
      salary: "$120,000 - $150,000"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      type: "Full-time",
      description: "Seeking a product manager to lead our team...",
      salary: "$100,000 - $130,000"
    },
    // Add more job entries as needed
  ]);

  const [showUploadForm, setShowUploadForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleUpload = () => {
    setShowUploadForm(!showUploadForm);
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6 ">
      <div className="mb-8 bg-white rounded-md shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">Job Portal</h1>
        
        {showUploadForm && (
          <div className="mb-6 border rounded-md p-4">
            <h2 className="text-xl font-semibold mb-2">Post a New Job</h2>
            <form className="space-y-4">
              <input placeholder="Job Title" className="w-full p-2 border rounded-md" />
              <input placeholder="Company Name" className="w-full p-2 border rounded-md" />
              <input placeholder="Location" className="w-full p-2 border rounded-md" />
              <input placeholder="Salary Range" className="w-full p-2 border rounded-md" />
              <textarea 
                className="w-full p-2 border rounded-md min-h-[100px]" 
                placeholder="Job Description"
              />
              <div className="flex gap-2">
                <button type="submit" className="p-2 border rounded-md bg-green-500 text-white">Submit Job</button>
                <button 
                  type="button" 
                  className="p-2 border rounded-md bg-gray-300"
                  onClick={() => setShowUploadForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {filteredJobs.length === 0 ? (
          <div className="p-4 border rounded-md bg-red-100 text-red-800">
            <h3 className="font-semibold">No jobs found</h3>
            <p>Try adjusting your search terms or check back later for new opportunities.</p>
          </div>
        ) : (
          <div className="space-y-4 sticky top-0 z-10 ">
            {filteredJobs.map(job => (
              <div key={job.id} className=" border rounded-md p-4  shadow-md  ">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <BriefcaseIcon className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">{job.salary}</div>
                    <button className="mt-2 p-2 border rounded-md bg-blue-500 text-white">Apply Now</button>
                  </div>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPortal;