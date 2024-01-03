import newDataJs from '../../assets/newData.json'
import './singleRental.css'

export default function singleRental() {
	
  return (
    <div className='rentalContainer'>
      {newDataJs &&
        newDataJs.map((record) => {
          return (
            <article key={record.id} >
                <div className="rentalContent">
                    <img src={ record.cover } />
					{ record.title }
              </div>
            </article>
          );
        })}
    </div>
  );
}