import React from 'react'

function Biography({imageUrl}) {
  return (
    <div className='container biography'>
    <div className="banner">
      <img src={imageUrl} alt="aboutImg" />
    </div>
    <div className="banner">
      <p>Biography</p>
      <h3>Who We Are</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque beatae illo velit provident vero corrupti, nostrum quaerat animi eligendi officia ipsa placeat tenetur nam totam impedit aperiam suscipit architecto amet consectetur ducimus expedita ab. Obcaecati officiis, nisi repellat reprehenderit culpa eius similique sint molestiae temporibus ullam tempora consectetur dicta.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ab.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae fugit iste deserunt non quasi similique voluptates, deleniti animi, asperiores, dolorem excepturi tenetur praesentium adipisci! Neque voluptatum dicta aliquid eum iste!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, reiciendis! Nostrum neque expedita quo voluptas!</p>
      <p>Lorem, ipsum dolor.</p>
    </div>
      
    </div>
  )
}

export default Biography
