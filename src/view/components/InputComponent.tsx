type InputComponentProps = {
  id: string,
  label: string;
  type: string,
  placeholder?: string;
  autoComplete?: string;
}

export default function InputComponent({ id, label, type, placeholder = '', autoComplete = '' }: InputComponentProps) {
  return <label htmlFor={id}
    className="flex flex-col gap-[6px] w-full max-w-[400px]">
    {label}
    <input type={type} name={id} id={id} placeholder={placeholder} autoComplete={autoComplete}
      className="w-full h-[50px] p-[20px] border-gray-900 border-[3px] rounded-full bg-transparent" />
  </label>
}