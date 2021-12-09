import {Component} from 'react'
import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isToggleActive: false}

  toggleButtonImage = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  renderImages = () => {
    const {isToggleActive} = this.state
    const image = isToggleActive ? minusImage : plusImage
    const altText = isToggleActive ? 'minus' : 'plus'

    return (
      <button
        className="toggleButton"
        type="button"
        onClick={this.toggleButtonImage}
      >
        <img src={image} className="plusImage" alt={altText} />
      </button>
    )
  }

  renderAnswer = () => {
    const {listDetails} = this.props
    const {answerText} = listDetails
    const {isToggleActive} = this.state

    if (isToggleActive) {
      return (
        <div className="answerContainer">
          <hr className="hrLine" />
          <p className="answerPara">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {listDetails} = this.props
    const {questionText} = listDetails
    return (
      <li className="faqLists">
        <div className="faqsQA">
          <h1 className="questionHead">{questionText}</h1>
          {this.renderImages()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
