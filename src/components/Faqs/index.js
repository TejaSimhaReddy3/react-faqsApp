import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bgContainer">
      <div className="contentContainer">
        <h1 className="headingMain">FAQs</h1>
        <ul className="faqsListsContainer">
          {faqsList.map(eachList => (
            <FaqItem key={eachList.id} listDetails={eachList} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
