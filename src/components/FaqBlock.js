import React from "react"

export default function FaqBlock() {
  return (
    <div className="pt-16 pb-24">
      <h2>Frequently Asked Questions</h2>
      <div className="flex flex-col divide-y-2 divide-butterscotch-500">
        {faqs.map((faq, index) => (
          <details key={index} className="py-8">
            <summary className="font-bold cursor-pointer">
              {faq.question}
            </summary>
            <p className="mt-2 mb-2">{faq.answer}</p>
            {faq.linkUrl && (
              <a
                href={faq.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 underline text-navy"
              >
                {faq.linkText}
              </a>
            )}
          </details>
        ))}
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "I want to leave a review!",
    answer:
      "Great - we'd love to hear from you! Please visit our Linktree and choose your preferred platform.",
    linkUrl: "https://linktr.ee/beencoffeeuk",
    linkText: "Linktree",
  },
  {
    question: "I'd like to leave some anonymous feedback.",
    answer:
      "Of course! Please visit our feedback page and fill in the form. We'll take your feedback on board, but please remember we can't respond to anonymous feedback.",
    linkUrl: "https://www.been.coffee/feedback/",
    linkText: "Feedback",
  },
  {
    question: "Do you allow dogs?",
    answer:
      "Yes! We love them. Bring them in, but please be mindful not everyone loves dogs so keep them on a lead and away from other customers.",
  },
  {
    question: "Do you sell gift cards?",
    answer:
      "Absolutely! We currently offer Been Coffee & Cake gift cards. Pop into the shop and speak to a member of the team.",
  },
  {
    question: "Can I book a table?",
    answer: "Sure, drop us a message below.",
  },
  {
    question: "Do you deliver?",
    answer:
      "We don't have our own delivery service, but we're on Deliveroo and Just Eat. Visit our Linktree to find out more.",
    linkUrl: "https://linktr.ee/beencoffeeuk",
    linkText: "Linktree",
  },
  {
    question: "Do you have any jobs going?",
    answer:
      "Please visit our Linktree to see if we have any jobs going. Alternatively, you can email us at careers [at] been [dot] coffee.",
    linkUrl: "https://linktr.ee/beencoffeeuk",
    linkText: "Linktree",
  },
  {
    question: "Do you offer work experience?",
    answer: "Unfortunately not.",
  },
  {
    question: "Where can I learn about your monthly meetups?",
    answer: "Please visit our Linktree!",
    linkUrl: "https://linktr.ee/beencoffeeuk",
    linkText: "Linktree",
  },
  {
    question: "I've lost something!",
    answer: "Oh no! Give us a call!",
    linkUrl: "tel:07592294652",
    linkText: "Phone us",
  },
]
