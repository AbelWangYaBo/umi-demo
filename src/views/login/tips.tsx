import { useRef, useState } from 'react';
import { Link } from 'umi';

interface IListItem {
  title: string;
  command: string;
  url: string;
  tip?: string;
}

export default () => {
  const list: IListItem[] = [
    {
      title: 'Merck India - Certificate of Analysis',
      command: '',
      url: '',
    },
    {
      title: 'COA and MSDS Download Procedure',
      command: '',
      url: '',
    },
    {
      title: 'Customer Service Setup',
      command: '',
      url: '',
    },
    {
      title: 'Goods Return Policy 2019',
      command: '',
      url: '',
    },
    {
      title: 'CRM Access Form',
      command: '',
      url: '',
    },
    {
      title: 'Merck Life Science Price List 2022',
      command: '',
      url: '',
      tip: 'New - October 2022',
    },
    {
      title: 'Biomonitoring India Product Catalogue 2020',
      command: '',
      url: '',
    },
  ];
  const [tipList, setTipList] = useState<IListItem[]>([]);
  const getTipList = async () => {
    setTimeout(() => {
      setTipList(list);
    }, 500);
  };
  getTipList();
  return (
    <div
      style={{
        background: '#fff',
        fontSize: '12px',
        padding: '10px',
      }}
    >
      {tipList.map((d) => {
        return (
          <div key={d.title}>
            <Link to={d.url || '/'}>{d.title}</Link>
          </div>
        );
      })}
    </div>
  );
};
