import React from 'react'
import { Routes, Route } from "react-router-dom";
import EducationLoan from '../EducationLoan/EducationLoan'
import SbiLoan from '../SBILoan/SbiLoan'

const LoanPage = () => {
    return (
        <>
            <Routes>
                <Route exact path="/*" element={<EducationLoan />} />
                <Route path="/:bankName" element={<SbiLoan />} />
            </Routes>
        </>
    )
}

export default LoanPage