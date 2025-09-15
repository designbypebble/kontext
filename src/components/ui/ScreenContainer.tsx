export default function ScreenContainer(){
    return(<>
    <div className="flex flex-col rounded-lg border-[0.5px] border-black/25">
        {/* Header */}
        <div className="flex w-full  bg-[FAFCFB] border-b-[0.5px] border-black/25">
        <div className="flex gap-2 px-4 py-[10px] border-r-[0.5px] border-black/25">
            <div className="w-3 h-3 border-[0.5px] border-black/25 rounded-full"></div>
            <div className="w-3 h-3 border-[0.5px] border-black/25 rounded-full"></div>
            <div className="w-3 h-3 border-[0.5px] border-black/25 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center w-full"><p>Without Context</p></div>
        
        </div>
        {/* Header Ends*/}

        {/* Text */}
<div className="flex flex-col px-8 py-6 gap-8">
            <p className="max-w-[350px]">We are building a developer platform designed to make it easier to integrate secure, reliable functionality into applications.</p>
        <p className="max-w-[350px]">We are building a developer platform designed to make it easier to integrate secure, reliable functionality into applications.</p>
        <p className="max-w-[350px]">We are building a developer platform designed to make it easier to integrate secure, reliable functionality into applications.</p>
</div>
        {/* Text Ends */}


    </div>
    </>)
}