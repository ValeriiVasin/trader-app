import { config } from './config';
import { TradeLotIframe } from './trade-lot-iframe';

export function App() {
  const itemsToBuy = config.filter((item) => item.operation === 'buy');
  const itemsToSell = config.filter((item) => item.operation === 'sell');

  return (
    <>
      {itemsToSell.length > 0 && (
        <>
          <h2>Продажа</h2>
          <div className="pure-g">
            {itemsToSell.map(({ id, operation, name }) => (
              <div key={id} className="pure-u-1-5">
                <TradeLotIframe id={id} operation={operation} name={name} />
              </div>
            ))}
          </div>
        </>
      )}
      {itemsToBuy.length > 0 && (
        <>
          <h2>Покупка</h2>
          <div className="pure-g">
            {itemsToBuy.map(({ id, operation, name }) => (
              <div key={id} title={name} className="pure-u-1-5">
                <TradeLotIframe id={id} operation={operation} name={name} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
