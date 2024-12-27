const Checkbox = ({ id, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <input type="checkbox" id={id} className="h-4 w-4" />
      <label htmlFor={id} className="text-sm">{label}</label>
    </div>
  );
};

export default Checkbox; // Default export
