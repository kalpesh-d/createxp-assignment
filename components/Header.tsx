const Header = ({ heading, para }: { heading: string; para: string }) => {
  return (
    <div className="text-center mt-14 mb-12">
      <h1 className="text-4xl font-bold mb-3">{heading}</h1>
      <p className="text-lg text-gray-500">{para}</p>
    </div>
  );
};

export default Header;
