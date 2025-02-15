import React, {memo, useMemo} from 'react';
import {Link} from 'react-router-dom';

interface FooterColumnProps {
  title: string;
  subLinks: SubLinks[];
}

interface SubLinks {
  name: string;
  path: string;
}

const FooterColumn: React.FC<FooterColumnProps> = memo((props) => {
  const {title, subLinks} = props;
  const sortedLinks = useMemo(() => {
    return [...subLinks].sort((a, b) => a.name.localeCompare(b.name));
  }, [subLinks]);

  return (
    <div className="flex flex-col items-center">
      <strong className="text-lg font-semibold mb-4">
        {title}
      </strong>
      <ul className="space-y-2 text-center">
        {sortedLinks.map((item, index) => (
          <li key={index} className="hover:text-primary transition">
            <Link to={item.path} className="hover:text-primary transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

FooterColumn.displayName = "FooterColumn";
export default FooterColumn;