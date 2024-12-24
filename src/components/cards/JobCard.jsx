"use client";
import React from "react";
import TextWithPartialUnderline from "../designs/TextWithPartialUnderline";
import TextWithReadMore from "../designs/TextWithReadMore";

const JobCard = ({
  imgUrl,
  title,
  description,
  postedOn,
  location,
  skillsRequired,
  jobType,
  expectedSalary,
  experience,
}) => {
  const handleApplyClick = () => {
    console.log("clicked ninde che pae thu");
  };

  return (
    <button
      className="reset-styles "
      onClick={handleApplyClick}
      style={{ width: "100%" }}
    >
      <div className="bg-white my-6 py-3 shadow-md rounded-lg hover:outline hover:outline-offset-2 hover:outline-black flex flex-col p-2 md:p-5">
        <div className="flex flex-row gap-2 md:gap-4">
          <div className="basis-2/6 md:basis-1/6 flex flex-col justify-center items-center text-center">
            <img
              src={imgUrl || null}
              alt="Company Logo"
              className="h-32 w-full object-cover rounded-lg"
            />
          </div>
          <div className="basis-4/6 md:basis-5/6">
            <div className="pb-3 flex flex-row">
              {/* Title Section */}
              <div className="basis-8/12 pt-1 md:pt-2">
                <TextWithPartialUnderline title={title} length={15} />
              </div>
              {/* Info Section */}
              <div className="basis-4/12 text-right pt-1">
                <div className="text-[0.6rem] md:text-sm text-gray-1000">
                  <p className="lg:block hidden">
                    Posted On: <span className="font-medium">{postedOn}</span>
                  </p>
                  <p className="lg:block hidden">
                    Location: <span className="font-medium">{location}</span>
                  </p>
                  <p className="block lg:hidden">
                    <span className="font-medium">{postedOn}</span>
                  </p>
                  <p className="block lg:hidden">
                    <span className="font-medium">{location}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="hidden md:flex">
              <TextWithReadMore text={description} url="#" limit={130} />
            </div>

            <div className="md:hidden">
              <TextWithReadMore text={description} url="#" limit={60} />
            </div>
          </div>
        </div>

        <div className="px-3 text-sm pt-2">
          <p className="text-gray-1000">
            <span className="font-medium text-sm">Skills Required: </span>
            <span className="text-gray-700 text-xs md:text-sm text-justify  ">
              {skillsRequired.length > 150
                ? `${skillsRequired.slice(0, 120)} ...`
                : skillsRequired}
            </span>
          </p>
        </div>

        <div className="hidden   md:flex flex-col md:flex-row justify-around px-4 lg:px-6 pt-5 pb-3 text-xs md:text-sm gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <p>
              <span className="block md:inline mb-2">Job type :</span>{" "}
              <span className="font-medium bg-[#ECEBFF] p-1 px-3  rounded-lg">
                {jobType}
              </span>
            </p>
          </div>
          <div className="text-center md:text-left">
            <p>
              <span className="block md:inline mb-2">Expected Salary :</span>{" "}
              <span className="font-medium bg-[#ECEBFF] p-1 px-3  rounded-lg">
                {expectedSalary}
              </span>
            </p>
          </div>
          <div className="text-center md:text-left">
            <p>
              <span className="block md:inline mb-2">Experience :</span>{" "}
              <span className="font-medium bg-[#ECEBFF] p-1 px-3 rounded-lg">
                {experience}
              </span>
            </p>
          </div>
        </div>

        <div className="md:hidden grid grid-cols-3 gap-4 px-4 lg:px-6 pt-5 pb-3 text-xs md:text-sm">
          <div className="flex flex-col items-center">
            <p className="font-medium">Job Type</p>
            <span className="font-medium bg-[#ECEBFF] p-1 px-3 rounded-lg">
              {jobType}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium">Salary</p>
            <span className="font-medium bg-[#ECEBFF] p-1 px-3 rounded-lg">
              {expectedSalary}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium">Experience</p>
            <span className="font-medium bg-[#ECEBFF] p-1 px-3 rounded-lg">
              {experience}
            </span>
          </div>
        </div>

        <p className="flex flex-row-reverse pr-4 pt-1 md:pt-2">
          <span className="font-medium text-xs md:text-sm hover:text-[#6C63FF] hover:underline hover:underline-offset-4 decoration-[2px]">
            Apply {">>>>"}
          </span>
        </p>
      </div>
    </button>
  );
};

export default JobCard;
