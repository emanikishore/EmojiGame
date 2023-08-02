import './index.css'

const EmojiCard = props => {
  const {emojiItem, onClickEmoji} = props
  const {emojiName, emojiUrl} = emojiItem

  const onClickEmojiItem = id => {
    onClickEmoji(id)
  }

  return (
    <li className="list-items" onClick={onClickEmojiItem}>
      <img src={emojiUrl} className="emoji" alt={emojiName} />
    </li>
  )
}

export default EmojiCard
