import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './BackLink.css';

export function BackLink({ to = '/', children = 'Ко всем местам' }: {
  to?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link to={to} className="back-link">
      <ArrowLeftOutlined />
      <span>{children}</span>
    </Link>
  );
}

export default BackLink;
