import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';



const genMenu = (pKey: string | null): AppModelState[] => {
  const navs = [
    {
      "label": "Home",
      "key": "0"
    },
    {
      "label": "Masters",
      "key": "1",
      "children": [
        {
          "label": "Master List",
          "key": "2",
          "chidlren": [
            {
              "label": "Read Data From SAP",
              "key": "3"
            },
            {
              "label": "Department",
              "key": "4"
            },
            {
              "label": "Zone Area",
              "key": "5"
            },
            {
              "label": "State City",
              "key": "6"
            },
            {
              "label": "MVGR",
              "key": "7"
            },
            {
              "label": "SBU",
              "key": "8"
            },
            {
              "label": "Products",
              "key": "9"
            },
            {
              "label": "Material Pricing Group",
              "key": "10"
            },
            {
              "label": "CnF Excluded Items",
              "key": "11"
            },
            {
              "label": "Map Customer to Distributor",
              "key": "12"
            },
            {
              "label": "Map Customer to Departments",
              "key": "13"
            },
            {
              "label": "Approving Limits",
              "key": "14"
            },
            {
              "label": "Zone-wise ASP",
              "key": "15"
            },
            {
              "label": "Product-wise Limit Price",
              "key": "16"
            },
            {
              "label": "Product Wise Toll Center",
              "key": "17"
            },
            {
              "label": "Distributor - Product wise Mapping",
              "key": "18"
            },
            {
              "label": "Department Order Type",
              "key": "19"
            },
            {
              "label": "Map Article To CnF",
              "key": "20"
            },
            {
              "label": "Default Supply Plant",
              "key": "21"
            },
            {
              "label": "Product With Default Discount",
              "key": "22"
            },
            {
              "label": "NID",
              "key": "23"
            },
            {
              "label": "Block Customer from Order Creation",
              "key": "24"
            },
            {
              "label": "Products with End User Document",
              "key": "25"
            },
            {
              "label": "Upload Expected Delivery Dates for Pending Orders",
              "key": "26"
            },
            {
              "label": "PESO Products",
              "key": "27"
            },
            {
              "label": "Customer-wise Product-wise CnF Mapping",
              "key": "28"
            },
            {
              "label": "Multiplexing Kit CSC Approvers",
              "key": "29"
            },
            {
              "label": "SBU wise CnF",
              "key": "30"
            },
            {
              "label": "Customer / Product / SBU Shipping Instructions",
              "key": "31"
            },
            {
              "label": "Send Mail for Single Batch Single Customer Orders",
              "key": "32"
            },
            {
              "label": "Sales Group",
              "key": "33"
            },
            {
              "label": "Rate Contract Customers",
              "key": "34"
            },
            {
              "label": "Rate Contract Errors",
              "key": "35"
            },
            {
              "label": "Customer segment Mapping",
              "key": "36"
            }
          ],

        },
        {
          "label": "Access Control",
          "key": "37",
          "children": [
            {
              "label": "Employees",
              "key": "Employees"
            },
            {
              "label": "Unlock Employee",
              "key": "Unlock Employee"
            },
            {
              "label": "Assign Roles",
              "key": "Assign Roles"
            },
            {
              "label": "Customer",
              "key": "Customer"
            },
            {
              "label": "SBU Employee Mapping for Selection",
              "key": "SBU Employee Mapping for Selection"
            },
            {
              "label": "CnF",
              "key": "CnF"
            },
            {
              "label": "Toll Center",
              "key": "Toll Center"
            },
            {
              "label": "Central Warehouse",
              "key": "Central Warehouse"
            }
          ],

        },
        {
          "label": "Channel 13 Masters",
          "key": "38",
          "children": [
            {
              "label": "Sending mail after CSC Approval",
              "key": "Sending mail after CSC Approval"
            },
            {
              "label": "Customer-wise Product-wise Price",
              "key": "Customer-wise Product-wise Price"
            }
          ],

        },
        {
          "label": "Shipment Tracking",
          "key": "39",
          "children": [
            {
              "label": "Sigma Customer",
              "key": "Sigma Customer"
            },
            {
              "label": "Banner",
              "key": "Banner"
            },
            {
              "label": "Employee - Sigma Customer / Plant Mapping",
              "key": "Employee - Sigma Customer / Plant Mapping"
            },
            {
              "label": "Expected Delivery Days",
              "key": "Expected Delivery Days"
            },
            {
              "label": "Activate Transporter Login",
              "key": "Activate Transporter Login"
            },
            {
              "label": "Transporter Mapping",
              "key": "Transporter Mapping"
            },
            {
              "label": "Opt Out Email",
              "key": "Opt Out Email"
            },
            {
              "label": "Opt Out SMS",
              "key": "Opt Out SMS"
            }
          ],

        },
        {
          "label": "Complaint Category",
          "key": "40",

        },
        {
          "label": "Perennial Non Available Items",
          "key": "41",

        },
        {
          "label": "Attachment",
          "key": "42",

        },
        {
          "label": "Upload Payment Customer",
          "key": "43",

        },
        {
          "label": "Customer Annexure Master",
          "key": "44",

        }
      ],

    },
    {
      "label": "Orders",
      "key": "45",
      "children": [
        {
          "label": "Create / Edit",
          "key": "46",

        },
        {
          "label": "Bulk Cancellation of Orders",
          "key": "47",

        },
        {
          "label": "Delete",
          "key": "48",

        },
        {
          "label": "Pending For EUD Approval",
          "key": "49",

        },
        {
          "label": "Pending For Rate Contract Approval",
          "key": "50",

        },
        {
          "label": "Pending For My Approval",
          "key": "51",

        },
        {
          "label": "Pending For CSC Approval",
          "key": "52",

        },
        {
          "label": "Order History",
          "key": "53",

        },
        {
          "label": "Orders in Error",
          "key": "54",

        },
        {
          "label": "Orders Stuck for SAP Intgegration",
          "key": "55",

        }
      ],

    },
    {
      "label": "MIS",
      "key": "56",
      "children": [
        {
          "label": "Orders",
          "key": "57",

        },
        {
          "label": "Invoices",
          "key": "58",

        },
        {
          "label": "Sales",
          "key": "59",

        },
        {
          "label": "Orders V/S Sales",
          "key": "60",

        },
        {
          "label": "Orders V/S Sales - Schedule Lines",
          "key": "61",

        },
        {
          "label": "EUD Approval Report",
          "key": "62",

        },
        {
          "label": "Employee wise Sales Mapping Download",
          "key": "63",

        },
        {
          "label": "Outstanding",
          "key": "64",

        },
        {
          "label": "Stock",
          "key": "65",

        },
        {
          "label": "LR Details",
          "key": "66",

        },
        {
          "label": "View Sales Tax Difference",
          "key": "67",

        },
        {
          "label": "Month Wise Total Value of Orders",
          "key": "68",

        },
        {
          "label": "Monthly Submitted Order Report",
          "key": "69",

        },
        {
          "label": "Zone Wise Product Wise Average Price",
          "key": "70",

        },
        {
          "label": "Orders Pending For Merck Approval",
          "key": "71",

        },
        {
          "label": "Draft Order Status",
          "key": "72",

        },
        {
          "label": "Proportionate Freight",
          "key": "73",

        },
        {
          "label": "Dead Orders",
          "key": "74",

        },
        {
          "label": "Download Deleted Orders",
          "key": "75",

        },
        {
          "label": "Download Orders for Customers For Deleted Order Items",
          "key": "76",

        },
        {
          "label": "Download Price List Report",
          "key": "77",

        },
        {
          "label": "Login Logout Report",
          "key": "78",

        },
        {
          "label": "Audit Log Report",
          "key": "79",

        }
      ],

    },
    {
      "label": "Dispatches",
      "key": "80",
      "children": [
        {
          "label": "Download LR Details",
          "key": "81",

        }
      ],

    },
    {
      "label": "Complaints",
      "key": "82",
      "children": [
        {
          "label": "Pending For Closure",
          "key": "83",

        }
      ],

    },
    {
      "label": "Shipment Tracking",
      "key": "84",
      "children": [
        {
          "label": "Search Shipments",
          "key": "85",

        },
        {
          "label": "Retriggering Emails",
          "key": "86",

        },
        {
          "label": "Feedback Report",
          "key": "87",

        },
        {
          "label": "Dashboards",
          "key": "88",

        }
      ],

    },
    {
      "label": "COA",
      "key": "89",
      "children": [
        {
          "label": "Upload Multiple Files",
          "key": "90",

        },
        {
          "label": "Upload Mapping Data",
          "key": "91",

        }
      ],

    },
    {
      "label": "Transaction view",
      "key": "92",
      "children": [
        {
          "label": "Transaction Stuck For SAP Integration",
          "key": "93",

        },
        {
          "label": "Transaction Data",
          "key": "94",

        }
      ],

    },
    {
      "label": "Customer Annexure view",
      "key": "95"
    }
  ];
  return navs;
};

