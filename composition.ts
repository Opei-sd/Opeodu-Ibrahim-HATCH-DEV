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
    keyBoard: KeyBoard[]
  ) {
    this.powerState = false; //The laptop is off
  }

  switchOn() {
    this.powerState = true; //The laptop is on
  }

  update(version: number) {}

  shutDown() {
    this.powerState = false;
  }
}

type OsKind = "Linux" | "Mac" | "Windows"
type BitKind = "x64" | "x32" | "x86";

class OperatingSystem{
  kind: OsKind
  version: number

}


class HardDisk {
  type: HardDiskType;
  size: number;

  set HardDiskSize(val: number){
    this.size = val;
  }
  setHardDiskType(type: HardDiskType){
    this.type = type;
  }
}
type HardDiskType = "ssd" | "hdd"

class Display{
  size: number
  type: DisplayType

  set displaySize(val: number) {
    this.size = val;
  }

  setDisplayType(type: DisplayType){
    this.type = type
  }
}

type DisplayType = "amoled" | "lcd" | "oled"

class NetworkInterfaceCard{
  constructor(public readonly name: string) {}
}

class KeyBoard{
  kind: KeyBoardKind
  layout: KeyBoardLayout

  setKeyboardKind(kind: KeyBoardKind){
    this.kind = kind
  }

  setKeyboardLayout(layout: KeyBoardLayout){
    this.layout = layout
  }
}

type KeyBoardKind = "in-built" | "external"
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty"
