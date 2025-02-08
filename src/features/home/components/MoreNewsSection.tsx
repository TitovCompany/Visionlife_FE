import TextLink from '../../../components/TextLink.tsx';
import {LuCircleArrowRight} from 'react-icons/lu';

const MoreNewsSection = () => {
  return (
    <div className="flex h-full w-full justify-between gap-5">
      <div className="flex w-52 flex-col items-start justify-center gap-5">
        <h3 className="max-w-sm text-3xl leading-relaxed">
          더 많은 소식 확인하기
        </h3>
        <TextLink
          href="/"
          size="lg"
          className="ml-3 flex items-center gap-3 font-extrabold">
          <LuCircleArrowRight className="text-primary font-extrabold" />
          <span>모든 소식 보기</span>
        </TextLink>
      </div>
      <div className="w-1/2">
        <div className="w-full h-full py-10">
          <img src="/img/logo.png" alt="(주) 비전라이프 로고" />
        </div>
      </div>
    </div>
  );
};

export default MoreNewsSection;
