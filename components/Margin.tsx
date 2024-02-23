const Margin = ({ position }: { position: string }) => {
  return (
    <div
      className={`w-8 h-full bg-neutral-300 ${
        position === "left" ? "rounded-l-2xl" : "rounded-r-2xl"
      }`}
    />
  );
};

export default Margin;
