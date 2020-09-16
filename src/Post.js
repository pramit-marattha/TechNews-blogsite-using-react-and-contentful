import React from 'react'
import marked from 'marked';

const Post = ({ article }) => {
    const { titleName, featuredImage, description } = article.fields
    const markdownDesc = marked(description);
    return (
        <div>
            <div className="post">
                <h2 className="title">{titleName}</h2>
                {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={titleName} title={titleName} />}
                <section dangerouslySetInnerHTML={{ __html: markdownDesc }} />
            </div>
        </div>
    )
}

export default Post;
