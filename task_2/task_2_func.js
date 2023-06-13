function SortArray(){
    let arr = [13, 4, 7, 23, 11, 2, 9, 3, 19, 15]
    for (let i = arr.length - 1; i > 0; i--){
        for (let j = 0; j < i; j++){
            if (arr[j] < arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    for (let i = 0; i < arr.length; i++){
        document.write(arr[i] + " ");
    }
}
