"use client";

import React, { useState,useEffect } from "react";
import { bucketListJson } from "./../../utils/mock";
import Image from "next/image";

const BucketList = () => {
  const [completedCount, setCompletedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(bucketListJson.length);

  useEffect(() => {
    const getUserfromLocalStorage = localStorage.getItem("logged")
      ? JSON.parse(localStorage.getItem("logged"))
      : null;

    if (!getUserfromLocalStorage) {
      window.location.href = "/login";
    }

    // Calcola il numero di voci completate
    const completedItems = bucketListJson.filter((item) => item.completed);
    setCompletedCount(completedItems.length);
  }, []);

  return (
    <div className="flex flex-col items-center py-24 relative bg-[#121212]">
      <div className="flex justify-center mb-4 text-white">
        <p>
          Completed: {completedCount} / {totalCount}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-3/4 xl:w-1/2">
        {bucketListJson.map((experience, index) => (
          <div
            key={experience.principalKey}
            className="flex justify-between px-6 py-4 border border-white rounded-lg"
            style={{
              backgroundColor: experience.completed ? "#1f1f1f" : "#121212",
              height: "100px",
            }}
          >
            <div className="flex items-center">
              <div className="text-white mr-2">{index + 1}</div>
              <div className="text-white">
                {experience.completed ? (
                  <a href={`/bucketlist/${experience.principalKey}`}>
                    <del>{experience.title}</del>
                  </a>
                ) : (
                  experience.title
                )}
              </div>
              {experience.completed && (
                <>
                  <div className="ml-2 text-white">
                    <Image
                      width={35}
                      height={35}
                      alt={experience.title}
                      className="object-cover"
                      src="/images/loghi/check.png"
                    />
                  </div>
                  {experience.family ? (
                    <div className="ml-2 text-white">
                      <Image
                        width={30}
                        height={30}
                        alt={experience.title}
                        className="object-cover"
                        src="/images/loghi/family.png"
                      />
                    </div>
                  ) : (
                    <div className="ml-2 text-white">
                      <Image
                        width={25}
                        height={25}
                        alt={experience.title}
                        className="object-cover"
                        src="/images/loghi/user.png"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="flex justify-center items-center">
              {experience.viewImage && (
                <Image
                  width={64}
                  height={64}
                  alt={experience.title}
                  className="object-cover border-sm"
                  src={`/images/bucketlist/${experience.principalKey}/main.jpg`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BucketList;
