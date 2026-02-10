
function ArtGallery() {
  return (
    <div>
        <h1 className="text-2xl  border-b-1 font-bold font-serif border-black/20 dark:border-white/20 pb-2" >Art Gallery</h1>
         <h2 className="text-lg font-bold font-serif  mt-5 pb-2">Nature</h2>
        <div className="flex justify-center  gap-3 mt-5">
            <div className="flex  gap-5">
                <div className="p-5 flex  flex-col rounded-md backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/10 items-center">
                    <img src="Gallery/image.png" alt="sun" className="h-50 bg-cover"/>
                </div>
                
            </div>

        </div>
         <h2 className="text-lg font-bold font-serif  mt-5 pb-2">City</h2>
        <div className="flex justify-center gap-3 mt-5">
            <div className="flex  gap-5">
                <div className="p-5 flex flex-col rounded-md backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/10 items-center">
                    <img src="Gallery/imageCity.png" alt="sun" className="h-50 bg-cover"/>
                </div>
            </div>
           
        </div>
    </div>

  )
}

export default ArtGallery;