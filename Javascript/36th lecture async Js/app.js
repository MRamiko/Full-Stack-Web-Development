console.log ('Hello World!');


setTimeout(() => {
    console.log('I am inside setTimeout');
}, 2000);

console.log('I am after setTimeout');


function GetRecipe() {
    setTimeout(() => {
        const recipeId = [1, 2, 3, 4, 5];
        console.log(recipeId);


        SetTimeout((id) => {
            const recipe = { title: 'Pizza', publisher: 'John Doe' };
            console.log(`${id}: ${recipe.title}`);

            setTimeout((publisher) => {
                const recipe2 = { title: 'Pasta', publisher: 'Jane Doe' };
                console.log(`${publisher}: ${recipe2.title}`);
            }, 2000, recipeId[2]);
        
        }, 2000, recipeId[2]);
    }, 2000);
}


GetRecipe();