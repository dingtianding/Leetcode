/**
 * @param {string[]} transactions
 * @return {string[]}
 */
const isInvalid = (transaction, map) => {
    const [name, time, amount, city] = transaction.split(',')
    
    if (amount > 1000) return true
    
    const prevTrans = map[name]
    
    for (const trans of prevTrans) {
        if(city !== trans.city && Math.abs(time-trans.time) <= 60) return true //if both less than 60m and not the same city, then it could be invalid
    }
    return false // pass all check
};




const invalidTransactions = (transactions) => {
    const invalidTrans = []
    
    const map = {}
    
    for (const trans of transactions) {
        const [name, time, amount, city] = trans.split(',')
    
    
        if (name in map) map[name].push({ time, city }) //add time and city to map, transction does not have to be in map
        else map[name] = [{ time, city }]  //create map key/value apir
    }
    
    
    for (const trans of transactions) {
        if (isInvalid(trans, map)) invalidTrans.push(trans) //iterate helper on all transaction
    }
    
    
    return invalidTrans 
    };