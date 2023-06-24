/* eslint-disable */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const progressbarStyles = buildStyles({
  pathColor: '#0290ff',
  trailColor: '#d6d6d6',
});

const Progress = () => (
  <>
    <div className="books-section">
      <section className="percent-section">
        <div className="progress-circle">
          <CircularProgressbar value={64} styles={progressbarStyles} />
        </div>
        <div className="percentage">
          <li className="value">64%</li>
          <li className="completed">Completed</li>
        </div>
      </section>
      <div className="percent-separator"></div>
      <section className="chapter-section">
        <ul className="chapter-details">
          <li className="current-chapter">CURRENT CHAPTER</li>
          <li className="chapter-number">Chapter 17</li>
          <li>
            <button type="submit" className="update-progress">
              UPDATE PROGRESS
            </button>
          </li>
        </ul>
      </section>
    </div>
  </>
);

export default Progress;
