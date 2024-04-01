
function Hero({title,imageUrl}) {
  return (
    <div className='hero container'>
   <div className="banner">
    <h1>{title}</h1>
    <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quod sequi minima voluptatum a perferendis illum, animi ex voluptates consectetur. Eaque, eum tempore sit possimus neque magni sed officia? Sequi!
Quos deserunt sint omnis dicta aperiam aspernatur voluptatem similique itaque, et consectetur, esse ipsum perspiciatis nam sit totam culpa voluptatum qui earum placeat! Optio corrupti sapiente molestiae vero eveniet odit


    </p>
   </div>
   <div className="banner">
    <img src={imageUrl} className='animated-image' />
    
   </div>
      
    </div>
  )
}

export default Hero;
