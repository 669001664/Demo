// import './App.css';
// import React, { useMemo, useCallback, useState } from 'react';
// import { DataSet, Table, AutoComplete, Button, CodeArea } from 'choerodon-ui/pro';
// import JSONFormatter from 'choerodon-ui/pro/lib/code-area/formatters/JSONFormatter';
// import userDS from './tableDataSet'
// const App = () => {
//   // 使用上章 DS 配置，new DS 实例
//   // 表格列配置
//   const emailOptionDS = useMemo(() => {
//     return new DataSet({
//       fields: [
//         {
//           name: 'value',
//           type: 'string',
//         },
//         {
//           name: 'meaning',
//           type: 'string',
//         },
//       ],
//     });
//   }, []);
//   const handleValueChange = useCallback((v) => {
//     const { value } = v.target;
//     const suffixList = ['@qq.com', '@163.com', '@hand-china.com'];
//     if (value.indexOf('@') !== -1) {
//       // 如果输入值中包含 @ 不配置数据，自定义输入
//       emailOptionDS.loadData([]);
//     } else {
//       emailOptionDS.loadData(
//         suffixList.map((suffix) => ({
//           value: `${value}${suffix}`,
//           meaning: `${value}${suffix}`,
//         })),
//       );
//     }
//   }, [emailOptionDS]);
//   const columns = useMemo(() => {
//     return [
//       { name: 'name', editor: true },
//       { name: 'age', editor: true },
//       { name: 'sex', editor: true, },
//       {
//         name: 'email', editor: () => {
//           return (
//             <AutoComplete
//               onFocus={handleValueChange}
//               onInput={handleValueChange}
//               options={emailOptionDS}
//             />
//           );
//         }
//       },
//       { name: 'code', editor: true },
//       { name: 'startDate', editor: true },
//       { name: 'active', editor: true },
//     ];
//   }, [emailOptionDS, handleValueChange]);
//   const [consoleValue, setConsoleValue] = useState('');
//   const toDataButton = (
//     <Button key='1' onClick={() => setConsoleValue(userDS.toData())}>
//       toData
//     </Button>
//   );
//   const toJSONDataButton = (
//     <Button key='3' onClick={() => setConsoleValue(userDS.toJSONData.apply())}>
//       toJSONData
//     </Button>
//   );
//   const setQueryParamButton = (
//     <Button key='2' onClick={() => userDS.setQueryParameter('customPara', 'test')}>
//       setQueryParameter
//     </Button>
//   );
//   return (
//     <div style={{ width: 1200, padding: 100 }}>
//       <h1>C7N Pro Table</h1>
//       <Table
//         queryBar="professionalBar"
//         queryFieldsLimit={2}
//         dataSet={userDS}
//         columns={columns}
//         buttons={['add', 'query', 'save', 'delete', 'reset', toDataButton, toJSONDataButton, setQueryParamButton]}
//       />
//       <CodeArea
//         style={{ height: 280 }}
//         formatter={JSONFormatter}
//         value={JSON.stringify(consoleValue)}
//       />
//     </div>
//   );
// };
// export default App;

import './App.css';
import React, { useMemo } from 'react';
import {Table } from 'choerodon-ui/pro';
import tableDataSet from './tableDataSet'
const App = () => {
  // 使用上章 DS 配置，new DS 实例
  const tableDS = useMemo(()=> {
    return tableDataSet
  }, []);
  
  // 表格列配置
  console.log(tableDS);
  const columns = useMemo(()=>{
    return [
      { name: 'name' },
      { name: 'sex' },
      { name: 'code' },
      { name: 'active' },
    ];
  }, []);
  return (
    <div style={{ width: 1200, padding: 100 }}>
      <h1>C7N Pro Table</h1>
      <Table
        dataSet={tableDS}
        columns={columns}
      />
    </div>
  );
};
export default App;