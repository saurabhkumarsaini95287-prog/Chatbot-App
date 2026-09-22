import Bot from "../model/bot.model.js";
import User from "../model/user.model.js";

export const Message=async(req,res)=>{
   try {
    const {text}=req.body;
 
    if(!text?.trim()){
        return res.status(400).json({error:"Text cannot be empty"});
    }

    const user=await User.create({
        sender:"user",
        text
    })

    // Data
    const botResponses={
  "hello": "Hi, How I can help you!!",
  "can we become friend": "Yes",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name?": "I’m ChatBot, your virtual assistant.",
  "who made you": "I was created by developers to help answer your questions.",
  "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
  "what is the time": "I can’t see a clock, but your device should know.",
  "bye": "Goodbye! Have a great day.",
  "thank you": "You’re welcome!",
  "i love you": "That’s sweet! I’m here to help you anytime.",
  "where are you from": "I live in the cloud — no rent, no bills!",
  "what can you do": "I can chat with you, answer questions, and keep you company.",

 "what is python": "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",

"what is java?": "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",

"what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a **base condition** to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",

"who is prime minister of india?": "Narendra Modi is the Prime Minister of India since May 2014.\n• Belongs to Bharatiya Janata Party (BJP)\n• Represents Varanasi constituency\n• Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India\n• Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

"what is g20": "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted G20 summit in 2023",

"tell me about yourself": "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",

"why should we hire you": "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

"what is leadership": "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

"who is virat kohli": "Virat Kohli is one of India’s greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",

"what is ipl": "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams",

"what is html": "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.\n• HTML defines headings, paragraphs, images, links, forms, tables, etc.\n• It uses tags such as <h1>, <p>, <img>, <a>, and <form>\n• HTML is the basic building block of websites.",

"what is css": "CSS stands for Cascading Style Sheets. It is used to style and design web pages.\n• Used for colors, fonts, spacing, layouts and animations\n• Supports responsive design for mobile, tablet and desktop\n• Common layout systems include Flexbox and CSS Grid.",

"what is javascript": "JavaScript is a programming language mainly used to make websites interactive and dynamic.\n• Used for buttons, forms, animations and API calls\n• Can run in browsers and on servers using Node.js\n• Supports object-oriented, functional and asynchronous programming.",

"what is react": "React is a JavaScript library used for building user interfaces, especially single-page applications.\n• Developed and maintained by Meta\n• Uses reusable components\n• Uses JSX to write UI\n• Uses state and props to manage data\n• Commonly used with React Router, Axios and APIs.",

"what is node js": "Node.js is a JavaScript runtime that allows JavaScript to run outside the browser.\n• Built on Chrome's V8 JavaScript engine\n• Commonly used for backend development\n• Uses npm for package management\n• Useful for APIs, web servers and real-time applications.",

"what is express js": "Express.js is a lightweight web framework for Node.js.\n• Used to create backend servers and REST APIs\n• Provides routing and middleware support\n• Commonly used with MongoDB in MERN applications.",

"what is mongodb": "MongoDB is a NoSQL database that stores data in flexible JSON-like documents.\n• Database contains collections\n• Collections contain documents\n• Documents contain key-value pairs\n• Commonly used with Node.js and Express.js.",

"what is mern": "MERN is a popular full-stack JavaScript technology stack.\n• M = MongoDB for database\n• E = Express.js for backend framework\n• R = React.js for frontend\n• N = Node.js for server-side JavaScript\nIt can be used to build complete web applications.",

"what is api": "API stands for Application Programming Interface. It allows different software applications to communicate with each other.\n• Frontend can send requests to a backend API\n• Backend processes the request\n• Backend sends a response\n• REST APIs commonly use GET, POST, PUT and DELETE methods.",

"what is rest api": "REST API is an API architecture commonly used for communication between frontend and backend applications.\n• GET is generally used to retrieve data\n• POST is used to create data\n• PUT/PATCH is used to update data\n• DELETE is used to remove data.",

"what is json": "JSON stands for JavaScript Object Notation. It is a lightweight format used to exchange data between applications.\nExample:\n{\n  \"name\": \"Saurabh\",\n  \"age\": 22\n}\nJSON is commonly used in APIs.",

"what is database": "A database is a system used to store, organize and manage data.\n• MySQL and PostgreSQL are relational databases\n• MongoDB is a NoSQL database\n• Applications use databases to store users, products, messages and other information.",

"what is frontend": "Frontend is the part of an application that users see and interact with.\n• Common technologies: HTML, CSS and JavaScript\n• Popular frameworks/libraries: React, Angular and Vue\n• It handles the user interface and user interactions.",

"what is backend": "Backend is the server-side part of an application.\n• Handles business logic\n• Communicates with databases\n• Provides APIs\n• Handles authentication and authorization\n• Common technologies include Node.js, Java, Python, PHP and .NET.",

"what is full stack development": "Full-stack development means working on both frontend and backend of an application.\n• Frontend handles the user interface\n• Backend handles server-side logic and APIs\n• Database stores application data\n• A MERN developer is a common type of full-stack developer.",

"what is github": "GitHub is a platform used to store, manage and collaborate on software projects using Git.\n• Used for source code management\n• Supports repositories, branches and pull requests\n• Developers commonly use GitHub to showcase projects and collaborate with teams.",

"what is git": "Git is a distributed version control system used to track changes in source code.\n• git init creates a repository\n• git add stages changes\n• git commit saves changes\n• git push uploads changes to a remote repository such as GitHub.",

"what is npm": "npm stands for Node Package Manager. It is used to install and manage JavaScript and Node.js packages.\nExample:\nnpm install express\nThis installs Express.js into a Node.js project.",

"what is react native": "React Native is a framework used to build mobile applications using JavaScript and React.\n• Can build Android and iOS applications\n• Uses React concepts such as components, props and state\n• Allows developers to share much of the code between platforms.",

"what is kotlin": "Kotlin is a modern programming language developed by JetBrains.\n• Officially supported for Android development\n• Concise and readable syntax\n• Supports object-oriented and functional programming\n• Commonly used with Android Studio.",

"what is android studio": "Android Studio is the official integrated development environment for Android application development.\n• Supports Kotlin and Java\n• Provides emulator and debugging tools\n• Used to build, test and publish Android applications.",

"what is ai": "AI stands for Artificial Intelligence. It refers to computer systems that can perform tasks that normally require human intelligence.\n• Examples include language understanding, image recognition and recommendation systems\n• AI is used in chatbots, healthcare, finance, education and many other fields.",

"what is machine learning": "Machine Learning is a branch of AI where computers learn patterns from data and use those patterns to make predictions or decisions.\n• Supervised learning\n• Unsupervised learning\n• Reinforcement learning\nExamples include recommendation systems and spam detection.",

"what is chatbot": "A chatbot is a software application designed to communicate with users through text or voice.\n• Can answer questions\n• Can provide information\n• Can automate customer support\n• AI chatbots can generate responses using large language models.",

"what is gemini": "Gemini is Google's family of AI models that can understand and generate different types of content.\n• Can be used for text generation and question answering\n• Developers can integrate Gemini into applications through APIs\n• It can be used to build AI assistants and chatbots.",

"what is prompt": "A prompt is the instruction or question given to an AI model.\nExample:\n'Explain React in simple words.'\nThe AI uses the prompt to understand what response the user wants.",

"what is jwt": "JWT stands for JSON Web Token. It is commonly used for authentication in web applications.\n• User logs in with credentials\n• Server generates a token\n• Client sends the token with future requests\n• Server verifies the token to authenticate the user.",

"what is authentication": "Authentication is the process of verifying who a user is.\nExample: Login using email and password.\nCommon authentication methods include passwords, OTPs, sessions and JWT.",

"what is authorization": "Authorization determines what an authenticated user is allowed to access.\nExample:\n• Normal user can view their profile\n• Admin can manage users and products\nAuthentication asks 'Who are you?'\nAuthorization asks 'What are you allowed to do?'",

"what is password hashing": "Password hashing converts a password into a one-way hashed value before storing it in a database.\n• Passwords should not normally be stored as plain text\n• bcrypt is commonly used in Node.js applications\n• During login, the entered password is compared with the stored hash.",

"what is async await": "async and await are JavaScript features used to work with asynchronous operations such as API calls and database operations.\n• async makes a function return a Promise\n• await waits for a Promise to complete\n• They make asynchronous code easier to read.",

"what is promise": "A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation.\nIt can be in three states:\n• Pending\n• Fulfilled\n• Rejected",

"what is callback": "A callback is a function passed as an argument to another function and executed later.\nCallbacks are commonly used for handling asynchronous operations and events.",

"what is oop": "OOP stands for Object-Oriented Programming. It is a programming approach based on objects and classes.\nThe four common principles are:\n• Encapsulation\n• Inheritance\n• Polymorphism\n• Abstraction",

"what is encapsulation": "Encapsulation means combining data and the methods that operate on that data inside a class or object.\nIt also helps control access to internal data using access modifiers or methods such as getters and setters.",

"what is inheritance": "Inheritance allows one class to acquire properties and methods from another class.\nExample: A Dog class can inherit common properties and methods from an Animal class.",

"what is polymorphism": "Polymorphism means one interface or method can have different implementations.\nFor example, different classes can override the same method and provide their own behavior.",

"what is abstraction": "Abstraction means hiding unnecessary implementation details and exposing only the important functionality.\nIn Java and Kotlin, abstraction can be implemented using abstract classes and interfaces.",

"what is algorithm": "An algorithm is a step-by-step procedure used to solve a problem or perform a task.\nExamples include sorting algorithms, searching algorithms and graph traversal algorithms.",

"what is data structure": "A data structure is a way of organizing and storing data so it can be accessed and modified efficiently.\nExamples include arrays, linked lists, stacks, queues, trees, graphs and hash tables.",

"what is dsa": "DSA stands for Data Structures and Algorithms.\n• Data structures organize data\n• Algorithms solve problems using that data\nDSA is important for programming, problem solving and technical interviews.",

"what is recursion": "Recursion is a technique where a function calls itself to solve a smaller version of the same problem.\n• A base condition is required to stop recursion\n• Common examples include factorial, Fibonacci and tree traversal.",

"what is compiler": "A compiler translates source code into another form, often machine code or intermediate code, so it can be executed.\nLanguages such as Java use compilation to bytecode, which runs on the JVM.",

"what is framework": "A framework provides a structure and tools for developing applications.\nExamples include React, Express.js, Spring Boot and Django.\nA framework helps developers build applications using established patterns and features.",

"what is library": "A library is a collection of reusable code that developers can use in their applications.\nFor example, React is commonly described as a JavaScript library for building user interfaces.",

"what is debugging": "Debugging is the process of finding and fixing errors or unexpected behavior in a program.\nDevelopers commonly use console logs, debuggers, breakpoints and error messages to identify problems.",

"what is error": "A programming error is a problem that causes a program to behave incorrectly or fail.\nCommon types include syntax errors, runtime errors and logical errors.",

"how to learn programming": "A good way to learn programming is:\n1. Learn the basics of one language\n2. Practice small coding problems\n3. Build small projects\n4. Learn Git and GitHub\n5. Learn databases and APIs\n6. Build full-stack projects\n7. Practice DSA and interview questions.",

"how to become a web developer": "To become a web developer, you can follow this path:\n1. HTML\n2. CSS\n3. JavaScript\n4. Git and GitHub\n5. React\n6. Node.js and Express.js\n7. MongoDB or another database\n8. REST APIs\n9. Authentication\n10. Build and deploy real projects.",

"good morning": "Good morning! 🌞 I hope you have a great day. How can I help you?",

"good afternoon": "Good afternoon! 😊 How can I help you today?",

"good evening": "Good evening! 🌆 What would you like to know?",

"good night": "Good night! 🌙 Have a great night and take care!",

"how old are you": "I don't have a human age. I'm a software-based chatbot.",

"are you real": "I'm a virtual AI chatbot, so I'm not a human. But I'm here to chat and help you.",

"do you sleep": "No 😄 I don't need sleep. I'm software running on computers.",

"what is your purpose": "My purpose is to communicate with users, answer questions and provide useful information.",

"nice to meet you": "Nice to meet you too! 😊 How can I help you?",

"good job": "Thank you! 😊 I'm glad I could help.",

"help me": "Sure! 😊 Tell me what you need help with, and I'll try my best to assist you.",

"thanks": "You're welcome! 😊",

"see you": "See you later! 👋 Have a great day!",

"tell me another joke": "Teacher: Homework kahan hai? 😡\nStudent: Sir, homework Google Drive par tha... internet nahi tha! 😂",

"tell me a joke": "Why did the computer go to the doctor? Because it had a virus! 😂",

"make me laugh": "Teacher: Tum school late kyun aaye?\nStudent: Sir, board par likha tha 'School Ahead, Go Slow'! 😂",

"funny joke": "Boss: Tum office late kyun aaye?\nEmployee: Sir, sapne me promotion mil rahi thi... uthne ka mann nahi hua! 😂",

"joke": "Friend: Bhai tu gym kyun nahi jaata?\nMe: Jaata hoon...\nFriend: Kab?\nMe: Jab Google Maps par gym search karta hoon! 😂",

"tell me a funny joke": "Interviewer: What is your biggest weakness?\nCandidate: Honesty.\nInterviewer: I don't think honesty is a weakness.\nCandidate: I don't care what you think. 😂",

"make me smile": "Mom: Beta phone chhod do aur padhai karo.\nMe: Maa, phone me bhi to education videos hain!\nMom: Achha? Instagram wali? 😂",

"another joke": "Friend: Bhai tera password kya hai?\nMe: WrongPassword.\nFriend: Ye galat hai.\nMe: Dekha! Tumhe password pata hi nahi tha. 😂",

"programming joke": "Developer ki girlfriend: Tum mujhe time kyun nahi dete?\nDeveloper: Bug fix kar raha tha.\nGirlfriend: Main tumhari girlfriend hoon, bug nahi!\nDeveloper: Isi liye to fix nahi kar pa raha! 😂",

"coding joke": "Programmer: Mera code perfectly chal raha tha.\nComputer: Really?\nProgrammer: Haan.\nComputer: Then explain why I have 27 errors. 😂",

"javascript joke": "JavaScript ne Java se kaha: Bhai hum dono ka naam same jaisa kyun hai?\nJava bola: Marketing team ne confuse kar diya! 😂",

"react joke": "React developer: Mere components reusable hain.\nFriend: Teri girlfriend?\nDeveloper: Bhai uska component reuse nahi kar sakte! 😂",

"developer joke": "Developer ki life:\nMorning: Code likho 💻\nAfternoon: Bug dhundo 🐛\nEvening: Bug fix karo 🔧\nNight: Pata chalta hai bug code me nahi tha! 😂",

"student joke": "Student: Sir exam kab hoga?\nTeacher: Kal.\nStudent: Sir kal to Sunday hai!\nTeacher: To Monday ko aa jana, exam Sunday ko hi hoga! 😂",

"college joke": "Teacher: Attendance kam kyun hai?\nStudent: Sir, main online classes me present tha.\nTeacher: Ye offline college hai!\nStudent: Sir, attendance bhi online hi mark kar dijiye. 😂",

"exam joke": "Exam me question tha: 'Explain your answer.'\nStudent ne likha: 'My answer is explained.' 😂",

"friendship joke": "Friend: Bhai mere paas paise nahi hain.\nMe: Mere paas bhi nahi hain.\nFriend: Chal phir chai peete hain.\nMe: Isi friendship ko to zinda rakhna hai! 😂",

"school joke": "Teacher: Batao, duniya me sabse zyada patience kiske paas hota hai?\nStudent: Wi-Fi ke paas sir...\nHum sab uske connect hone ka wait karte hain! 😂",

"office joke": "Manager: You are late again!\nEmployee: Sir, traffic bahut tha.\nManager: Tum to ghar se work karte ho!\nEmployee: Sir, Wi-Fi traffic tha! 😂",

"money joke": "Friend: Tere paas paise hain?\nMe: Haan.\nFriend: Kitne?\nMe: Phone ki battery jitne... 2% 😂",

"food joke": "Doctor: Aapko exercise karni chahiye.\nMe: Sir, main roz fridge tak walk karta hoon.\nDoctor: Aur?\nMe: Wapas bhi aata hoon! 😂",

"sleep joke": "Mom: Itna kyun so rahe ho?\nMe: Maa, future bright kar raha hoon.\nMom: Kaise?\nMe: Dreams me! 😂",

"love joke": "Me: I love you ❤️\nCrush: Sorry, I see you only as a friend.\nMe: Koi baat nahi.\nAlso me: Friendship bhi cancel! 😂",

"girlfriend joke": "Girlfriend: Tum mujhe kitna pyaar karte ho?\nBoy: Google ke search results se bhi zyada.\nGirlfriend: Matlab?\nBoy: Har baar tumhara hi result sabse pehle aata hai! 😂",

"boyfriend joke": "Girlfriend: Mere liye kya kar sakte ho?\nBoy: Kuch bhi.\nGirlfriend: Shopping?\nBoy: Kuch bhi bola tha... sab kuch nahi! 😂",

"dad joke": "Papa: Beta result kaisa aaya?\nBeta: Papa, result to excellent hai.\nPapa: Marks?\nBeta: Woh thode personal hain. 😂",

"mom joke": "Mom: Beta mehmaan aa rahe hain, room saaf kar lo.\nMe: Maa, woh mujhe dekhne aa rahe hain ya room? 😂",

"whatsapp joke": "Friend: WhatsApp pe online kyun nahi tha?\nMe: Phone haath me tha.\nFriend: To online kyun nahi?\nMe: Main offline rehkar online tha! 😂",

"phone joke": "Mera phone itna smart hai ki jab main padhne baithta hoon, automatically notifications bhej deta hai: 'Come back!' 😂",

"computer joke": "Computer: I need a break.\nMe: Same bro! 😭😂",

"ai joke": "User: Are you intelligent?\nAI: Yes.\nUser: Prove it.\nAI: I understood your question without asking 'Please restart your router.' 😂",

"chatbot joke": "User: Tum boring ho.\nChatbot: That's okay.\nUser: Tumhe bura nahi laga?\nChatbot: Nahi, mere paas feelings ka premium version installed nahi hai. 😂",

"one liner joke": "My wallet is like an onion... opening it makes me cry. 😂",

"more jokes": "Bilkul! 😄 Main jokes ka unlimited pack hoon. Bas bolo: 'another joke'!",

"tell me a sad shayari": "Muskurane ki wajah bhi ajeeb hoti hai,\nKabhi khushi kam aur yaadein zyada hoti hain... 💔",

"sad shayari": "Jise chaha tha dil se,\nWahi sabse zyada dard de gaya... 💔",

"one sad shayari": "Kuch log zindagi me aate hain,\nAur yaadon ke siwa kuch nahi chhod jaate... 🥀",

"heartbreak shayari": "Dil to aaj bhi karta hai tumse baat karne ka,\nBas darr lagta hai phir se toot jaane ka... 💔",

"love sad shayari": "Mohabbat thi isliye khamosh rahe,\nWarna jawab dena humein bhi aata tha... 🥀",

"ek sad shayari": "Waqt badla, log badle,\nBas humari yaadein wahi reh gayi... 💔",

"tum sad ho": "Pata nahi... bas kuch yaadein aaj phir dil ko udaas kar rahi hain. 💔",

"what happened to you": "Kuch nahi hua... bas jinhe apna samjha tha, unhone paraya kar diya. 🥀",

"kya hua ": "Kuch nhi hua... bas jinhe apna samjha tha, unhone paraya kar diya. 🥀",

"did someone hurt you": "Haan... jis par sabse zyada bharosa tha, dard bhi usi ne sabse zyada diya. 💔",

"kya tum kisi ko miss kr rhe ho": "Haan... ek aisa shakhs hai jise bhoolna chahta hoon, par dil har baar yaad kar leta hai. 🥀",

"why are you alone": "Kabhi-kabhi bheed me rehkar bhi insaan akela hota hai... kuch log paas hokar bhi apne nahi hote. 💔",

"tum thik ho": "Haan, main theek hoon... bas ye 'theek hoon' kehna ab aadat si ban gayi hai. 🥀",

"introduction": "Hello, I am a passionate and motivated professional looking to start my career in the IT industry. I have a strong interest in software and web development and enjoy learning new technologies. I have worked on practical projects that helped me improve my technical, problem-solving and teamwork skills. I am a quick learner, adaptable and always willing to take on new challenges. I am looking for an opportunity where I can contribute to the organization while continuously learning and growing professionally.",

"tell me about yourself": "I am a motivated and hardworking individual with a strong interest in technology and software development. I enjoy solving problems, learning new concepts and working on practical projects. I consider myself a quick learner and a team player. I am looking for an opportunity to apply my skills in a professional environment and grow along with the organization.",

}

const normalizedText = text.toLowerCase().trim();

const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
   } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});
   }
}
