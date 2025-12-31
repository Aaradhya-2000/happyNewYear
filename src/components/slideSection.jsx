import "../styles/slides.css";

const SlideSection = ({ title, message }) => {
  return (
    <div className="slide-section">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default SlideSection;
