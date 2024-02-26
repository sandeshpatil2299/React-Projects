import React, { useState } from "react";
import Faq from "./Components/Faq";

const questions = [
  "What is Netflix?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is Netflix good for kids?",
];

const answers = [
  "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaires and more - on thousands of internet-connected devices.",
  "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans rage from Rs.149 to Rs.649 a month. No extra consts, no contracts.",
  "Watch anywhere, anytime. Sign in with your Netflix account to watch instntly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, straming media players and game consoles.",
  "Netflix is flexible. There are no annoying contrats and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.",
  "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Whatch as muich as you want, anytime you want.",
  "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space",
];

const quesAndAns = [];

for (let i = 0; i < questions.length; i++) {
  quesAndAns.push({
    title: questions[i],
    content: answers[i],
  });
}

function App() {
  const [activeFaq, setActiveFaq]= useState(-1);
  return (
    <div className="w-[100vw] h-[100vh] bg-black text-white">
      <h1 className="text-5xl pt-10 pb-7 font-extrabold text-center">
        Frequently Asked Quetions
      </h1>
      {
        quesAndAns.map((value, index) =>
        {
          return <Faq title={value.title} content={value.content} show={index === activeFaq} onClick={() => setActiveFaq(index === activeFaq ? -1 : index)}/>
        })
      }
    </div>
  );
}

export default App;
