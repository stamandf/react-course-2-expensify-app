export default (expenses) => {
    const reducer = (sum, value) => sum + value;
    const total = expenses.map(el => el.amount).reduce(reducer,0);
    return total;
}