import { Link } from 'react-router-dom';
import './MenuBlock.css'; // opcional para estilização

interface MenuBlockProps {
  title: string;
  path: string;
}
function MenuBlock({ title, path }: MenuBlockProps) {
  return (
    <Link to={path} className="menu-block">
      <div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default MenuBlock;