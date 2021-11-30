import React, { Component } from 'react';
// import qs from 'querystring'

class Detail extends Component {
    render() {
        // const { id, content } = this.props.match.params;
        // const {search} = this.props.location;
        // const params = qs.parse(search.slice(1))
        // console.log(params);
        const {id, content} = this.props.location.state;
        return (
            <ul>
                <li>ID:{id}</li>
                <li>content:{content}</li>
            </ul>
        );
    }
}

export default Detail;