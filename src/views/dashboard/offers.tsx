import styles from './offers.less';

import { Col, Row, Card, List, Tooltip, Divider, Descriptions } from 'antd';

import { DownloadOutlined } from '@ant-design/icons';

interface IItem {
  title: string;
  data?: string[];
}

const Item = ({ title }: IItem) => {
  return (
    // <div className={styles['item-container']}>
    //   <div className={styles['item-box']}>
    //     <div className={styles['item-legend']}>{title}</div>
    //   </div>
    // </div>
    <div className={styles['item-container']}>
      <Card title={title} bordered={true}>
        <div className={styles['item-box']}></div>
      </Card>
    </div>
  );
};

const ListItem = ({ title, data }: IItem) => {
  return (
    <div className={styles['item-container']}>
      <List
        // header={
        //   <div
        //     style={{
        //       textOverflow: 'ellipsis',
        //       overflow: 'hidden',
        //       wordBreak: 'break-all',
        //       whiteSpace: 'nowrap',
        //     }}
        //     title={title}
        //   >
        //     {title}
        //   </div>
        // }
        header={
          <Tooltip title={title}>
            <div
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                wordBreak: 'break-all',
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </div>
          </Tooltip>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

const DownloadList = ({ list }) => {
  return (
    <Descriptions title="Responsive Descriptions" bordered column={1}>
      {list.map((item) => (
        <Descriptions.Item label={item.label}>
          {item.children?.map((l) => (
            <div
              style={{
                margin: '2px 0',
              }}
            >
              <a href={`#${l.label}`}>
                <DownloadOutlined /> {l.label}
              </a>
            </div>
          ))}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

const Offers = () => {
  const list = [
    {
      title: 'Scheme / Spot Offer',
    },
    {
      title: 'New Introduction / Discontinuation',
    },
    {
      title: 'End User Declaration (EUD)',
    },
    {
      title: 'HSN / GST Document',
    },
  ];

  const downloadList = [
    {
      label: 'EUD Format for Methanol for Maharashtra',
      children: [
        {
          label: 'EUD_Methanol_Maharashtra.docx',
        },
      ],
    },
    {
      label: 'EUD Format for Methanol for Non-Maharashtra',
      children: [
        {
          label: 'EUD_Methanol_Non-Maharashtra.docx',
        },
      ],
    },
    {
      label: 'EUD Format for Hexane, Heptane & Pentane',
      children: [
        {
          label: 'EUD_Hexane_Heptane_Pentane.docx',
        },
      ],
    },
    {
      label: 'EUD Format for n-Hexane,n-Heptane & n-Pentane',
      children: [
        {
          label: 'EUD_nHexane_n Heptane_nPentane_Cyclohexane.docx',
        },
      ],
    },
    {
      label: 'Secondary Sales Data Format',
      children: [
        {
          label: 'Secondary_Sales_Data_For_Merck.xlsx',
        },
      ],
    },
    {
      label: 'Trade Compliance Policy',
      children: [
        {
          label: 'Trade_Compliance_Policy.pdf',
        },
      ],
    },
    {
      label: 'Template for Payment Disputes',
      children: [
        {
          label: 'Payment_Dispute_Template.pdf',
        },
      ],
    },
    {
      label: 'EUD format for Cell Line Products',
      children: [
        {
          label: 'EUD_For_CellLine.docx',
        },
      ],
    },
    {
      label: 'EUD Format for General Materials',
      children: [
        {
          label: 'EUD_General.docx',
        },
        {
          label: 'IsoPropyl_Alcohol_(IPA)_EUD_format.docx',
        },
        {
          label: 'EUD_for_Deuterated_Products.docx',
        },
      ],
    },
    {
      label: 'Merck Price List 2021',
      children: [
        {
          label: 'Build_V1_1021.zip',
        },
        {
          label: 'Application_Installation_And_Feature_Guide.pdf',
        },
      ],
    },
    {
      label: 'Privacy Policy',
      children: [
        {
          label: 'Privacy Policy of Merck Website_India DPO(clean).docx',
        },
      ],
    },
  ];

  return (
    <>
      <h2>Offers</h2>
      {/* <Row>
        {list.map((item, i) => (
          <Col span={6}>
            <Item key={i} {...item} />
          </Col>
        ))}
      </Row>
      <Divider /> */}
      <Row>
        {list.map((item, i) => (
          <Col span={6}>
            <ListItem key={i} {...item} />
          </Col>
        ))}
      </Row>

      <Divider />

      <DownloadList list={downloadList} />
    </>
  );
};

export default Offers;
