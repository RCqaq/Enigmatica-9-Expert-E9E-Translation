JEIEvents.information((event) => {
    const descriptions = [
        {
            items: ['starbunclemania:source_fluid'],
            text: [`使用魔源凝聚器将魔源转换为液体形态。`]
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            // console.log(`Descriptions: ${item}`);
            event.addFluid(item, description.text);
        });
    });
});
