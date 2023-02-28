import PropTypes from 'prop-types';

function Food({ name, picture, rating}) {
  return (
    <div>
      <h2>I like { name }</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={ name } />
    </div>
  )
}

const foodILike = [
  {
    id:1,
    name: 'asd',
    image: 'https://i.imgur.com/CUG0Aof.jpeg',
    rating: 3,
  },
  {
    id:2,
    name: 'asdasd',
    image: 'https://i.imgur.com/GbA4xZx.jpeg',
    rating: 5,
  },
  {
    id:3,
    name: 'qwzxczxcqwe',
    image: 'https://i.imgur.com/LEPVwI7.jpeg',
  },
];

function App() {
  //return <div className="App" />;
  return (
    <div>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;
