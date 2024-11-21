import CloseIcon from "@mui/icons-material/Close";

interface FilterInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

const FilterInput = ({
  placeholder,
  value,
  onChange,
  onClear,
}: FilterInputProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input-style"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default FilterInput;
