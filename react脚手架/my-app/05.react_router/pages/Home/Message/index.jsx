import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'


export default class Message extends Component {
	render() {
		const messageArr = [
			{ id: 1, content: '消息一' },
			{ id: 2, content: '消息二' },
			{ id: 3, content: '消息三' }]
		return (
			<div>
				<ul>
					{messageArr.map(item => {
						return (<li key={item.id}>
							{/* params形式传递 */}
							{/* <Link to={`/home/message/detail/${item.id}/${item.content}`}>{item.content}</Link> */}
							{/* search形式传递 */}
							{/* <Link to={`/home/message/detail/?id=${item.id}&content=${item.content}`}>{item.content}</Link> */}
							{/* state形式传递 */}
							<Link to={{ pathname: '/home/message/detail', state: { id: item.id, content: item.content } }}>{item.content}</Link>
						</li>)

					})}
				</ul>
				<hr />
				{/* params形式接收 */}
				{/* <Route path='/home/message/detail/:id/:content' component={Detail} /> */}
				{/* seach不用声明接收 */}
				<Route path='/home/message/detail' component={Detail} />
			</div>
		)
	}
}
