import "../styles/bioCard.css";

export default function BioCard() {
  return (
    <div className="terminal-wrapper">
      <div className="terminal">
        {/* Header */}
        <div className="terminal-header">
          <div className="dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="title">~/portfolio</div>
        </div>

        {/* Body */}
        <div className="terminal-body">
          <div className="line">
            <span className="prompt">$</span> cat bio.txt
            <br />
            A passionate <span className="blue">Computer Applications</span>{" "}
            student learning <span className="purple">web development</span>{" "}
            and <span className="pink">software engineering</span>. Building
            projects, exploring new technologies, and growing every day.
            <br />
            <span className="prompt">$</span>
            <span className="cursor">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
