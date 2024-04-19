const chl= ["arsenal", "bayern", "real-madrid", "man-city"];
const disPeople: string[] = []


for(let i = 0; i < chl.length; i++){
  const club = chl[i]
  if (club == "arsenal" || club == "man-city") {
    disPeople.push(club)
  }
}

console.log(disPeople)