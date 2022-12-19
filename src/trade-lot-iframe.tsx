interface TradeLotIframeProps {
  name: string;
  id: number;
  operation: 'buy' | 'sell';
}

export function TradeLotIframe({ name, id, operation }: TradeLotIframeProps) {
  return (
    <div>
      <h3>{name}</h3>
      <iframe
        src={`http://l2on.net/?c=market&a=item&id=${id}#${operation === 'buy' ? 'group_buy' : 'group_sell'}`}
        title="name"
        frameBorder="0"
        width="275"
        height="150"
        scrolling="no"
      ></iframe>
    </div>
  );
}
