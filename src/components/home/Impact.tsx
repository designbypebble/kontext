import { Tag } from "../ui/Tag";

import { P } from "../ui/typography/P";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
function Impact() {
  return (
    <LayoutWrapper className="flex">
      <ImpactSVG />
      {/* Side Div */}
      <div className="w-[109px]"></div>
      {/* Side Div Ended*/}

      <div className="w-full flex justify-center items-center border-x-1 border-gridline">
        <div className="flex flex-col p-[10px] gap-4 items-center">
          {/* Impact */}
          <div className="flex flex-row items-center">
            <div className="w-[40px] h-[1px] bg-gridline"></div>
            <Tag text="IMPACT" className="text-center px-4 py-2" />
            <div className="w-[40px] h-[1px] bg-gridline"></div>
          </div>
          {/* Impact Ended */}

          {/* Header */}
          <div className="flex flex-col items-center">
            <h1 className="max-w-full text-6xl font-medium leading-[1em]  max-md:text-4xl">
              From generic
            </h1>
            <h1 className="max-w-full text-6xl font-medium leading-none max-md:text-4xl text-accent">
              to personal
            </h1>
          </div>
          {/* Header Ended */}

          <P>See how Kontext transforms your app in three steps.</P>
        </div>
      </div>

      {/* Side Div */}
      <div className="w-[109px]"></div>
      {/* Side Div Ended*/}

      <ImpactSVG />
    </LayoutWrapper>
  );
}

export default Impact;

export function ImpactSVG() {
  return (
    <div className="flex flex-row items-center py-[36px] px-[25px]">
      <svg
        width="16"
        height="293"
        viewBox="0 0 16 293"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="7.75"
          y1="293"
          x2="7.75"
          y2="203"
          stroke="black"
          stroke-opacity="0.25"
          stroke-width="0.5"
        />
        <line
          x1="7.75"
          y1="90"
          x2="7.75"
          y2="1.09278e-08"
          stroke="black"
          stroke-opacity="0.25"
          stroke-width="0.5"
        />
        <path
          opacity="0.3"
          d="M13.32 176.937L13.32 179.817L3 179.817L3 176.937L3.84 176.937L3.84 178.857L12.48 178.857L12.48 176.937L13.32 176.937ZM12 166.626L10.992 166.626L10.992 164.502L4.488 164.502L4.488 166.626L3.48 166.626L3.48 161.346L4.488 161.346L4.488 163.47L10.992 163.47L10.992 161.346L12 161.346L12 166.626ZM11.04 157.247L4.44 158.855L4.44 158.759L12 158.759L12 159.791L3.48 159.791L3.48 158.231L10.488 156.551L10.488 157.031L3.48 155.351L3.48 153.791L12 153.791L12 154.823L4.44 154.823L4.44 154.727L11.04 156.335L11.04 157.247ZM12 152.115L3.48 152.115L3.48 149.523C3.48 148.931 3.584 148.415 3.792 147.975C4 147.535 4.3 147.195 4.692 146.955C5.076 146.715 5.54 146.595 6.084 146.595C6.628 146.595 7.096 146.715 7.488 146.955C7.872 147.195 8.168 147.535 8.376 147.975C8.584 148.415 8.688 148.931 8.688 149.523L8.688 151.083L12 151.083L12 152.115ZM7.68 151.083L7.68 149.643C7.68 148.971 7.544 148.475 7.272 148.155C6.992 147.835 6.596 147.675 6.084 147.675C5.564 147.675 5.168 147.835 4.896 148.155C4.624 148.475 4.488 148.971 4.488 149.643L4.488 151.083L7.68 151.083ZM12 145.688L3.48 143.096L3.48 141.704L12 139.112L12 140.216L4.416 142.4L12 144.584L12 145.688ZM9.576 144.38L8.568 144.02L8.568 140.78L9.576 140.42L9.576 144.38ZM12.192 135.181C12.192 135.861 12.012 136.437 11.652 136.909C11.292 137.381 10.78 137.741 10.116 137.989C9.452 138.229 8.664 138.349 7.752 138.349C6.832 138.349 6.04 138.229 5.376 137.989C4.712 137.741 4.2 137.381 3.84 136.909C3.472 136.437 3.288 135.861 3.288 135.181C3.288 134.429 3.536 133.789 4.032 133.261C4.52 132.733 5.204 132.381 6.084 132.205L6.156 133.309C5.54 133.445 5.076 133.681 4.764 134.017C4.452 134.345 4.296 134.733 4.296 135.181C4.296 135.637 4.432 136.021 4.704 136.333C4.968 136.637 5.36 136.869 5.88 137.029C6.392 137.189 7.016 137.269 7.752 137.269C8.48 137.269 9.1 137.189 9.612 137.029C10.124 136.869 10.516 136.637 10.788 136.333C11.052 136.021 11.184 135.637 11.184 135.181C11.184 134.685 11.012 134.265 10.668 133.921C10.324 133.577 9.812 133.345 9.132 133.225L9.192 132.133C10.128 132.285 10.864 132.629 11.4 133.165C11.928 133.701 12.192 134.373 12.192 135.181ZM12 128.525L4.488 128.525L4.488 131.129L3.48 131.129L3.48 124.889L4.488 124.889L4.488 127.493L12 127.493L12 128.525ZM13.32 115.059L12.48 115.059L12.48 113.139L3.84 113.139L3.84 115.059L3 115.059L3 112.179L13.32 112.179L13.32 115.059Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
