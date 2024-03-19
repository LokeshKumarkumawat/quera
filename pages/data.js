export const data = [
  {
    id: 1,
    title: "A step-by-step guide to getting started with HTML forms",
    slug: "step-by-step-guide-to-html-forms",
    author: "John Doe",
    content:
      "Amidst the shelves adorned with fairy lights, a shy bookseller named Alice whispers tales of magic to anyone who ventures in. Each book holds a secret world waiting to be discovered, inviting visitors to lose themselves in stories that transcend reality.",
    category: "Web Development",
    read: `<div class="form-info">
    <h2>Learning About HTML Forms</h2>
    <p>HTML forms are used to collect user input on a web page. They allow users to enter data which can be sent to a server for processing. Forms are composed of various form elements such as text fields, radio buttons, checkboxes, dropdown menus, etc.</p>
    
    <h3>Common Form Elements:</h3>
    <ul>
      <li><strong>Input:</strong> Text fields, password fields, checkboxes, radio buttons, etc.</li>
      <li><strong>Select:</strong> Dropdown menus to select one or more options.</li>
      <li><strong>Textarea:</strong> Multi-line text input area.</li>
      <li><strong>Button:</strong> Submit button, reset button, etc.</li>
    </ul>
    
    <h3>HTML Form Structure:</h3>
    <pre>
      <code>
        &lt;form action="submit.php" method="post"&gt;
          &lt;label for="username"&gt;Username:&lt;/label&gt;
          &lt;input type="text" id="username" name="username"&gt;
          
          &lt;label for="password"&gt;Password:&lt;/label&gt;
          &lt;input type="password" id="password" name="password"&gt;
          
          &lt;input type="submit" value="Submit"&gt;
        &lt;/form&gt;
      </code>
    </pre>
    
    <p>In the above example, a basic HTML form is created with username and password fields. When submitted, the form data is sent to the "submit.php" file using the POST method.</p>
  </div>
  `,
    publishedDate: "Dec. 8, 2022",
    tags: ["javascript", "html", "css"],
  },
  {
    id: 2,
    title: "Mastering CSS Flexbox",
    slug: "mastering-css-flexbox",
    author: "Jane Smith",
    content:
      "In the realm of web design, understanding CSS Flexbox is akin to unlocking a treasure trove of layout possibilities. With its intuitive approach to building flexible and responsive layouts, mastering Flexbox empowers developers to create visually stunning websites with ease.",
    category: "Web Development",
    read: "5 minutes",
    publishedDate: "Jan. 15, 2023",
    tags: ["css", "web design", "responsive design"],
  },
  {
    id: 3,
    title: "The Power of JavaScript Promises",
    slug: "power-of-javascript-promises",
    author: "Alex Johnson",
    content:
      "JavaScript promises are a cornerstone of modern asynchronous programming, providing a clean and concise syntax for handling asynchronous operations. By mastering promises, developers can write more efficient and maintainable code, unlocking new possibilities in web development.",
    category: "Web Development",
    read: "4 minutes",
    publishedDate: "Feb. 22, 2023",
    tags: ["javascript", "asynchronous programming", "async/await"],
  },
  {
    id: 4,
    title: "Responsive Web Design Principles",
    slug: "responsive-web-design-principles",
    author: "Emma Davis",
    content:
      "In the age of mobile devices and varying screen sizes, responsive web design has become essential for creating user-friendly and visually appealing websites. In this guide, we'll explore the key principles and techniques of responsive web design.",
    category: "Web Development",
    read: "6 minutes",
    publishedDate: "Mar. 10, 2023",
    tags: ["html", "css", "responsive design"],
  },
  {
    id: 5,
    title: "Introduction to Node.js",
    slug: "introduction-to-node-js",
    author: "Michael Johnson",
    content:
      "Node.js is a powerful JavaScript runtime environment that allows developers to build server-side applications with ease. In this introduction, we'll cover the basics of Node.js and how to get started with building your first server-side application.",
    category: "Web Development",
    read: "5 minutes",
    publishedDate: "Apr. 5, 2023",
    tags: ["node.js", "javascript", "server-side"],
  },
  {
    id: 6,
    title: "Building RESTful APIs with Express.js",
    slug: "building-restful-apis-with-express-js",
    author: "Sophia Lee",
    content:
      "Express.js is a minimalist web framework for Node.js that simplifies the process of building server-side applications and RESTful APIs. In this tutorial, we'll explore how to use Express.js to create a RESTful API for managing user data.",
    category: "Web Development",
    read: "7 minutes",
    publishedDate: "May 20, 2023",
    tags: ["node.js", "express.js", "restful api"],
  },
  {
    id: 7,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    author: "Emily Taylor",
    content:
      "React is a popular JavaScript library for building user interfaces, developed by Facebook. In this guide, we'll cover the basics of React and how to create your first React application.",
    category: "Web Development",
    read: "4 minutes",
    publishedDate: "Jun. 12, 2023",
    tags: ["react", "javascript", "frontend"],
  },
  {
    id: 8,
    title: "Modern JavaScript ES6 Features",
    slug: "modern-javascript-es6-features",
    author: "David Brown",
    content:
      "ECMAScript 6 (ES6) introduced many new features and enhancements to JavaScript, making it more powerful and expressive. In this tutorial, we'll explore some of the most useful ES6 features and how to use them in your projects.",
    category: "Web Development",
    read: "6 minutes",
    publishedDate: "Jul. 8, 2023",
    tags: ["javascript", "es6", "programming"],
  },
  {
    id: 9,
    title: "Introduction to MongoDB",
    slug: "introduction-to-mongodb",
    author: "Daniel White",
    content:
      "MongoDB is a popular NoSQL database that offers high performance, scalability, and flexibility. In this introduction, we'll cover the basics of MongoDB and how to get started with building database-driven applications.",
    category: "Web Development",
    read: "5 minutes",
    publishedDate: "Aug. 15, 2023",
    tags: ["mongodb", "database", "nosql"],
  },
  {
    id: 10,
    title: "Essential Git Commands for Developers",
    slug: "essential-git-commands-for-developers",
    author: "Jessica Green",
    content:
      "Git is a powerful version control system that is essential for collaborative software development. In this guide, we'll cover some of the most important Git commands that every developer should know.",
    category: "Software Development",
    read: "4 minutes",
    publishedDate: "Sep. 22, 2023",
    tags: ["git", "version control", "collaboration"],
  },
  {
    id: 11,
    title: "Understanding TypeScript",
    slug: "understanding-typescript",
    author: "Ryan Clark",
    content:
      "TypeScript is a superset of JavaScript that adds static typing and other features to the language. In this tutorial, we'll explore the fundamentals of TypeScript and how it can improve the development experience.",
    category: "Web Development",
    read: "6 minutes",
    publishedDate: "Oct. 10, 2023",
    tags: ["typescript", "javascript", "static typing"],
  },

  {
    id: 13,
    title: "Responsive Design with Bootstrap",
    slug: "responsive-design-with-bootstrap",
    author: "Olivia Martinez",
    content:
      "Bootstrap is a popular front-end framework for building responsive and mobile-first websites. In this guide, we'll explore how to use Bootstrap to create responsive layouts and components for modern web applications.",
    category: "Web Development",
    read: "5 minutes",
    publishedDate: "Dec. 3, 2023",
    tags: ["bootstrap", "responsive design", "frontend"],
  },
  {
    id: 14,
    title: "Introduction to Python Flask",
    slug: "introduction-to-python-flask",
    author: "Michael Johnson",
    content:
      "Flask is a lightweight and flexible web framework for Python. In this introduction, we'll cover the basics of Flask and how to create a simple web application using this powerful framework.",
    category: "Python Development",
    read: "4 minutes",
    publishedDate: "Jan. 8, 2024",
    tags: ["python", "flask", "web development"],
  },
  {
    id: 15,
    title: "Advanced CSS Techniques",
    slug: "advanced-css-techniques",
    author: "Emma Davis",
    content:
      "CSS offers a wide range of powerful features and techniques for styling web pages. In this tutorial, we'll explore some advanced CSS techniques and how to use them to create modern and visually appealing designs.",
    category: "Web Development",
    read: "6 minutes",
    publishedDate: "Feb. 15, 2024",
    tags: ["css", "web design", "frontend"],
  },
  {
    id: 16,
    title: "Introduction to SQL",
    slug: "introduction-to-sql",
    author: "David Brown",
    content:
      "SQL (Structured Query Language) is a standard language for accessing and manipulating databases. In this introduction, we'll cover the basics of SQL and how to perform common database operations using this powerful language.",
    category: "Database Management",
    read: "5 minutes",
    publishedDate: "Mar. 10, 2024",
    tags: ["sql", "database", "query language"],
  },
  {
    id: 17,
    title: "Creating Dynamic Web Applications with React and Redux",
    slug: "creating-dynamic-web-applications-with-react-and-redux",
    author: "Emily Taylor",
    content:
      "Redux is a predictable state container for JavaScript apps, used for managing application state. In this tutorial, we'll explore how to integrate Redux with React to create dynamic and scalable web applications.",
    category: "Web Development",
    read: "7 minutes",
    publishedDate: "Apr. 5, 2024",
    tags: ["react", "redux", "state management"],
  },
  {
    id: 18,
    title: "Introduction to Java Spring Boot",
    slug: "introduction-to-java-spring-boot",
    author: "Michael Brown",
    content:
      "Java Spring Boot is a powerful framework for building web applications and microservices with Java. Its simplicity and convention-over-configuration approach make it a popular choice among developers for rapidly prototyping and deploying production-ready applications.",
    category: "Java Development",
    read: "6 minutes",
    publishedDate: "Nov. 10, 2023",
    tags: ["java", "spring boot", "microservices"],
  },
  {
    id: 19,
    title: "Building Scalable RESTful APIs with Node.js",
    slug: "building-scalable-restful-apis-with-node-js",
    author: "Sophia Lee",
    content:
      "Node.js is a versatile platform for building server-side applications, and when combined with Express.js, it becomes a powerful tool for creating scalable and maintainable RESTful APIs. In this guide, we'll explore best practices for designing and implementing RESTful APIs with Node.js.",
    category: "Web Development",
    read: "7 minutes",
    publishedDate: "Dec. 5, 2023",
    tags: ["node.js", "express.js", "restful api"],
  },
  {
    id: 20,
    title: "Getting Started with React Native",
    slug: "getting-started-with-react-native",
    author: "Emily Taylor",
    content:
      "React Native is a popular framework for building cross-platform mobile applications using JavaScript and React. In this tutorial, we'll explore the fundamentals of React Native development and build a simple mobile app from scratch.",
    category: "Mobile Development",
    read: "5 minutes",
    publishedDate: "Jan. 20, 2024",
    tags: ["react native", "mobile development", "javascript"],
  },
];
