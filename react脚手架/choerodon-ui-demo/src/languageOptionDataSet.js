// languageOptionDataSet.js
// 与上面那个构造对象是同样的道理
const languageOptionDataSet = {
    fields: [
        { name: 'text', type: 'string' },
        { name: 'value', type: 'string' },
    ],
    data: [{
        text: '简体中文',
        value: 'zh-cn',
    }, {
        text: '英语（美国）',
        value: 'en-us',
    }, {
        text: 'japanese',
        value: 'ja-jp',
    }],
};
export default languageOptionDataSet;