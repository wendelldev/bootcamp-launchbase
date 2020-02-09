const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

const createTransaction = (transaction) => {
    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else if (transaction.type === 'debit') {
        user.balance -= transaction.value
    } else {
        return 'Invalid Transaction'
    }

    user.transactions.push(transaction)
}

const getHigherTransactionByType = (type) => {
    let higher = 0
    let higherTransaction = {}

    for (let transaction of user.transactions) {
        if (transaction.type === type && transaction.value > higher) {
            higher = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

const getAverageTransactionValue = () => {
    let soma = 0
    for (let transaction of user.transactions) {
        soma += transaction.value
    }

    return soma / user.transactions.length
}

const getTransationCount = () => {
    const result = {
        credit: 0,
        debit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            result.credit += 1
        } else {
            result.debit += 1
        }
    }

    return result
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))
console.log(getAverageTransactionValue())
console.log(getTransationCount())