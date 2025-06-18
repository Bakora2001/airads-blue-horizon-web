
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="bg-blue-900 text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xs">Quick Links:</div>
          <div className="flex space-x-4 text-xs">
            <Link to="/admissions" className="hover:text-red-300 transition-colors">
              Online Admissions
            </Link>
            <a href="https://tveta.go.ke" target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
              TVETA
            </a>
            <a href="https://cdacc.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
              TVETA-CDACC
            </a>
            <a href="https://knec.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
              KNEC
            </a>
            <a href="https://nita.go.ke" target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
              NITA
            </a>
            <a href="https://katti.go.ke" target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
              KATTI
            </a>
            <a href="https://education.go.ke" target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
              MOE
            </a>
            <a href="mailto:staff@airads.ac.ke" className="hover:text-red-300 transition-colors">
              Staff Mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
