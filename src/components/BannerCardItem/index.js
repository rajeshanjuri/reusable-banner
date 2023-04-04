// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerItem} = props
  const {headerText, description, className} = bannerItem

  return (
    <li className={`${className} banner-card-item-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="showMore" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
