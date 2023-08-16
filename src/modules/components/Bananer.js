import { CardSlider } from "./CardSlider"
export const Banner =  () => {
  return (
    <div id="banner-container">
      <div className="lg:w-10/12 w-full mx-auto lg:h-[70vh] md:h-[40vh] md:mt-24 mt-10 md:mb-0 mb-10 relative">
        <CardSlider  />
      </div>
    </div>
  )
}