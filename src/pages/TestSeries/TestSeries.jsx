import React from 'react'
import AllCards from './components/AllCards'
import Tests from './components/Tests'
import Accordionss from './components/Accordionss'
import AllAccordions from './components/AllAccordions'


export default function TestSeries() {

  let acc = [{ ques: "Q. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?", ans: "yes" },
  { ques: "Q. I do not have a computer or a laptop. Is there any alternative through which I can take the online tests?", ans: "yes" },
  { ques: "Q. What happens if I get disconnected during a test?", ans: "yes" },
  { ques: "Q. I have completed a mock test. When will I get my score?", ans: "yes" },
  { ques: "Q. Can I attempt a test more than once?", ans: "yes" },
  { ques: "Q. Do you also provide solutions for the questions?", ans: "yes" },
  { ques: "Q. Will I get any report card after the test?", ans: "Now" },
  ]
  return (
    <>
      <Tests />
      <AllCards />
      <AllAccordions />
      {
        acc.map(({ ques, ans }, index) => (
          <Accordionss ques={ques} ans={ans} key={index} />))
      }
    </>
  )
}
