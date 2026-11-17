import React from 'react';
import Post from './Post';

class Blog extends React.Component
{
    render()
    {
        return (
            <>
                {
                    props.post.map
                        (
                            post =>
                            (
                                <Post   title={props.title}
                                        content={props.content}
                                />
                            )
                        )
                }
            </>
        )
    }
}
export default Blog;