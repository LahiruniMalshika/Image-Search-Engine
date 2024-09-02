const Image = ({ data }) => {
    return (
      <a href={data.urls.regular} target="_blank" rel="noreferrer" download={Image}>
        <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
        download
      </a>
    )
  }
  
  export default Image