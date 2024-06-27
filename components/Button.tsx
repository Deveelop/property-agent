type ButtonProps ={
    type: 'button' | 'submit';
    title: string;
    icon?: React.ReactElement;
    variant: string;
    onClick?: () => void;
    full?: boolean
}

const Button = ({
    onClick,
    type,
    title,
    icon,
    variant,
    full
 }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`rounded-lg flex justify-center gap-3 items-center  ${variant} ${full && 'w-full'}`}>
     {icon && <>{icon}</> }
     <label className="text-[16px] font-[700] whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button
