import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const dsaPoints = [
  {
    category: "pattern_program",
    title: "Pattern Programs",
    description: "Printing patterns using JavaScript programs has always been an interesting problem domain. We can print different patterns like star patterns, pyramid patterns, Floyd's triangle, Pascal's triangle, etc.",
  },
  {
    category: "arrays_searching",
    title: "Arrays & Searching",
    description: "Mastered common operations, binary search, and patterns in arrays.",
  },
  {
    category: "linked_lists",
    title: "Linked Lists",
    description: "Learned singly and doubly linked lists, reverse and circular lists.",
  },
  {
    category: "stacks_queues",
    title: "Stacks & Queues",
    description: "Implemented stack, queue, and their applications in algorithms.",
  },
  // Add more DSA topics as you learn them
];

function DsaCardSection() {
  const navigate = useNavigate();
  return (
    <section id="dsa">
      <p className="section__text__p1">My DSA Learning Journey</p>
      <h1 className="section-title">DSA Points</h1>
      <div className="experience-details-container">
        <div className="blog-containers">
          {dsaPoints.map((point, idx) => (
            <div className="blog-details-container color-container" key={idx} onClick={() => navigate(`/blog/${point.category}`)}>
              <h2 className="experience-sub-title project-title">{point.title}</h2>
              <p className="project-description">{point.description}</p>
              <Link to={"/blog/"+point.category}>{point.category}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DsaCardSection;
