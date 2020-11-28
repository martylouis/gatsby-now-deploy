import Timestamp from '@components/Timestamp';

const DownloadButton = ({ link, text }) => (
  <div>
    <a
      href={link}
      className="flex items-center justify-center h-10 px-3 font-bold leading-none text-white whitespace-no-wrap bg-blue-600 rounded hover:bg-blue-700"
      rel="noopener noreferrer"
      target="_blank"
      download
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 mr-1 -ml-1 fill-current"
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
