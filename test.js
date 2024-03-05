function reverse(str){
    let arr = [];
    let count = 0;
    str.trim().split(' ').forEach(elem => {
      if(count % 2 == 1){
        elem = elem.trim();
        arr.push(elem.split('').reverse().join(''));
      }else{
        arr.push(elem);
      }

      count++;
    });
    
    return arr.join(' ');
}

function wave(str){
    let ans = [];
    for(let i = 0; i < str.length; i++){
      if(str[i] === ' '){
        continue;
      }
      
      ans.push(str.slice(0, i) + str.slice(i, i + 1).toUpperCase() + str.slice(i + 1, str.length));
    }
    
    return ans;
}

function createPhoneNumber(numbers){
    let phoneNumber = '(';
    let i = 0;
    let count = 0;
    while(phoneNumber.length !== 14){
        phoneNumber += numbers[i];
        i = i + 1 === numbers.length ? 0 : i + 1;
        count++;
        if(count === 3 && !(phoneNumber.includes(')'))){
          count = 0;
          phoneNumber += ') ';
        }
      
        if(count === 3 && !(phoneNumber.includes('-'))){
          phoneNumber += '-'
        }
    }
    
    return phoneNumber;
}

function twoSum(numbers, target) {
    let map = {};
    for(let i = 0; i < numbers.length; i++){
        if(map[numbers[i]]){
            map[numbers[i]].push(i);
        }else{
            map[numbers[i]] = [i]; 
        }
    }

    console.log(map);

    for(let i = 0; i < numbers.length; i++){
        if(numbers.includes(target - numbers[i])){
            let arr = map[target - numbers[i]];
            for(let j = 0; j < arr.length; j++){
                if(i !== arr[j]){
                    return [i, arr[j]];
                }
            }
        }
    }
}