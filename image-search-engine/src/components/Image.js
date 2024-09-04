// const Image = ({ data }) => {
//     return (
//       <a href={data.urls.regular} target="_blank" rel="noreferrer" download={Image}>
//         <img className="h-72 w-full object-cover rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105" src={data.urls.small} alt={data.alt_description} />

//       </a>
//     )
//   }

//   export default Image
const Image = ({ data }) => {
  const downloadImage = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className="w-full h-full object-cover"
      />

      {/* Always visible download button */}
      <button
        onClick={() => downloadImage(data.urls.full, `${data.id}.jpg`)}
        className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
        aria-label="Download Image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-download"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      </button>
    </div>
  );
};

export default Image;

