import { useNavigate, useParams } from "react-router-dom";
import pattern_program from "../Blog/topics/pattern-program";

function BlogDetails() {
  const navigate = useNavigate();
  const { category } = useParams();

  const topicFiles = {
    pattern_program: pattern_program,
  };

  const selectedTopic = topicFiles[category] || [];

  return (
    <section id="dsa" style={{ padding: "20px" }}>
      <p className="section__text__p1">My DSA Learning Journey</p>
      <h1 className="section-title">DSA Points</h1>

      <div className="experience-details-container">
        <div className="blog-containers">
          {selectedTopic.length > 0 ? (
            selectedTopic.map((point, idx) => (
              <div
                className="blog-details-container color-container"
                key={idx}
                style={{
                  background: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <h2 className="experience-sub-title project-title">{point.title}</h2>
                <p
                  className="project-description"
                  style={{ whiteSpace: "pre-line", marginBottom: "15px" }}
                >
                  {point.description}
                </p>

                <h4>💻 Code:</h4>
                <pre
                  style={{
                    background: "#1e1e1e",
                    color: "#dcdcdc",
                    padding: "15px",
                    borderRadius: "8px",
                    overflowX: "auto",
                  }}
                >
                  <code>{point.code}</code>
                </pre>

                <h4 style={{ marginTop: "15px" }}>📤 Output:</h4>
                <pre
                  style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  {point.output}
                </pre>
              </div>
            ))
          ) : (
            <p>No data found for this topic.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
