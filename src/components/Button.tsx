import { useTheme } from "next-themes";

interface ButtonProps { 
  children: React.ReactNode, 
  size: 'base' | 'sm' | 'lg',
  type: 'button' | 'submit' | 'reset',
  onBtnClick: () => void
}

export default function Button({ children, size = 'base', type = 'button', onBtnClick, ...btnProps }: ButtonProps) {
  const { theme } = useTheme();
  return (
    <button
      type={type}
      className={`bg-${theme}-primary text-white font-semibold rounded shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${theme}-primary hover:bg-${theme}-700 active:bg-${theme}-800 focus:ring-${theme}-500 focus:ring-opacity-50 transition duration-150 ease-in-out px-${size} py-${size}`}
      onClick={onBtnClick}
      {...btnProps }
    >
      {children}
    </button>
  );
}