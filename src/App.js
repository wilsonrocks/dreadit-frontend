import React, { Component } from 'react';
import Comment from './Comment';
import "bulma/css/bulma.css"
import "./news.css"

const mocks =  [
    {
    "created_at": 1454293795551,
    "votes": 11,
    "_id": "5b340bb9f0ac620014eca88e",
    "body": "Sit sequi odio suscipit. Iure quisquam qui alias distinctio eos officia enim aut sit. Corrupti ut praesentium ut iste earum itaque qui. Dolores in ab rerum consequuntur. Id ab aliquid autem dolore.",
    "belongs_to": "5b340bb9f0ac620014eca84c",
    "created_by": "5b340bb9f0ac620014eca847",
    "__v": 0
    },
    {
    "created_at": 1463121267403,
    "votes": 4,
    "_id": "5b340bb9f0ac620014eca890",
    "body": "Explicabo perspiciatis voluptatem sunt tenetur maxime aut. Optio totam modi. Perspiciatis et quia.",
    "belongs_to": "5b340bb9f0ac620014eca84c",
    "created_by": "5b340bb9f0ac620014eca846",
    "__v": 0
    },
    {
    "created_at": 1511168328322,
    "votes": 4,
    "_id": "5b340bb9f0ac620014eca89b",
    "body": "Error est qui id corrupti et quod enim accusantium minus. Deleniti quae ea magni officiis et qui suscipit non.",
    "belongs_to": "5b340bb9f0ac620014eca84c",
    "created_by": "5b340bb9f0ac620014eca844",
    "__v": 0
    },
    {
    "created_at": 1501488853076,
    "votes": 10,
    "_id": "5b340bb9f0ac620014eca8a3",
    "body": "Consectetur deleniti sed. Omnis et dolore omnis aspernatur. Et porro accusantium. Tempora ullam voluptatum et rerum.",
    "belongs_to": "5b340bb9f0ac620014eca84c",
    "created_by": "5b340bb9f0ac620014eca848",
    "__v": 0
    },
    {
    "created_at": 1466239928680,
    "votes": 0,
    "_id": "5b340bb9f0ac620014eca8c4",
    "body": "Assumenda sit est blanditiis asperiores est minima. Placeat sequi tenetur autem consequatur soluta molestiae. Incidunt neque labore et dolorem et vel possimus nemo quidem.",
    "belongs_to": "5b340bb9f0ac620014eca84c",
    "created_by": "5b340bb9f0ac620014eca845",
    "__v": 0
    },
    {
    "created_at": 1473562755171,
    "votes": 14,
    "_id": "5b340bb9f0ac620014eca8c5",
    "body": "Et explicabo dignissimos officia dolore rerum aliquam corrupti. Culpa corporis earum et earum officia a est atque at. Quidem quo recusandae delectus autem possimus blanditiis optio. Sed culpa culpa. Exercitationem nemo aspernatur alias ut qui.",
    "belongs_to": "5b340bb9f0ac620014eca84c",
    "created_by": "5b340bb9f0ac620014eca843",
    "__v": 0
    },
    {
    "created_at": 1473106094229,
    "votes": 2,
    "_id": "5b340bb9f0ac620014eca8c8",
    "body": "Esse et expedita harum non. Voluptatibus commodi voluptatem. Minima velit suscipit numquam ea. Id vitae debitis aut incidunt odio quo quam possimus ipsum.",
    "belongs_to": "5b340bb9f0ac620014eca84c",
    "created_by": "5b340bb9f0ac620014eca846",
    "__v": 0
    },
    {
    "created_at": 1499256940563,
    "votes": 19,
    "_id": "5b340bb9f0ac620014eca98d",
    "body": "Ut accusamus enim vel voluptate quae temporibus labore neque a. Reprehenderit iste est eos velit fugit vel quod velit.",
    "belongs_to": "5b340bb9f0ac620014eca84c",
    "created_by": "5b340bb9f0ac620014eca846",
    "__v": 0
    }
    ]


class App extends Component {

  render() {
    return (
      <div className="section">
        {mocks.map(mock => {
          return <Comment
            {...mock}

            // timestamp={mock.created_at}
            // votes={mock.votes}
            // body={mock.body}
            // name="Fake Name"
            // avatarURL="http://s3.amazonaws.com/hiphopdx-production/2016/02/Chuck-D_02-11-2016.jpg"
            // id={mock._id}
            key={mock._id}
        />
        })}
      </div>
    );
  }
}

export default App;
