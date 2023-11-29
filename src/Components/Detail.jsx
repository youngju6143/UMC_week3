
function Detail({item, index}) {
    return (
        <div id={`overview-${index}`} className='overview' onMouseOut={() => {
            document.getElementById(`overview-${index}`).style.opacity='0'  
        }} onMouseOver={() => {
            document.getElementById(`overview-${index}`).style.opacity='100%'
       }}>
          <p>{item.title}</p>
          <p>{item.overview}</p>
        </div>
    )
  }
  
  export default Detail