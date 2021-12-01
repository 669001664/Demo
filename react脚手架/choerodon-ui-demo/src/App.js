// import React, { Component } from 'react';
// import BasicTable from './components/Table/BasicTable';
// import './App.css'

// class App extends Component {
//     render() {
//         return (
//             <BasicTable/>
//         )
//     }
// }

import React from 'react';
import {
    DataSet,
    Table,
    Form,
    TextField,
    NumberField,
    SelectBox,
    Modal,
    Button,
    CheckBox,
} from 'choerodon-ui/pro';
import './App.css'

const { Column } = Table;

class EditButton extends React.Component {
    handleClick = (e) => {
        const { record, onClick } = this.props;
        onClick(record, e);
    };

    render() {
        return (
            <Button
                funcType="flat"
                icon="mode_edit"
                onClick={this.handleClick}
                size="small"
            />
        );
    }
}

const data = [
    {
        "id": 1,
        "name": "宋江",
        "code": "sj",
        "sex": "男",
        "age": "68",
        "email": "6888888@qq.com",
        "startDate": "2020-09-01 00:00:00",
        "active": true
    },
    {
        "id": 2,
        "name": "张飞",
        "code": "zf",
        "sex": "M",
        "age": "60",
        "email": "zhangfei@163.com",
        "active": true
    },
    {
        "id": 3,
        "name": "赵云",
        "code": "zy",
        "sex": "M",
        "age": "25",
        "email": "zhaoyun@163.com",
        "startDate": "2020-10-01 00:00:00",
        "active": true
    },
    {
        "id": 4,
        "name": "廉颇",
        "code": "lp",
        "sex": "M",
        "age": "88",
        "email": "61238@google.com",
        "startDate": "2018-06-08 00:00:00",
        "active": false
    },
    {
        "id": 5,
        "name": "秦秀英",
        "code": "qxy",
        "sex": "F",
        "age": "12",
        "email": "6qxy8@hand-china.com",
        "active": true
    },
    {
        "id": 6,
        "name": "孔秀兰",
        "code": "qxl",
        "sex": "F",
        "age": "24",
        "email": "123368@qq.com",
        "active": true
    },
    {
        "id": 7,
        "name": "马芳",
        "code": "mf",
        "sex": "F",
        "age": "10",
        "email": "mafangs@163.com",
        "startDate": "2021-01-01 00:00:00",
        "active": false
    },
    {
        "id": 8,
        "name": "鲁智深",
        "code": "lzs",
        "sex": "M",
        "age": "48",
        "email": "6handlzs8@hand-china.com",
        "active": true
    }
]
class App extends React.Component {
    userDs = new DataSet({
        primaryKey: 'userid',
        name: 'user',
        autoQuery: true,
        pageSize: 5,
        data,
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
                lookupCode: 'HR.EMPLOYEE_GENDER',
                required: true,
            },
            { name: 'enable', type: 'boolean', label: '是否开启' },
        ],
    });

    openModal = (record, isNew) => {
        let isCancel = false;
        Modal.open({
            drawer: true,
            width: 600,
            children: (
                <Form record={record}>
                    <TextField name="id" />
                    <TextField name="name" />
                    <NumberField name="age" />
                    <SelectBox name="sex" />
                    <CheckBox name="enable" />
                </Form>
            ),
            onOk: () => this.userDs.submit(),
            onCancel: () => (isCancel = true),
            afterClose: () => isCancel && isNew && this.userDs.remove(record),
        });
    };

    editUser = (record) => {
        this.openModal(record);
    };

    renderEdit = ({ record }) => {
        return <EditButton onClick={this.editUser} record={record} />;
    };

    createUser = () => {
        this.openModal(this.userDs.create({}), true);
    };

    createButton = (
        <Button icon="playlist_add" onClick={this.createUser} key="add">
            新增
        </Button>
    );

    render() {
        const buttons = [this.createButton, 'save', 'delete', 'reset'];
        return (
            <Table
                key="user"
                buttons={buttons}
                dataSet={this.userDs}
                buttonsLimit={2}
                pristine
            >
                <Column name="id" />
                <Column name="age" />
                <Column name="enable" />
                <Column name="name" />
                <Column
                    header="操作"
                    align="center"
                    renderer={this.renderEdit}
                    lock="right"
                />
            </Table>
        );
    }
}
export default App