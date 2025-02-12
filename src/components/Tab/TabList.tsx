import { HTMLAttributes, ReactNode } from "react";

interface TabListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode; // 모든 React 요소 허용
}

/**
 * `TabList` 컴포넌트는 탭 네비게이션을 위한 리스트 래퍼입니다.
 * `<ul>` 태그를 렌더링하며, 추가적인 HTML 속성(`id`, `className`, `onClick` 등)을 지원합니다.
 *
 * @param {ReactNode} children - `TabList` 내부에 들어갈 요소들 (보통 `Tab` 컴포넌트)
 * @param {HTMLAttributes<HTMLUListElement>} props - 추가적인 HTML 속성 (`id`, `className`, `data-*`, `onClick` 등)
 *
 * @example
 * ```tsx
 * <TabList className="tabs">
 *   <li>탭 1</li>
 *   <li>탭 2</li>
 * </TabList>
 * ```
 *
 * @returns {JSX.Element} - `<ul>` 요소를 반환
 */
const TabList = (props: TabListProps): JSX.Element => {
  const { children, ...attributes } = props;
  return <ul {...attributes}>{children}</ul>;
};

export default TabList;