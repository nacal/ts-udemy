export { };

interface witch {
  magic(): void;
}
interface soldier {
  attack(): void;
}

class Taro implements witch, soldier {
  magic(): void {
    console.log('Magic!')
  }

  attack(): void {
    console.log('attack!')
  }
}

const taro = new Taro();
taro.magic;
taro.attack;
