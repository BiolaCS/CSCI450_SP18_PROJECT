// made the questions into arrays to streamline the rendering code in QuestionnaireScreen.js
// questions.length will give us the size of the array.
// adding questions will dynamically allow the survey to grow
// the 0th element of each section is the prompt
var questions = [
  // Section 1 - 13 questions
  [
    "Administration: I am a goal and object-oriented individual who has strong organizational abilities. It is possible for me to coordinate resources in order to accomplish tasks as quickly as possible.",
    "Evangelism/Outreach: I am one with a strong desire to share the Gospel with unbelievers in every possible situation and through all possible means. ",
    "Giving: I have the ability to give material goods and financial resources with joy, so that the needs of the Lord’s work are met. I am also good at giving encouragements and share God’s live with those who need to be comforted/loved",
    "Hospitality (Ushers): I have the ability to make guests feel comfortable and “at home.” ",
    "Prophecy: I have the ability to proclaim God’s truth without compromise. I have strong convictions and am persuasive in defining right and wrong.",
    "Service: I have the ability to perform any task with joy that benefits others and meets practical needs. In addition, I am motivated by the desire to further the ministry by meeting genuine needs of another individual",
    "Shepherding: I have the unique ability to take responsibility for the long-term spiritual growth of a group of believers. I assume responsibility to guide others toward spiritual growth, feed them spiritual food, and protect the flock. ",
    "Teaching: I have the ability to research and explain God’s truth so there is understanding and application in the lives of others.",
  ],
  // Section 2 - 5 questions
  [
    "Working with children?",
    "Playing music and leading worship?",
    "Working behind the scenes and doing utility tasks?",
    "Interacting with people and greeting them?",
    "Teaching and leading small group?"
  ],
  // Section 3 - 5 questions
  [
    "Working with children?",
    "Playing music and leading worship?",
    "Working behind the scenes and doing utility tasks?",
    "Interacting with people and greeting them?",
    "Teaching and leading small group?"
  ],
  // Section 4 - 16 questions
  [
    "How proficient are you at staying focused on a task that involves being on the internet? (1 being not at all)",
    "How good are you at estimating how much time a task will take? (1 being not at all)",
    "How often are you reminded of your value, not by your skills or looks, but by the Gospel? (1 being not at all)",
    "Do you think that you take a lot of breaks when working on a task? (1 being that you rarely take breaks)",
    "How often can you sleep with the peace that you’ve accomplished everything you have wanted in your day? (1 being not at all)",
    "How often can you get up with the hope that today will be productive and rewarding? (100 being very often)",
    "How often do you check if your priorities are correct and how often do you feel satisfied from it? (1 being not at all)",
    "How often do you read books on: Theology & spirituality & bible related, Textbooks for learning, Literary books? (1 being not at all)",
    "How aware are you when you act or talk? (1 being not at all)",
    "Do you categorize yourself as gentle and relatable? (1 being not at all)",
    "Do you see yourself as more careful or carefree? (1 being careful)",
    "Are you organized in time or in general, life? (1 being not organized)",
    "How much do you emphasize respect? (1 being not at all)",
    "How persuasive are you? (1 being not persuasive at all)",
    "How competitive are you? (1 being not at all)",
    "How accepting and loving are you? (1 being not at all)"
  ],
  // Section 5 - 6 questions
  [
    "How do you think people would rate you? (1 being not very well)",
    "How much of a people-oriented person are you? (1 being not at all)",
    "How much do you enjoy speaking in front of people? (1 being that you hate it)",
    "How easily swayed are you by the the opinions of others? (1 being not easily swayed)",
    "How much are your decisions influenced by careful planning or through spontaneity? (1 is careful planning)",
    "How often do you have a physical copy of the Bible with you? (1 being never)"
  ]
]
  
var prompts = [
  "On a scale from 1-100 what fields do you think you are gifted in?",
  "On a scale from 1-100, how much do you ENJOY ____",
  "On a scale from 1-100, how much EXPERIENCE do you have ____",
  "On a scale from 1-100",
  "On a scale from 1-100",
]
export {questions};
export {prompts};
