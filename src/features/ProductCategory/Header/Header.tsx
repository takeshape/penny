export interface HeaderProps {
  header: {
    text: {
      primary: string;
      secondary: string;
    }
  }
}

const Header: React.FC<HeaderProps> = ({header: {text}}) => {
  return (
    <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{text.primary}</h1>
      <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
        {text.secondary}
      </p>
    </div>
  )
}

export default Header;
