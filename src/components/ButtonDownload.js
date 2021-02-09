const DownloadButton = ({ link, text }) => (
  <div>
    <a
      href={link}
      className="flex items-center justify-center px-4 text-sm font-semibold leading-none text-white bg-blue-500 rounded shadow-sm h-9 whitespace-nowrap"
      rel="noopener noreferrer"
      target="_blank"
      download
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="16"
        height="16"
        fill="currentColor"
        className="mr-0.5 -ml-0.5 fill-current"
      >
        <path
          fillRule="evenodd"
          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
          clipRule="evenodd"
        />
      </svg>
      {text}
    </a>
  </div>
);

export default DownloadButton;
