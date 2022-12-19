interface ConfigItem {
  name: string;
  id: number;
  operation: 'buy' | 'sell';
}

export const config: Array<ConfigItem> = [
  {
    name: 'Монеты L (1000 шт.)',
    id: 93628,
    operation: 'sell',
  },
  {
    name: 'Монеты L (8000 шт.)',
    id: 93629,
    operation: 'sell',
  },
  {
    name: 'Браслет Призыва Агатиона Ур. 5',
    id: 91161,
    operation: 'buy',
  },
  {
    name: 'Браслет для Талисманов Ур. 6',
    id: 92032,
    operation: 'buy',
  },
  {
    name: 'Брошь Ур. 5',
    id: 91304,
    operation: 'buy',
  },
  {
    name: 'Камень Эволюции Духа Ветра',
    id: 91033,
    operation: 'buy',
  },
  {
    name: 'Камень Эволюции Духа Огня',
    id: 91032,
    operation: 'buy',
  },
];
