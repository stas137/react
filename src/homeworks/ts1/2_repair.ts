export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getFakeApi = async (): Promise<void> => {
  const result: unknown = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
    response.json()
  );

  if (typeof result === 'object' && result !== null) {
    if ('userId' in result && 'id' in result && 'title' in result && 'completed' in result) {
      // todo check type
      console.log(result);
      return;
    }
  }

  console.log('incorrect: ', result);
};

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export class SomeClass {
  set: Set<number>;
  channel: BroadcastChannel;

  constructor() {
    this.set = new Set<number>([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Data = {
  type: 'Money' | 'Percent';
  value: DataValue;
};

export type DataValue = Money | Percent;

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case 'Money': {
      const money = data.value as Money;
      return money.amount;
    }
    case 'Percent': {
      return null;
    }
    default: {
      const unhandled: never = data.type;
      throw new Error(`unknown type: ${unhandled}`);
    }
  }
};
