import React, {useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { postsContext } from '../../postContext';

const PostCard = ({item}) => {
    const [like, setLike] = useState('');
    const {deletePost} = useContext(postsContext)
    return (
        <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.author}</Card.Title>
            <Card.Text>
              {item.body}
            </Card.Text>
            <Button variant="dark"  onClick={() => setLike(!like)}>
                {like ? '❤️' : '🤍'
                }
            </Button>
            <button onClick={() => deletePost({id})}>Delete</button>
          </Card.Body> 
        </Card>
        </>
    )
}
 

export default PostCard