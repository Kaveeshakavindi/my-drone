import { stickyContent } from "../data";
export default function StoryBehind() {
  return (
    <div className="font-sans p-[4rem] text-black sticky z-100 w-[100vw] bg-white flex flex-col justify-center items-center ">
      <div className="text-5xl text-orange-600">The Story behind</div>
      {stickyContent.map((content, index) => (
        <section
          key={index}
          className="py-[5rem] grid grid-cols-2 items-center justify-center  gap-[4rem]"
        >
          {index % 2 === 0 && (
            <div className="flex justify-center items-center">
              <img src={content.img} className="max-h-[20%] object-contain" />
            </div>
          )}
          <div className="flex flex-col gap-4 text-black">
            <p className="text-2xl font-bold ">{content.title}</p>
            <p>{content.description}</p>
            <p className="font-bold">{content.sub.head}</p>
            <p>{content.sub.text}</p>
          </div>
          {index % 2 === 1 && (
            <div className="flex justify-center items-center">
              <img src={content.img} className="max-h-[20%] object-contain" />
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
