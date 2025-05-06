import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="w-[35vw] mx-auto max-lg:w-[80vw] max-sm:w-[90vw] border rounded-lg border-stone-200 mt-2.5 px-2.5 py-2.5">
        <div id="wrapper">
          <div id="first-box" className="flex flex-col gap-2">
            <Skeleton
              width={250}
              height={30}
              baseColor="#e5e5e5"
              duration={0.5}
              className="mb-0.5"
            />
            <Skeleton
              width={150}
              height={30}
              baseColor="#e5e5e5"
              duration={0.5}
              className="mb-0.5"
            />
          </div>
          <div id="second-box" className="mt-2.5 flex flex-col gap-2">
            <Skeleton
              width={120}
              height={100}
              baseColor="#e5e5e5"
              duration={0.5}
              className="mb-0.5"
            />
            <Skeleton
              width={150}
              height={30}
              baseColor="#e5e5e5"
              duration={0.5}
              className="mb-0.5"
            />
          </div>
          <div id="third-box" className="mt-2.5 flex flex-col gap-2">
            <Skeleton
              width={250}
              height={30}
              baseColor="#e5e5e5"
              duration={0.5}
              className="mb-0.5"
            />
          </div>
          <div id="other-wrapper" className="mt-1.5">
            <div id="flex" className="flex flex-row justify-between max-sm:hidden">
              <Skeleton
                height={30}
                baseColor="#e5e5e5"
                duration={0.5}
                width={150}
                className="mb-0.5 max-sm:w-3"
              />
              <Skeleton
                height={30}
                baseColor="#e5e5e5"
                duration={0.5}
                width={150}
                className="mb-0.5 max-sm:w-3"
              />
            </div>
            <div id="flex" className="flex flex-row justify-between max-sm:hidden">
              <Skeleton
                height={30}
                baseColor="#e5e5e5"
                duration={0.5}
                width={150}
                className="mb-0.5 max-sm:w-3"
              />
              <Skeleton
                height={30}
                baseColor="#e5e5e5"
                duration={0.5}
                width={150}
               className="mb-0.5 max-sm:w-3"
              />
            </div>
            <div id="flex" className="flex flex-row justify-between gap-2.5 max-sm:hidden">
              <Skeleton
                height={30}
                width={150}
                baseColor="#e5e5e5"
                duration={0.5}
                className="mb-0.5 max-sm:w-3"
              />
              <Skeleton
                height={30}
                width={80}
                baseColor="#e5e5e5"
                duration={0.5}
                className="mb-0.5 max-sm:w-3"
              />
            </div>
          </div>
          <div id="suggest-box" className="mt-1.5">
            <Skeleton
              height={40}
              baseColor="#e5e5e5"
              duration={0.5}
             className="mb-0.5 max-sm:w-3"
            />
          </div>
          <div id="fav-box" className="mt-1.5">
            <Skeleton
              baseColor="#e5e5e5"
              height={40}
              duration={0.5}
              className="mb-0.5 max-sm:w-3"
            />  
          </div>
        </div>
    </div>
  );
};

export default Loading;
