function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }


  function hydrate(string) {
    let count = 0
    let numbers = string.replace(/[^0-9]/g,'');
    console.log(numbers);
    for(let i = 0; i < numbers.length; i++){
     count += parseInt(numbers[i])
    }
    if(count > 1){
      return count + ' copos de água'
    } else {
      return count + ' copo de água'
    } 
  }

  console.log(hydrate('1 cachaça'));