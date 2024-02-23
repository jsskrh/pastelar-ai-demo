const Button = ({
  type,
  text,
  handler,
}: {
  type: string;
  text: string;
  handler?: () => void;
}) => {
  return (
    <button
      className={`text-xs border-2 rounded-full py-0.5 px-4 active:text-white ${
        type === "success"
          ? "border-[rgb(27,106,34)] active:bg-[rgb(27,106,34)]"
          : "border-neutral-400 active:bg-neutral-400"
      }`}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
