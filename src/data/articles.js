export const articles = [
    {
        id: 1,
        title: 'How I Built EduShare Using the MERN Stack',
        excerpt: 'A deep dive into the architecture and challenges of building a full-stack educational platform.',
        date: 'Oct 15, 2024',
        author: 'Aadarsh Gupta',
        tags: ['MERN', 'Web Dev', 'Education'],
        color: '#00f2ff',
        content: `
            <p>Building <strong>EduShare</strong> was one of the most challenging yet rewarding experiences of my development journey. As a student, I noticed a significant gap in how educational resources were shared among peers. Notes were scattered across WhatsApp groups, Drive links were lost, and there was no centralized repository for past papers. I decided to solve this using the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js).</p>

            <h4>The Architecture</h4>
            <p>I designed EduShare with a monolithic architecture for simplicity but structured it in a way that allows for future microservices migration. The <strong>frontend</strong> is built with React and uses <strong>Context API</strong> for state management, ensuring a smooth user experience without prop drilling. For the <strong>backend</strong>, I used Node.js and Express to create RESTful APIs that handle user authentication, file uploads, and resource management.</p>

            <h4>Key Features & Logic</h4>
            <p>One of the core features is the <strong>role-based access control (RBAC)</strong>. I implemented JWT (JSON Web Tokens) to securely authenticate users and differentiate between students and teachers. Teachers have special privileges to upload and verify content, while students can view and download resources. I also integrated <strong>Multer</strong> for handling file uploads, storing metadata in MongoDB while keeping the actual files in a secure cloud storage bucket.</p>

            <h4>Challenges Faced</h4>
            <p>The biggest challenge was handling <strong>file uploads efficiently</strong>. Initially, large files would timeout the server. I had to implement stream processing and optimize the backend configuration to handle larger payloads. Another hurdle was implementing the <strong>search algorithm</strong>. I wanted users to find notes by subject, teacher, or topic instantly. I implemented MongoDB text indexes to make search queries lightning fast.</p>

            <h4>Design Decisions</h4>
            <p>I chose a <strong>glassmorphism UI</strong> design to make the platform feel modern and engaging. Using Tailwind CSS allowed me to rapidly prototype and ensure responsiveness across devices. I also prioritized <strong>accessibility</strong>, ensuring that color contrasts and font sizes were readable for everyone.</p>

            <h4>Conclusion</h4>
            <p>EduShare is more than just a project; it's a solution to a real-world problem. It taught me the importance of <strong>scalable architecture</strong>, <strong>secure authentication</strong>, and <strong>user-centric design</strong>. Moving forward, I plan to add real-time collaboration features using Socket.io.</p>
        `
    },
    {
        id: 2,
        title: 'My Journey Into Data Science',
        excerpt: 'From basic statistics to machine learning models: how I started my data science career.',
        date: 'Nov 02, 2024',
        author: 'Aadarsh Gupta',
        tags: ['Data Science', 'Python', 'ML'],
        color: '#7000ff',
        content: `
            <p>Data Science has always fascinated me—not just the "science" part, but the art of storytelling with data. My journey began not with complex neural networks, but with simple <strong>Excel spreadsheets</strong> and a curiosity to find patterns in chaos. I realized that data is the new oil, but raw data is useless without the tools to refine it.</p>

            <h4>Starting with Python</h4>
            <p>I started by mastering <strong>Python</strong>, the lingua franca of data science. Libraries like <strong>Pandas</strong> and <strong>NumPy</strong> became my daily drivers. I spent weeks cleaning messy datasets, handling missing values, and understanding data types. I learned that 80% of a data scientist's job is data cleaning, and only 20% is building models.</p>

            <h4>The Shift to Machine Learning</h4>
            <p>Once I was comfortable with data manipulation, I moved to <strong>Machine Learning</strong>. I started with <strong>Scikit-learn</strong>, implementing linear regression and decision trees. My first "aha!" moment was when I built a model to predict housing prices and achieved an accuracy of 85%. It wasn't perfect, but it was a start. I then explored <strong>Supervised vs. Unsupervised learning</strong>, understanding when to use classification and when to use clustering.</p>

            <h4>Real-World Projects</h4>
            <p>Theory is good, but practice is better. I worked on an <strong>Email Spam Detection System</strong> using NLP (Natural Language Processing). This project taught me about <strong>TF-IDF vectorization</strong> and how computers "understand" text. I also built a <strong>Job Analytics Dashboard</strong> using SQL and PowerBI, which helped me understand the business side of data analytics.</p>

            <h4>Key Insights</h4>
            <p>One major insight I gained is that <strong>domain knowledge is crucial</strong>. You can run the best algorithms, but if you don't understand the context of the data, your results are meaningless. I also learned the importance of <strong>model evaluation metrics</strong> like Precision, Recall, and F1-Score, beyond just simple accuracy.</p>

            <h4>What's Next?</h4>
            <p>I am currently diving deeper into <strong>Deep Learning</strong> and <strong>Neural Networks</strong>. The field of AI is evolving rapidly, and I am excited to be a part of it. My goal is to build intelligent systems that can solve complex human problems.</p>
        `
    },
    {
        id: 3,
        title: 'How Anti-Gravity UI Improves User Experience',
        excerpt: 'Exploring the psychology behind motion design and immersive web experiences.',
        date: 'Dec 10, 2024',
        author: 'Aadarsh Gupta',
        tags: ['UI/UX', 'Design', 'Frontend'],
        color: '#00f2ff',
        content: `
            <p>In the world of web development, "flat design" has dominated for years. But recently, we've seen a shift towards more immersive, dynamic interfaces. I call this the <strong>Anti-Gravity UI</strong>—a design philosophy that defies static layouts and embraces motion, depth, and fluidity.</p>

            <h4>The Psychology of Motion</h4>
            <p>Humans are evolutionary hardwired to notice motion. It signals danger, opportunity, or change. By incorporating <strong>subtle, physics-based animations</strong>, we can guide the user's attention without them even realizing it. Anti-Gravity UI uses floating elements, parallax effects, and smooth transitions to create a sense of <strong>weightlessness and flow</strong>.</p>

            <h4>Glassmorphism & Depth</h4>
            <p>A key component of this style is <strong>Glassmorphism</strong>. By using background blur and semi-transparent layers, we create a sense of depth hierarchy. This isn't just aesthetic; it helps users understand which elements are interactive and which are background. It mimics the way we perceive objects in the real world—layered and interacting with light.</p>

            <h4>Implementing "Anti-Gravity"</h4>
            <p>For my portfolio, I used <strong>Framer Motion</strong> to implement these effects. The floating particles in the background aren't just random; they respond to mouse movement, creating a connection between the user and the interface. The cards hover and scale when interacted with, providing immediate <strong>tactile feedback</strong>.</p>

            <h4>Performance Considerations</h4>
            <p>The challenge with heavy motion is performance. To ensure a smooth 60fps experience, I utilized <strong>hardware acceleration</strong> (GPU) for animations and optimized the rendering logic. Using CSS transforms instead of layout properties (like top/left) ensures that the browser doesn't have to re-paint the entire page on every frame.</p>

            <h4>Conclusion</h4>
            <p>Anti-Gravity UI is about making the web feel <strong>alive</strong>. It transforms a static webpage into a dynamic environment. When done right, it doesn't just look cool—it lowers bounce rates, increases engagement, and leaves a lasting impression on the user.</p>
        `
    }
];
