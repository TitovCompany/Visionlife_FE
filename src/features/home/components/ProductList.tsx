import DummyImgBox from '../../../components/DummyImgBox.tsx';

interface Props {
  title: string;
  description: string;
}

const ProductList = ({title, description}: Props) => {
  return (
    <article className="mx-28 h-96 py-20">
      <div className="h-full flex gap-14">
        <div className="max-w-3xl">
          <h2 className="mb-3 text-3xl font-normal">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
        <DummyImgBox width="w-full" height="h-full" isCircle={false} />
      </div>
    </article>
  );
};

export default ProductList;
