document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loan-term').value);

    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = loanAmount*(interestRate/12);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    const results = document.getElementById('results');
    results.innerHTML = `
        <p>Loan Amount: $${loanAmount.toFixed(2)}</p>
        <p>Interest Rate: ${interestRate * 100}%</p>
        <p>Loan Term: ${loanTerm} years</p>
        <h4>Monthly Payment: $${monthlyPayment.toFixed(2)}</h4>
        <h4>Total Payment: $${totalPayment.toFixed(2)}</h4>
        <h4>Total Interest: $${totalInterest.toFixed(2)}</h4>`;
});