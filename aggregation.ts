const display = new Display()

display.displaySize = 16
display.setDisplayType("amoled")

const nic = new NetworkInterfaceCard("nitlap")

const hd= new HardDisk()
hd.HardDiskSize = 256
hd.setHardDiskType("hdd")
const keyBoard= new KeyBoard()
keyBoard.setKeyboardKind("in-built")
keyBoard.setKeyboardLayout("Qwerty")

const nitlap = new Laptop("x64", display, NetworkInterfaceCard,hd,KeyBoard)