// Q1

let array = [4, 78, 8, 3, 6, 0, 12, 34]

const getMaxElement=(arr)=>{
    let maxElement = 0;
    
    for(let i= 0;i<arr.length;i++){
        if(arr[i] > maxElement){
          maxElement = arr[i];
            
        }
    }
    return maxElement ;
}
// console.log(getMaxElement(array)) // 78


// Q2

const calculateAverage=(arr)=>{
    let average = 0;
    for(let i=0;i<arr.length;i++){
        average += arr[i];
    }
    return average/arr.length;
}

// console.log(calculateAverage([1, 2, 3, 4, 5])) // 3

// Q3

let array2 = [
    {
       name: 'Jay',
       age: 60,
    },
    {
       name: 'Gloria',
       age: 36,
    },
    {
       name: 'Manny',
       age: 16,
    },
    {
       name: 'Joe',
       age: 9,
    },
    ];

    const sumOfAges=(arr)=>{
        let sum = 0;
        for(let i=0;i<arr.length;i++){
            sum += arr[i].age;
        }
        return sum
    }
    // console.log(sumOfAges(array2)) // 121