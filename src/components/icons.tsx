import { SVGProps } from "react";

export const Dots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="gray"
      d="M3.75 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);

export const Shapes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#262626"
      d="M20.5 16.866c0 2-1.647 3.634-3.693 3.634-2.046 0-3.693-1.634-3.693-3.634s1.646-3.634 3.693-3.634c2.046 0 3.693 1.634 3.693 3.634Zm-9.733-13.07a.585.585 0 0 1 1.017 0l3.372 6.117c.2.364-.06.828-.509.828H7.904a.562.562 0 0 1-.508-.828l3.371-6.117ZM3.5 14.181a.57.57 0 0 1 .577-.562h5.446a.57.57 0 0 1 .577.562v5.37a.57.57 0 0 1-.577.561H4.077a.57.57 0 0 1-.577-.562v-5.369Z"
    />
  </svg>
);

export const Tag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="gray"
      d="m19.041 11.96-8.575 8.575a.5.5 0 0 1-.707 0l-6.374-6.373a.5.5 0 0 1 0-.707l8.575-8.576a.5.5 0 0 1 .413-.143l5.696.678a.5.5 0 0 1 .437.438l.678 5.695a.5.5 0 0 1-.143.413Z"
    />
    <circle
      cx={14.739}
      cy={9.182}
      r={1.023}
      stroke="gray"
      transform="rotate(45 14.739 9.182)"
    />
  </svg>
);

export const Receipt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="gray"
      d="M6.979 19.009 5.855 20.14A.5.5 0 0 1 5 19.788V3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v16.288a.5.5 0 0 1-.855.352l-1.124-1.131a.5.5 0 0 0-.709 0l-1.624 1.634a.5.5 0 0 1-.71 0l-1.623-1.634a.5.5 0 0 0-.71 0l-1.624 1.634a.5.5 0 0 1-.709 0L7.688 19.01a.5.5 0 0 0-.71 0Z"
    />
    <path stroke="gray" strokeLinecap="round" d="M8 7h8M8 11h8M8 15h8" />
  </svg>
);

export const Blocks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="gray"
      d="M4 14a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5ZM11 14a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5ZM4 7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Z"
    />
    <rect width={6} height={6} x={14} y={4} stroke="gray" rx={3} />
  </svg>
);

export const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#D4D4D4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.867-2.867"
    />
  </svg>
);

export const Filter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#858585"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8h12M9 12h6M11 16h2"
    />
  </svg>
);

export const UpDownArrows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#858585"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19 15-3 3-3-3M16 18V6M5 9l3-3 3 3M8 6v12"
    />
  </svg>
);
