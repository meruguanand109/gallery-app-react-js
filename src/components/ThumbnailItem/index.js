import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onChangeActiveImage, activeImage} = props
  const {thumbnailUrl, id, thumbnailAltText} = thumbnailDetails
  const onClickChangeActiveImage = () => {
    onChangeActiveImage(id)
  }
  console.log(activeImage, id)
  const addClassTOActiveThumbnail = activeImage === id ? 'active-thumbnail' : ''

  return (
    <li className="thumbnail-item">
      <button onClick={onClickChangeActiveImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${addClassTOActiveThumbnail}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
