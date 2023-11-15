import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const quantityOfData = stats.length - 1;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(data => (
          <li
            key={data.id}
            className={css.item}
            style={{
              backgroundColor:
                '#' + Math.floor(Math.random() * 16777215).toString(16),
              width: `calc(100% / ${quantityOfData})`,
            }}
          >
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
