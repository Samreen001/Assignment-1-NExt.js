export default function Navbar() {
    return (
      <nav className="bg-red-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Services</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  