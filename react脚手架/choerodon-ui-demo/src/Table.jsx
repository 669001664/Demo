import React from 'react';
import FormDS from './formDataSet';
import {
  DataSet,
  Form,
  TextField,
  Password,
  NumberField,
  EmailField,
  UrlField,
  DatePicker,
  Select,
  SelectBox,
  Button,
} from 'choerodon-ui/pro';
import './App.css';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.formDataSet = new DataSet(FormDS);
    }   
    // 这里需要注意一下，Form 能接收 record 和 dataSet 这两个属性二选一。
    // 其中传入 dataSet 属性后，Form 会默认指向 DataSet 的 ds.current，默认是第一条
    // 如果需要指定 dataSet 中的某条数据的话，请使用 record 属性
    render() {
        return (
            <Form dataSet={this.formDataSet}>
                <TextField name="phone" />
                <Password name="password" />
                <Password name="confirmPassword" />
                <NumberField name="age" />
                <SelectBox name="sex" />
                <Select name="language" />
                <EmailField name="email" />
                <UrlField name="homePage" />
                <DatePicker name="birth" />
                <div>
                    <Button type="submit">注册</Button>
                    <Button type="reset" style={{ marginRight: 8 }}>重置</Button>
                </div>
            </Form>
        )
    }
}

export default MyForm;