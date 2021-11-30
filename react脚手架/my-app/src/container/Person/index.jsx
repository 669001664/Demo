import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../../redux/actions/person';

class Person extends Component {
    add = () => {
        const name = this.input1.value;
        const age = this.input2.value;
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj);
    }
    render() {
        return (
            <div>
                <h1>总和为{this.props.count}</h1>
                <input ref={c => this.input1 = c} type="text" />
                <input ref={c => this.input2 = c} type="text" />
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        this.props.person.map(item => {
                            return (
                                <li key={item.id}>{item.name}----{item.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count,
    person: state.person
})

const mapDispatchToProps = { addPerson }

export default connect(mapStateToProps, mapDispatchToProps)(Person);