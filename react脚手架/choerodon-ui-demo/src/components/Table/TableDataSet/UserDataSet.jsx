import {
  DataSet,
} from 'choerodon-ui/pro';

export default new DataSet({
  primaryKey: 'id',
  autoQuery: true,
  pageSize: 5,
  dataKey: 'content',
  fields: [
    {
      name: 'id',
      type: 'number',
      label: '编号',
      required: true,
    },
    {
      name: 'name',
      type: 'string',
      label: '姓名',
    },
    {
      name: 'age',
      type: 'string',
      label: '年龄',
      max: 100,
      step: 1,
    },
    {
      name: 'sex',
      type: 'string',
      label: '性别',
      lookupUrl: 'https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/EMPLOYEE_GENDER',
      required: true,
    },
    // { name: 'enable', type: 'boolean', label: '是否开启' },
  ],
  transport: {
    // 查询请求的 axios 配置或 url 字符串
    read: {
      url: 'https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/guide/user',
      method: 'GET',
      transformResponse: (data) => {
        data = JSON.parse(data);
        data.success = true;
        console.log(data);
      }
    }
  },
  events: {
    submit: ({ data }) => console.log('submit data', data),
  },
});