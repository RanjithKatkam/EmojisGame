import './index.css'

const EmojiCard = props => {
  const {eachItem, shuffledEmojisList} = props
  const {id, emojiUrl, emojiName} = eachItem

  const changeCards = () => {
    shuffledEmojisList(id)
  }

  return (
    <li onClick={changeCards} className="emojiContainer">
      <button className="button" type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
