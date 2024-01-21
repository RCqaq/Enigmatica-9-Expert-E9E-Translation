ItemEvents.tooltip((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        {
            items: ['kubejs:energetic_transference_matrix'],
            text: [
                Text.of(
                    '通向异界的永恒之门，可以用魔源换取劳动力。'
                ).lightPurple()
            ]
        },
        {
            items: ['kubejs:dream_stone'],
            text: [Text.of('拿着的时候嗡嗡作响。').gold()]
        },
        {
            items: ['spirit:soul_cage'],
            text: [Text.of('消耗灵气来生成生物。').red()]
        },
        {
            items: ['immersiveengineering:windmill', 'immersiveengineering:watermill'],
            text: [Text.of('仅用于装饰用途。').green()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });

    jei.expert.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
