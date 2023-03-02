const Button = ({ children, className, onClick }) => {
    return (
      <button
        className={`p-2 rounded-md hover:ring-2 dark:hover:ring-white hover:ring-black ${className}`}
        onClick={onClick}
      >{children}</button>
    )
  }
  
  export default Button