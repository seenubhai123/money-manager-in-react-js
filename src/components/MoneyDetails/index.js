import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props

  return (
    <div className="money-details-container">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img"
        />
        <div className="name-container">
          <p className="your-balance">Your Balance</p>
          <p className="display-amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="your-balance-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="balance-img"
        />
        <div className="name-container">
          <p className="your-balance">Your Income</p>
          <p className="display-amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="your-balance-container-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-img"
        />
        <div className="name-container">
          <p className="your-balance">Your Expenses</p>
          <p className="display-amount" data-testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
