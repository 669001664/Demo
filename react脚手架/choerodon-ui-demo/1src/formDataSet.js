import { DataSet } from 'choerodon-ui/pro';
import SexOptionDataSet from './sexOptionDataSet';
import LanguageOptionDataSet from './languageOptionDataSet';
const sexOptionDataSet = new DataSet(SexOptionDataSet);
const languageOptionDataSet = new DataSet(LanguageOptionDataSet);

const FormDataSet = {
    autoCreate: true,
    fields: [
        { name: 'phone', type: 'string', label: '手机号', pattern: '1[0-9]{10}', required: true },
        { name: 'password', type: 'string', label: '密码', required: true },
        { name: 'confirmPassword', type: 'string', label: '确认密码', required: true, validator: (value, name, record) => {
            // 这个地方能返回的不止有布尔类型和字符串类型，你也可以自己自行写一个 html 标签自定义样式，比如字体颜色改成蓝色
            if (value !== record.get('password')) {
                return '您两次输入的密码不一致，请重新输入';
            }
            return true;
        } },
        { name: 'age', type: 'number', label: '年龄', required: true },
        { name: 'sex', type: 'string', label: '性别', textField: 'text', valueField: 'value', options: sexOptionDataSet, required: true },
        { name: 'language', type: 'string', label: '语言', textField: 'text', valueField: 'value', options: languageOptionDataSet, required: true },
        { name: 'email', type: 'string', label: '邮箱', required: true },
        { name: 'homePage', type: 'string', label: '个人主页', required: true },
        { name: 'birth', type: 'date', label: '生日', required: true },
    ],
    transport: {
        create: ({ data, params, dataSet }) => {
            console.log(data+" ", params+" ", dataSet.toJSONData());
            return ({
                // url: 'v1/projects/${projectId}',
                // method: 'post',
                // data,
            })
        }
    },
    events: {
        load: ({ dataSet }) => {
            console.log('加载完成', dataSet)
        }
    }
};
export default FormDataSet;