import TextLink from '../../../components/TextLink.tsx';
import {LuCircleArrowRight} from 'react-icons/lu';

const MoreNewsSection = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
      <div className="flex w-full flex-col items-center justify-center gap-5 lg:w-1/2 lg:items-start">
        <h3 className="max-w-sm text-2xl leading-relaxed font-semibold sm:text-3xl">
          더 많은 소식 확인하기
        </h3>
        <TextLink
          href="/company/news"
          size="lg"
          className="flex items-center gap-3 font-extrabold">
          <LuCircleArrowRight className="text-primary font-extrabold" />
          <span>모든 소식 보기</span>
        </TextLink>
      </div>
      <div className="hidden w-full lg:block md:w-1/2">
        <div className="flex h-full w-full justify-center py-10">
          <img
            src="/img/logo.png"
            alt="(주) 비전라이프 로고"
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MoreNewsSection;
