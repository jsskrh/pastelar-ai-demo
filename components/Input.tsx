const Input = () => {
  return (
    <div className="relative after:absolute after:border-b after:-bottom-1 after:border-black after:w-full after:left-0">
      <input
        type="text"
        className="outline-none placeholder:text-gray-200 w-72"
        placeholder="Nom"
      />
    </div>
  );
};

export default Input;
