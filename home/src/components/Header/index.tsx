interface HeaderProps {
  name: string;
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      My Header
      {name}
    </div>
  );
};
