type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  materials: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.5 16.8659C20.5 18.8663 18.8532 20.5 16.8069 20.5C14.7605 20.5 13.1137 18.8663 13.1137 16.8659C13.1137 14.8655 14.7605 13.2318 16.8069 13.2318C18.8532 13.2318 20.5 14.8655 20.5 16.8659ZM10.7672 3.7963C10.985 3.40123 11.5666 3.40123 11.7844 3.7963L15.1557 9.91314C15.3562 10.277 15.0956 10.7409 14.6471 10.7409H7.9045C7.45597 10.7409 7.19539 10.277 7.39593 9.91314L10.7672 3.7963ZM3.5 14.1814C3.5 13.8776 3.7517 13.6193 4.07718 13.6193H9.52289C9.84837 13.6193 10.1001 13.8776 10.1001 14.1814V19.5504C10.1001 19.8541 9.84837 20.1124 9.52289 20.1124H4.07718C3.7517 20.1124 3.5 19.8541 3.5 19.5504V14.1814Z"
        stroke="currentColor"
      />
    </svg>
  ),
  products: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.0413 11.9599L10.4658 20.5354C10.2705 20.7307 9.95392 20.7307 9.75865 20.5354L3.38503 14.1618C3.18977 13.9665 3.18977 13.6499 3.38503 13.4547L11.9606 4.87914C12.069 4.77077 12.221 4.71808 12.3732 4.7362L18.0688 5.41424C18.2981 5.44154 18.4789 5.62232 18.5062 5.85163L19.1842 11.5472C19.2024 11.6994 19.1497 11.8515 19.0413 11.9599Z"
        stroke="currentColor"
      />
      <circle
        cx="14.7385"
        cy="9.18152"
        r="1.02286"
        transform="rotate(45 14.7385 9.18152)"
        stroke="currentColor"
      />
    </svg>
  ),
  fulfillment: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.97869 19.009L5.85465 20.14C5.54011 20.4565 5 20.2338 5 19.7876V3.5C5 3.22386 5.22386 3 5.5 3H18.5C18.7761 3 19 3.22386 19 3.5V19.7876C19 20.2338 18.4599 20.4565 18.1454 20.14L17.0213 19.009C16.8258 18.8123 16.5075 18.8123 16.312 19.009L14.688 20.6432C14.4925 20.8399 14.1742 20.8399 13.9787 20.6432L12.3546 19.009C12.1591 18.8123 11.8409 18.8123 11.6454 19.009L10.0213 20.6432C9.8258 20.8399 9.50753 20.8399 9.31202 20.6432L7.68798 19.009C7.49247 18.8123 7.1742 18.8123 6.97869 19.009Z"
        stroke="currentColor"
      />
      <path d="M8 7H16" stroke="currentColor" strokeLinecap="round" />
      <path d="M8 11H16" stroke="currentColor" strokeLinecap="round" />
      <path d="M8 15H16" stroke="currentColor" strokeLinecap="round" />
    </svg>
  ),
  integrations: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 14C4 13.4477 4.44772 13 5 13H10C10.5523 13 11 13.4477 11 14V19C11 19.5523 10.5523 20 10 20H5C4.44772 20 4 19.5523 4 19V14Z"
        stroke="currentColor"
      />
      <path
        d="M11 14C11 13.4477 11.4477 13 12 13H17C17.5523 13 18 13.4477 18 14V19C18 19.5523 17.5523 20 17 20H12C11.4477 20 11 19.5523 11 19V14Z"
        stroke="currentColor"
      />
      <path
        d="M4 7C4 6.44772 4.44772 6 5 6H10C10.5523 6 11 6.44772 11 7V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V7Z"
        stroke="currentColor"
      />
      <rect x="14" y="4" width="6" height="6" rx="3" stroke="currentColor" />
    </svg>
  ),
  dots: (props: IconProps) => (
    <svg
      width="8"
      height="2"
      viewBox="0 0 8 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.75 1C1.75 1.41421 1.41421 1.75 1 1.75C0.585786 1.75 0.25 1.41421 0.25 1C0.25 0.585786 0.585786 0.25 1 0.25C1.41421 0.25 1.75 0.585786 1.75 1Z"
        fill="currentColor"
      />
      <path
        d="M4.75 1C4.75 1.41421 4.41421 1.75 4 1.75C3.58579 1.75 3.25 1.41421 3.25 1C3.25 0.585786 3.58579 0.25 4 0.25C4.41421 0.25 4.75 0.585786 4.75 1Z"
        fill="currentColor"
      />
      <path
        d="M7.75 1C7.75 1.41421 7.41421 1.75 7 1.75C6.58579 1.75 6.25 1.41421 6.25 1C6.25 0.585786 6.58579 0.25 7 0.25C7.41421 0.25 7.75 0.585786 7.75 1Z"
        fill="currentColor"
      />
    </svg>
  ),
  logout: (props: IconProps) => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 25H12.6667C12.2246 25 11.8007 24.8361 11.4882 24.5444C11.1756 24.2527 11 23.857 11 23.4444V12.5556C11 12.143 11.1756 11.7473 11.4882 11.4556C11.8007 11.1639 12.2246 11 12.6667 11H16"
        stroke="currentColor"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 22L25 18L21 14"
        stroke="currentColor"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25 18H16"
        stroke="currentColor"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};
