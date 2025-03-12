import clsx from 'clsx';
import React, {useEffect, useRef, HTMLAttributes, ReactNode} from 'react';

interface TabItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  disabledClassName?: string;
  focus?: boolean;
  id?: string;
  selected?: boolean;
  selectedClassName?: string;
  tabIndex?: number;
  tabRef?: (node: HTMLLIElement | null) => void;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const nodeRef = useRef<HTMLLIElement | null>(null);

  const {
    children,
    className,
    disabled,
    disabledClassName,
    focus,
    id,
    selected,
    selectedClassName,
    tabIndex,
    tabRef,
    ...attributes
  } = props;

  useEffect(() => {
    if (selected && focus && nodeRef.current) {
      nodeRef.current.focus();
    }
  }, [selected, focus]);

  return (
    <li
      {...attributes}
      className={clsx(className, {
        [selectedClassName || '']: selected,
        [disabledClassName || '']: disabled,
      })}
      ref={(node) => {
        if (node) nodeRef.current = node;
        if (tabRef) tabRef(node);
      }}
      role='tab'
      id={id ? `tab${id}` : undefined}
      aria-selected={selected ? 'true' : 'false'}
      aria-disabled={disabled ? 'true' : 'false'}
      aria-controls={id ? `panel${id}` : undefined}
      tabIndex={tabIndex ?? (selected ? 0 : undefined)}
      data-rttab>
      {children}
    </li>
  );
};

export default TabItem;
