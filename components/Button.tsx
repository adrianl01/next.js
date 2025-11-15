type MyButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function MyButton({ children, className, onClick }: MyButtonProps) {
  className +=
    " py-2 px-4 bg-blue-500 w-[200px] text-white rounded hover:bg-blue-600 text-center transition-colors duration-300";
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;
