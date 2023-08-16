import Image from "next/image";
export const ContentCard = ({data}) => {
  const className = `p-5 hover:cursor-pointer card-container ${data.color}`
  return (
    <div className={className}>
      <div className="h-full w-full flex justify-between items-center p-5 card-body relative">
        <div className="uppercase text-left">
          <h1 className="lg:text-4xl text-xl font-bold text-white">{data.title}</h1>
          <p className="lg:text-2xl text-lg font-bold text-white">From ${data.price}</p>
        </div>
        <div className="mx-4 w-9/12">
          <Image src={data.image} width={800} height={800} className="card-image relative" />
        </div>
      </div>
    </div>
  )
}