import { ContentCard } from "./ContentCard";
import CONTENT_DUMMY from "../../utils/ContentDummy";
export const Content = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {
        CONTENT_DUMMY.map((item, index)=> {
          return (
            <ContentCard data={item} key={index}/>
          )
        })
      }
    </div>
  )
}