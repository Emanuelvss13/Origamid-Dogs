import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm';
import { UlContainer } from './styled';

export default function PhotoComments(props) {

    const [comments, setComments] = React.useState(() => props.comments)    
    const commentSection = React.useRef(null)
    const {login} = React.useContext(UserContext);

    React.useEffect(() => {
        commentSection.current.scrollTop = commentSection.current.scrollHeight;
    }, [comments])


    return (
        <>
            <UlContainer ref={commentSection}>
            {comments && comments.map(comment => 
                <li key={comment.comment_ID} >
                    <b>{comment.comment_author}: </b>
                    <span>{comment.comment_content}</span>
                </li>
            )}
            </UlContainer>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
        </>
    )
}
