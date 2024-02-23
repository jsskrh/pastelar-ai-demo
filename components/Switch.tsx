const Switch = () => {
  return (
    <div>
      <label htmlFor="switch" className="cursor-pointer">
        <div className="p-0.5 rounded-full w-10 transition-all shadow-inner bg-neutral-200 has-[:checked]:bg-green-400">
          <input
            type="checkbox"
            name="switch"
            id="switch"
            className="hidden peer"
          />
          <div className="h-4 w-4 bg-white rounded-full peer-checked:translate-x-[20px] transition shadow-inner"></div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
