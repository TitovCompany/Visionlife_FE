import clsx from 'clsx';

interface NrectTableProps {
 className?: string;
}

const NrectTable = ({className}: NrectTableProps) => {
 return (
  <table className={clsx('w-full border-collapse border border-gray-300 text-left', className)}>
   <thead className='bg-gray-200'>
   <tr>
    <th className='border border-gray-300 p-3'>특징</th>
    <th className='border border-gray-300 p-3'>기존 잉크</th>
    <th className='border border-gray-300 p-3'>N-RECT</th>
   </tr>
   </thead>
   <tbody>
   <tr>
    <td className='border border-gray-300 p-3'>건조 방식</td>
    <td className='border border-gray-300 p-3'>고온 건조 (잉크 두꺼움)</td>
    <td className='border border-gray-300 p-3'>
     저온 자연 건조 (섬유 친화적)
    </td>
   </tr>
   <tr>
    <td className='border border-gray-300 p-3'>색감 지속력</td>
    <td className='border border-gray-300 p-3'>변색 가능성 있음</td>
    <td className='border border-gray-300 p-3'>고품질 색 유지</td>
   </tr>
   <tr>
    <td className='border border-gray-300 p-3'>환경 영향</td>
    <td className='border border-gray-300 p-3'>폐수 배출 多</td>
    <td className='border border-gray-300 p-3'>무폐수 공정</td>
   </tr>
   </tbody>
  </table>
 );
};

export default NrectTable;