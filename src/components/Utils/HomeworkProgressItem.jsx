import { IoIosArrowForward } from "react-icons/io";
import CircularProgressBar from "../Home/RightSection/ProgressBar";

const HomeworkProgressItem = ({ progress, title, pages, number }) => (
  <div
    className={`mt-4 shadow  cursor-pointer transition-all  hover:scale-[1.02]
    
    ${number === true ? "bg-sky-800 text-white" : "bg-[#fbfbfb]"}
    hover:bg-sky-800 group  
     flex justify-between items-center rounded-lg p-3.5`}
  >
    <div className="flex items-center gap-3">
      <div>
        <CircularProgressBar progress={progress} number={number} />
      </div>
      <div className="flex flex-col">
        <p className="text-xs font-semibold group-hover:text-white/90">
          {title}
        </p>
        <p className="text-xs group-hover:text-white/80">{pages}</p>
      </div>
    </div>
    <button className="p-2">
      <IoIosArrowForward
        className={`w-5 h-5 text-black/50  group-hover:text-white/80  ${
          number === true ? "text-white" : "text-black/50"
        }`}
      />
    </button>
  </div>
);

export default HomeworkProgressItem;
