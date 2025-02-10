import DummyImgBox from '../../../components/DummyImgBox.tsx';
import ButtonLink from '../../../components/ButtonLink.tsx';

interface ProductListProps {
  title: string;
  description: string;
  type: '_left' | '_right';
}

const ProductList = ({
  title,
  description,
  type
}: ProductListProps) => {
  return (
    <article className="mx-10 h-auto py-20">
      <div
        className={`flex h-full gap-14 ${type === '_right' ? 'flex-row-reverse' : ''}`}>
        <DummyImgBox width="w-full" height="h-[349px]" isCircle={false} />
        <div className="flex max-w-3xl flex-col items-start gap-5">
          <h2 className="w-full max-w-2xl text-3xl font-normal">{title}</h2>
          <p className="text-lg">{description}</p>
          <ButtonLink href={'/'} size="md">
            더 알아보기
          </ButtonLink>
        </div>
      </div>
    </article>
  );
};

export default ProductList;
