function YourFavMovie(){
    let movie = prompt("Введите ваш любимый фильм: ");
    while (true){
        let question = prompt('Какой ваш любимый фильм?');
        if (question == movie){
            alert('Ваш любимый фильм - ' + movie)
            break
        }
        else if (question == null){
            alert('Ждем вас снова!')
            break
        }
        else{
            alert("Попробуйте ещё раз")
        }
    }  
}