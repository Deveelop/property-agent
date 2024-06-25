import Image from "next/image"

const Hero = () => {
  return (
    <section className="min-h-[1800px] h-full max-h-[640px] mb-8 xl:mb-24">
        <div className=" flex flex-col lg:flex-row">
            <div className=" lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
            <h1 className=" text-4xl lg:text-[58px] font-semibold leading-none mb-6">
        <span className=" text-orange-500">Rent, Buy, Sell</span> Your Property With Us.
      </h1>
      <p className=" max-w-[480px] mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, mollitia. Dolores tempore quos facilis repellat qui. Porro commodi quam atque. Voluptas perferendis explicabo provident voluptatum ducimus architecto quod aliquid quidem.</p>
    
            </div>
            <div className=" hidden flex-1 md:flex justify-end items-end">
                <Image src='/house-banner.png' alt="banner" width={600} height={5}/>
            </div>
        </div>
     </section>
  )
}

export default Hero
