function Article({ title, img, description, date, tag, index }) {
    return (
        <article className="article">
            {img ? (
                <div className="article__img">
                    <img src={img}></img>
                </div>
            ) : null}
            <h4 className="article__title">{title}</h4>
            {index !== 0 ? (
                <p className="article__description">{description}</p>
            ) : null}
            <div className="article__infos">
                <span className="article__infos__tag">{tag}</span>
                <span className="article__infos__date">{date}</span>
            </div>
        </article>
    )
}

export default Article