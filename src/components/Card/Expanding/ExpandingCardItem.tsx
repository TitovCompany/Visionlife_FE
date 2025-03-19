interface ExpandingCardItemProps {
 title: string;
 href: string;
}

const ExpandingCardItem = ({title, href}: ExpandingCardItemProps) => {
 return (
  <li className="px-2 rounded-2xl">
   <h3 className='hidden'>{title}</h3>
   <img
    src={href}
    alt={title}
    className='h-[600px] object-cover rounded-2xl'
   />
  </li>
 );
};

export default ExpandingCardItem;