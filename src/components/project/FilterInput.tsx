import CloseIcon from "@mui/icons-material/Close";

interface FilterInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  borderColor: string;
}

const FilterInput = ({
  placeholder,
  value,
  onChange,
  onClear,
  borderColor,
}: FilterInputProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border-2 px-4 py-2 ${borderColor}`}
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
