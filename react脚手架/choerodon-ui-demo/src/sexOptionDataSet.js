const sexOptionDataSet = {
    fields: [
        // 这里的字段配置，实际上是根据我们自己的需求虚拟的
        // 实际上，如果从后端读取值的话，还是要按照后端的规范来写
        { name: 'text', type: 'string' },
        { name: 'value', type: 'string' },
    ],
    // 因为我们的需求比较简单，因此直接用 data 生成本地假数据即可
    data: [{
        text: '男',
        value: 'male',
    }, {
        text: '女',
        value: 'female',
    }],
};
export default sexOptionDataSet;
