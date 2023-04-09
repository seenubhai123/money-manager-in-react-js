import './index.css'

const TransactionItem = props => {
  const {appointmentDetails, deleteHistoryItem} = props
  const {id, title, amount, type} = appointmentDetails

  const deleteItem = () => {
    deleteHistoryItem(id)
  }

  const typeColorClassName =
    type === 'Income' ? 'income-color' : 'expense-color'

  return (
    <li className="history-item">
      <div className="transacItem-container">
        <p className="title-css">{title}</p>
        <p className="title-css-2">{amount}</p>
        <p className={`title-css-3 ${typeColorClassName}`}>{type}</p>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
