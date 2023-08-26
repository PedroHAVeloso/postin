type InputComponentProps = {
  id: string,
  label: string;
  type: string,
  placeholder?: string;
  autoComplete?: string;
  value?: string,
  name?: string,
  onChange?: React.ChangeEventHandler,
}

export default function InputComponent({ id, label, type, placeholder, autoComplete, value, onChange, name }: InputComponentProps) {
  return <label htmlFor={id}
    className="flex flex-col gap-[6px] w-full max-w-[400px]">
    {label}
    <input type={type} name={name} id={id} placeholder={placeholder} autoComplete={autoComplete} value={value} required
      onChange={onChange}
      className="w-full h-[50px] p-[20px] border-gray-900 border-[3px] rounded-full bg-transparent" />
  </label>
}