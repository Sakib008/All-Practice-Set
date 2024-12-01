export const BookItem = (book)=>{
const {id,title,author,publisher,year,image,price,read,index} = book;
    
    return(<div className="m-auto flex flex-col items-center my-4 w-60 border-4 border-sky-400 rounded-xl p-2" key={id}>
            <div className='w-32 h-48'  >
                <img alt={title} src={image} className='w-full h-full' />
            </div>
            <div className="my-4">
                <p>Book No : {index+1}</p>
                <p>Title : {title}</p>
                <p>Price : $ {price}</p>
            
            <div className="my-4 flex flex-col items-start ">
                <button className='bg-sky-400 rounded-md text-lg px-2 mb-2'>Mark As Read</button>
                <button className='bg-sky-400 rounded-md text-lg px-2'>Add to Fav</button>
            </div>
            </div>
          </div>
)}