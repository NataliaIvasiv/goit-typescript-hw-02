import css from './LoadMoreBtn.module.css'

interface LoadMore {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FunctionComponent<LoadMore> = ({ onLoadMore }) => {
    
    return (
        <div>
            <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>Load more</button>
        </div>
    )
}
export default LoadMoreBtn;