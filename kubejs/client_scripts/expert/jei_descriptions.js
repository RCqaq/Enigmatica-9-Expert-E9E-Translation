JEIEvents.information((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const descriptions = [
        {
            items: ['naturesaura:projectile_generator'],
            text: [`可用的弹射物：`, ``, `● 末影珍珠`, `● 附魔之瓶`]
        },
        {
            items: ['ars_nouveau:novice_spell_book'],
            text: [
                `掉落自暮色森林的巫妖。做好准备吧，因为它们不会不战而降。`
            ]
        },
        {
            items: ['byg:subzero_crystal_shard'],
            text: [
                `掉落自暮色森林的冰雪女王。做好准备吧，因为她们不会不战而降。`
            ]
        },
        {
            items: ['kubejs:dream_stone'],
            text: [
                `一个强大的圣物，显然不属于发现它的地方。找到它的主人并归还它。`
            ]
        },
        {
            items: [/the_bumblezone:.*_bee_(helmet|chestplate|leggings|boots)/],
            text: [`身穿全套装备时获得鞘翅飞行能力。`]
        },
        {
            items: [/twilightforest:steeleaf_(helmet|chestplate|leggings|boots)/],
            text: [`身穿全套装备时获得幸运效果。`]
        },
        {
            items: [/naturesaura:depth_(helmet|chest|pants|shoes)/],
            text: [`身穿全套装备时获得护盾效果。 `]
        },
        {
            items: [/naturesaura:sky_(helmet|chest|pants|shoes)/],
            text: [`身穿全套装备时获得鞘翅飞行能力。`]
        },
        {
            items: [/naturesaura:infused_iron_(helmet|chest|pants|shoes)/],
            text: [`身穿全套装备时获得康复效果。`]
        },
        {
            items: [/thermal:beekeeper_(helmet|chestplate|leggings|boots)/],
            text: [`身穿全套装备时获得对蜜蜂的额外保护。`]
        },
        {
            items: [/pneumaticcraft:pneumatic_(helmet|chestplate|leggings|boots)/],
            text: [`身穿全套装备时获得魔力再生效果。`]
        },
        {
            items: [/mekanism:mekasuit_(helmet|bodyarmor|pants|boots)/],
            text: [
                `一套强大的盔甲，会在穿戴者周围创建一圈反魔法力场。`,
                ` `,
                `穿戴它后你会发现施法变得非常困难，但只要正确地维护它，该盔甲就会抵消所有受到的伤害，无论是魔法还是其他种类的伤害。`
            ]
        },
        {
            items: [
                /ars_elemental:aqua_(hat|robes|leggings|boots)/,
                /ars_elemental:earth_(hat|robes|leggings|boots)/,
                /ars_elemental:air_(hat|robes|leggings|boots)/,
                /ars_elemental:fire_(hat|robes|leggings|boots)/
            ],
            text: [`身穿全套装备时获得法术伤害提升效果。`]
        },
        {
            items: ['ars_nouveau:mendosteen_pod'],
            text: [
                `只能在自然生长的繁茂至高木上找到。`,
                ` `,
                `可以像可可豆一样生长在繁茂至高木原木上。`
            ]
        },
        {
            items: ['ars_nouveau:frostaya_pod'],
            text: [
                `只能在自然生长的奔流至高木上找到。`,
                ` `,
                `可以像可可豆一样生长在奔流至高木原木上。`
            ]
        },
        {
            items: ['ars_nouveau:bombegranate_pod'],
            text: [
                `只能在自然生长的烈焰至高木上找到。`,
                ` `,
                `可以像可可豆一样生长在烈焰至高木原木上。`
            ]
        },
        {
            items: ['ars_nouveau:bastion_pod'],
            text: [
                `只能在自然生长的恼人至高木上找到。`,
                ` `,
                `可以像可可豆一样生长在恼人至高木原木上。`
            ]
        },
        {
            items: ['ars_elemental:flashpine_pod'],
            text: [
                `只能在自然生长的闪耀至高木上找到。`,
                ` `,
                `可以像可可豆一样生长在闪耀至高木原木上。`
            ]
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            event.addItem(item, description.text);
        });
    });

    jei.expert.items.disabled.forEach((item) => {
        if (item !== air) {
            // console.log(`Adding description for ${item}`);
            event.addItem(item, disabled_item_message);
        }
    });
});
