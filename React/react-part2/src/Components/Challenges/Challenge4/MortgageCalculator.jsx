import { useState } from "react"


export const MortgageCalculator = () => {
    const [ loanVal , setLoanVal ] = useState("")
    const [ interestVal , setInterestVal ] = useState("")
    const [ yearVal , setYearVal ] = useState("")

    const [ monthPay , setMonthPay ] = useState("")
    const [ totalPay , setTotalPay ] = useState("")
    const [ interestPaid , setPaid ] = useState("")
    const calculateLoan = () =>{
        //Just put the correct formulas to calculate the values
        setMonthPay( loanVal * ( 1 + ( interestVal / 100 ) ) ** yearVal - 1 ); 
        setTotalPay( monthPay * yearVal );
        setPaid( totalPay - loanVal );
    }
    return (
        <>
        <div>
            <p>Loan Amount : </p> <input type="number"   onChange={(e) => setLoanVal(e.target.value)} value={loanVal}/>
            <p>Interest Rate : </p> <input type="number" onChange={ (e) => setInterestVal(e.target.value)} value={interestVal}/>
            <p>Years : </p> <input type="number" onChange={ (e) => setYearVal(e.target.value)} value={yearVal}/>
            <button onClick={calculateLoan}>Calculate</button>
        </div>
        <div>
            <p>monthPay : {monthPay}</p>
            <p>totalPay : {totalPay}</p>
            <p>interestPaid : {interestPaid}</p>
        </div>
        </>
    )
}