const getMenus = () => {
  const list = genMenu(null);
  return list;
};

interface AppModelState {
  key: string;
  label: string;
  children?: AppModelState[];
}

interface IBreadcrumbs {
  key: string;
  label: string;
}

interface AppModelType {
  namespace: 'app';
  effects: {
    query: Effect;
  };
  state: {
    menus: AppModelState[],
    breadcrumbs: IBreadcrumbs[],
  };
  reducers: {
    save: Reducer<AppModelState>;
    updateBreadcrumbs: Reducer<AppModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const AppModelStore: AppModelType = {
  namespace: 'app',

  state: {
    menus: [],
    breadcrumbs: [],
  },
  effects: {
    *query({ payload }, { call, put }) {
      const list = yield call(getMenus, {});
      console.log('list-query', list)
      yield put({
        type: 'save',
        payload: {
          menus: list,
        },
      });
      console.log('query', payload, call, put);
    },
  },
  reducers: {
    save(state, action) {
      console.log('save', action);
      return {
        ...state,
        ...action.payload,
      };
    },
    updateBreadcrumbs(state, action) {
      console.log('updateBreadcrumbs', action)
      return {
        ...state,
        ...action.payload,
      };
    }
  },

  subscriptions: {
    setup({ dispatch }) {
      console.log('AppModelStore subscriptions')
      dispatch({
        type: 'query'
      })
    }
  }

};

export default AppModelStore;
