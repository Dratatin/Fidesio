import articlesIcon from '../assets/articlesIcon.svg';
import Article from './Article';

function Articles({ items }) {
    return (
        <section className='articles'>
            <div className='articles__heading'>
                <span><img src={articlesIcon}></img></span>
                <h3 className='articles__heading__title'>Nos dernières publications</h3>
            </div>
            <div className='articles__content'>
                {items.map(({ title, img, description, date, tag }, index) =>
                (
                    <Article key={index} title={title} img={img} description={description} date={date} tag={tag} index={index}>
                    </Article>
                ))}
            </div>
        </section>
    )
}

export default Articles