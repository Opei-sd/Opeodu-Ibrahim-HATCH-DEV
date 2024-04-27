class Laptop {
  keyboard: KeyBoard[] = [];
  nic: NetworkInterfaceCard;
  screen: Display;
  hardDisk: HardDisk;
  powerState: boolean = false;
  bitKind: BitKind;

  constructor(
    bit: BitKind,
    display: Display,
    nic: NetworkInterfaceCard,
    hd: HardDisk,
    keyBoards: KeyBoard[]
  ) {
    this.bitKind = bit;
    this.screen = display;
    this.nic = nic;
    this.hardDisk = hd;
    this.keyboard = keyBoards;
    this.powerState = false; // the laptop is switched off.
  }

  switchOn() {
    this.powerState = true;
  }

  update(version: number) {}

  shutDown() {
    this.powerState = false;
  }
}

type OsKind = "Linux" | "Mac" | "Windows";
type BitKind = "x64" | "x32" | "x86";

class OperatingSystem {
  kind: OsKind;
  version: number;
}

class HardDisk {
  type: "ssd" | "hdd";
  size: number;
}

class Display {
  size: number;
  type: DisplayType;

  set displaySize(val: number) {
    this.size = val;
  }

  setDisplayType(type: DisplayType) {
    this.type = type;
  }
}

type DisplayType = "amoled" | "lcd" | "oled";

class NetworkInterfaceCard {
  constructor(public readonly name: string) {}
}

class KeyBoard {
  kind: KeyBoardKind;
  layout: KeyBoardLayout;

  constructor(kind: KeyBoardKind) {
    this.kind = kind;
  }
}

type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwrertz" | "Azerty";

const display = new Display();
display.displaySize = 16;
display.setDisplayType("amoled");

const nic = new NetworkInterfaceCard("nitlap");

const hd = new HardDisk();
hd.type = "ssd";
hd.size = 512;

const keyboard1 = new KeyBoard("in-built");
const keyboard2 = new KeyBoard("external");
const keyboards = [keyboard1, keyboard2];

const nitLap = new Laptop("x64", display, nic, hd, keyboards);

console.log(nitLap);
nitLap.switchOn();
console.log(nitLap);
