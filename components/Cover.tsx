import Outer from "./Outer";
import Inner from "./Inner";

const Cover = () => {
  return (
    <div className="has-[#flip-page:checked]:[transform:rotateY(-180deg)] [transform-style:preserve-3d] transition-all duration-1000 absolute top-0 left-0 w-full h-full rounded-2xl origin-left">
      <Outer />
      <Inner />
    </div>
  );
};

export default Cover;
