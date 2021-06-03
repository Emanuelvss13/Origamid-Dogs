import React from 'react';
import FeedModal from './FeedModal';
import FeedPhoto from './FeedPhoto';
import { Container } from './styled';

export default function Feed({user}) {

    const [pages, setPages] = React.useState([1])
    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [infinity, Setinfinity] = React.useState(true);

    React.useEffect(() => {
        if(infinity){
            let wait = false
            function InfinityScroll(){
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
    
                if(scroll < height * .75 && !wait){
                    setPages((pages) => [...pages, pages.length + 1])
                    wait = true
                    setTimeout(() => {
                        wait = false
                    }, 500)
                }
            }
    
            window.addEventListener('wheel', InfinityScroll)
            window.addEventListener('scroll', InfinityScroll)
            
            return () => {
                window.removeEventListener('wheel', InfinityScroll)
                window.removeEventListener('scroll', InfinityScroll)
            }
        }

    })
    return (
        <Container>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
            
            {pages.map(page =>
                <FeedPhoto key={page} Setinfinity={Setinfinity} page={page} user={user} setModalPhoto={setModalPhoto} />
            )}
        </Container>
    )
}
