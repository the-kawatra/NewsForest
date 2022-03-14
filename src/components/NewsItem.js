import React from 'react'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card mx-3">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '95%'}}>{source}</span>
                    <img src={imageUrl?imageUrl:"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toLocaleTimeString()} - {new Date(date).toDateString()}</small></p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read full Article</a>
                        </div>
                </div>
            </div >
    )
}

export default NewsItem