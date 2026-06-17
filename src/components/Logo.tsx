export function Logo({
  className = "",
  strokeWidth = 1.15,
  color = "#F4846A",
}: {
  className?: string;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 82 101"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M68.232 71.856 48.69 83.15a4.606 4.606 0 0 1-4.607 0L12.71 65.013a4.603 4.603 0 0 1-2.304-3.992V24.748a4.61 4.61 0 0 1 2.304-3.992L44.084 2.62a4.591 4.591 0 0 1 4.606 0l29.793 17.22a4.605 4.605 0 0 1 1.745 6.193l-4.012 7.404a4.607 4.607 0 0 1-4.617 2.378 4.6 4.6 0 0 1-1.732-.582l-29.583-17.1a4.606 4.606 0 0 0-4.607 0L4.303 36.264A4.604 4.604 0 0 0 2 40.257v36.272a4.61 4.61 0 0 0 2.303 4.005L35.677 98.67a4.606 4.606 0 0 0 4.607 0l32.551-18.817a4.585 4.585 0 0 0 1.745-1.792v0c2.219-4.102-2.324-8.532-6.348-6.205Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
