const CloseWideIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="none"
      stroke="currentColor"
      strokeWidth="1"   // 👈 weight here (1–3 ideal)
      strokeLinecap="round"
      >
      <path d="M3.404 2.343a.5.5 0 0 1 .707 0L8 6.232l3.889-3.889a.5.5 0 1 1 .707.707L8.707 6.939l3.889 3.889a.5.5 0 0 1-.707.707L8 7.646l-3.889 3.889a.5.5 0 0 1-.707-.707l3.889-3.889-3.889-3.889a.5.5 0 0 1 0-.707z" />
    </g>
  </svg>
);

export default CloseWideIcon;
