import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    historyList: [],
    userTitle: '',
    userAmount: '',
    userType: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({userTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({userAmount: event.target.value})
  }

  onChangeType = event => {
    this.setState({userType: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {userTitle, userAmount, userType} = this.state
    const optionType = transactionTypeOptions.find(
      eachOptionDetails => eachOptionDetails.optionId === userType,
    )

    const {displayText} = optionType

    const transaction = {
      id: v4(),
      title: userTitle,
      amount: parseInt(userAmount),
      type: displayText,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, transaction],
      userTitle: '',
      userAmount: '',
      userType: transactionTypeOptions[0].optionId,
    }))
  }

  deleteHistoryItem = id => {
    const {historyList} = this.state
    this.setState({
      historyList: historyList.filter(eachItem => eachItem.id !== id),
    })
  }

  expenseAmount = () => {
    const {historyList} = this.state

    let expenseAmount = 0

    historyList.forEach(eachTransaction => {
      if (eachTransaction.type !== transactionTypeOptions[0].displayText) {
        expenseAmount += eachTransaction.amount
      }
    })

    return expenseAmount
  }

  incomeAmount = () => {
    const {historyList} = this.state

    let incomeAmount = 0
    historyList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  balanceAmount = () => {
    const {historyList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expenseAmount = 0

    historyList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expenseAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expenseAmount

    return balanceAmount
  }

  render() {
    const {historyList, userType, userAmount, userTitle} = this.state
    const balance = this.balanceAmount()
    const income = this.incomeAmount()
    const expense = this.expenseAmount()

    return (
      <div className="app-container">
        <div className="manager-name-container">
          <h1 className="account-name">Hi,Richard</h1>
          <p className="greeting-para">
            Welcome back to your{' '}
            <span className="money-manager-span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expense={expense} />
        <div className="transaction-details-container">
          <div>
            <form
              onSubmit={this.onAddAppointment}
              className="add-transaction-container"
            >
              <h1 className="heading">Add Transaction</h1>
              <label htmlFor="title" className="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="title-input"
                onChange={this.onChangeTitle}
                value={userTitle}
              />
              <label htmlFor="amount" className="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="amount-input"
                onChange={this.onChangeAmount}
                value={userAmount}
              />
              <label htmlFor="type" className="type">
                TYPE
              </label>
              <select
                id="type"
                className="select-type"
                onChange={this.onChangeType}
                value={userType}
              >
                {transactionTypeOptions.map(optionType => (
                  <option key={optionType.optionId} value={optionType.optionId}>
                    {optionType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="history-headings">
              <p className="title-item">Title</p>
              <p className="title-item">Amount</p>
              <p className="title-item">Type</p>
            </div>
            <ul className="history-unorderlist">
              {historyList.map(eachItem => (
                <TransactionItem
                  appointmentDetails={eachItem}
                  key={eachItem.id}
                  deleteHistoryItem={this.deleteHistoryItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
