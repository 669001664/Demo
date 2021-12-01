import React, { Component } from 'react';
import {
    Table,
    Form,
    TextField,
    NumberField,
    SelectBox,
    Modal,
    Button,
    CheckBox,
} from 'choerodon-ui/pro';
import UserDataSet from '../TableDataSet/UserDataSet'
const { Column } = Table;

class EditButton extends Component {
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

class BasicTable extends Component {
    userDs = UserDataSet;
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
                    {/* <CheckBox name="enable" /> */}
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
        console.log(this.userDs);
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
                {/* <Column name="enable" /> */}
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

export default BasicTable;