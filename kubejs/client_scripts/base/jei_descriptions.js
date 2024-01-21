JEIEvents.information((event) => {
    const descriptions = [
        {
            items: ['farmersdelight:ham'],
            text: ['用刀击杀猪或疣猪兽获得。']
        },
        {
            items: ['buildinggadgets:construction_paste'],
            text: ['用镐破坏致密构建方块获得。']
        },
        {
            items: ['thermal:blizz_rod', 'thermal:blizz_spawn_egg'],
            text: ['暴雪人自然生成于寒冷的生物群系中。机械诅咒之土非常适合用于生成它们。']
        },
        {
            items: ['thermal:blitz_rod', 'thermal:blitz_spawn_egg'],
            text: ['狂风人自然生成于温暖、干燥的生物群系中。机械诅咒之土非常适合用于生成它们。']
        },
        {
            items: ['thermal:basalz_rod', 'thermal:basalz_spawn_egg'],
            text: [
                '岩石人自然生成于荒芜的生物群系中，如恶地。机械诅咒之土非常适合用于生成它们。'
            ]
        },
        {
            items: ['quark:bottled_cloud'],
            text: ['在Y值192至y196之间用玻璃瓶右击空气获得。']
        },
        {
            items: ['naturesaura:aura_bottle'],
            text: [
                '在合适的维度用瓶与塞右击空气获得。此举措会移除该区域的一定灵气。',
                ' ',
                `瓶装阳光：主世界、暮色森林`,
                `瓶装鬼魂：下界`,
                `瓶装黑暗：末地或蜜蜂领域`,
                ' ',
                `可以通过发射器实现自动化。`
            ]
        },
        {
            items: ['naturesaura:bottle_two_the_rebottling'],
            text: [
                '在合适的维度用其右击空气以获得不同种类的瓶装灵气。此举措会移除该区域的一定灵气。',
                ' ',
                `瓶装阳光：主世界、暮色森林`,
                `瓶装鬼魂：下界`,
                `瓶装黑暗：末地或蜜蜂领域`,
                ' ',
                `可以通过发射器实现自动化。`
            ]
        },
        {
            items: ['naturesaura:vacuum_bottle'],
            text: [
                '在缺乏灵气的区域用瓶与塞右击空气获得。',
                ' ',
                `可以通过发射器实现自动化。`
            ]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [`无序合成：一张纸和至少一份火药。`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [
                `添加更多的火药可以增加烟花火箭的飞行时间。`,
                `至多可以添加三份火药或七个烟火之星。`
            ]
        },
        {
            items: ['minecraft:firework_star'],
            text: [`无序合成：一份火药和至少一种染料。`]
        },
        {
            items: ['minecraft:firework_star'],
            text: [
                `至多可以添加八种染料。`,
                `可以添加头、金粒、羽毛或火焰弹以调整烟花的形状。`,
                `钻石或荧石可以与任何其他合成原料一起添加。`
            ]
        },
        {
            items: ['minecraft:dragon_egg'],
            text: [
                `更多龙蛋可以通过再次召唤末影龙获得。`,
                ` `,
                `要召唤末影龙，将末地水晶放置的末地传送门的四个基本方位上。`
            ]
        },
        {
            items: ['immersiveengineering:furnace_heater', 'mekanism:fuelwood_heater', 'mekanism:resistive_heater'],
            text: [`可以用于为气动工艺的机器提供热量。`]
        },
        {
            items: ['quark:dragon_scale'],
            text: [`只会从第一只击杀的末影龙身上掉落。`]
        },
        {
            items: ['quark:slime_in_a_bucket'],
            text: [`将一只小史莱姆舀进空桶里获得。`]
        },
        {
            items: ['naturesaura:gold_leaf'],
            text: [`破坏黄金树叶获得。`]
        },
        {
            items: ['naturesaura:golden_leaves'],
            text: [`对树叶使用闪耀纤维获得。使其传播以获得最好的效果。`]
        },
        {
            items: ['naturesaura:break_prevention'],
            text: [
                `在铁砧中将其与工具结合，工具会在低耐久时直接无法使用，而不会损坏。`
            ]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [`当装备在腰带栏位时，在空中按住潜行键以飘浮。`]
        },

        {
            items: ['naturesaura:birth_spirit'],
            text: [`通过在高灵气浓度的区域手动繁殖动物获得。`]
        },
        {
            items: [
                'quark:violet_corundum',
                'quark:indigo_corundum',
                'quark:blue_corundum',
                'quark:green_corundum',
                'quark:yellow_corundum',
                'quark:orange_corundum',
                'quark:red_corundum'
            ],
            text: [
                '如果在地底深处放置，它将会生长至四格方块高。生长时会发出粒子效果。',
                ' ',
                '还可以长出刚玉簇。'
            ]
        },
        {
            items: [
                'quark:violet_corundum_cluster',
                'quark:indigo_corundum_cluster',
                'quark:blue_corundum_cluster',
                'quark:green_corundum_cluster',
                'quark:yellow_corundum_cluster',
                'quark:orange_corundum_cluster',
                'quark:red_corundum_cluster'
            ],
            text: ['会偶尔生长自地下生长的刚玉方块上。']
        },
        {
            items: ['hexerei:animal_fat'],
            text: [`掉落自大多数的大型动物。`]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_producer',
                'enigmaticunity:bright_source_producer',
                'enigmaticunity:dim_source_producer'
            ],
            text: [
                `任何输入进该装置的FE都会被转换并送入附近的魔源罐中。`,
                ` `,
                `如果附近没有魔源罐，或魔源罐已完全装满，那么FE就会转换为灵气。`
            ]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_generator',
                'enigmaticunity:bright_source_generator',
                'enigmaticunity:dim_source_generator'
            ],
            text: [
                `附近魔源罐中的魔源会被提取至该装置并转换成FE。`,
                ` `,
                `如果该区域有足够的灵气，它还会消耗灵气，极大地增加产生FE的量。`
            ]
        },
        {
            items: ['starbunclemania:fluid_sourcelink'],
            text: [`可用的流体：药水、以太气体、液化魔源、生物柴油和污泥。`]
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
        },
        {
            items: ['ae2:name_press'],
            text: [
                `用于在压印器中自动重命名物品。`,
                ` `,
                `用石英切割刀右击空气，放入合适的锭并输入想要的名字以获取它。`
            ]
        },
        {
            items: [
                'immersiveengineering:alloy_smelter',
                'immersiveengineering:arc_furnace',
                'immersiveengineering:assembler',
                'immersiveengineering:auto_workbench',
                'immersiveengineering:blast_furnace',
                'immersiveengineering:bottling_machine',
                'immersiveengineering:coke_oven',
                'immersiveengineering:crusher',
                'immersiveengineering:diesel_generator',
                'immersiveengineering:excavator',
                'immersiveengineering:fermenter',
                'immersiveengineering:advanced_blast_furnace',
                'immersiveengineering:lightning_rod',
                'immersiveengineering:metal_press',
                'immersiveengineering:mixer',
                'immersiveengineering:refinery',
                'immersiveengineering:sawmill',
                'immersiveengineering:silo',
                'immersiveengineering:squeezer',
                'immersiveengineering:tank'
            ],
            text: [`这个是一个多方块结构。查阅《工程师手册》以获取建造它的指引。`]
        },
        {
            items: ['immersiveengineering:excavator'],
            text: [
                `从地下深处的矿脉中挖出材料。有关矿脉的完整列表以及如何定位矿脉，请查阅《工程师手册》。`
            ]
        },
        {
            items: ['immersiveengineering:diesel_generator'],
            text: [`通过燃烧流体燃料产生FE。和热力系列的压缩能源炉使用的燃料相同。`]
        },
        {
            items: ['immersiveengineering:lightning_rod'],
            text: [
                `在下雨或雷暴天气时随机产生FE。一道假的闪电会击中避雷针，表明FE已经产生了。在该底座上建造一个更大的避雷针可以增加产生FE的机会。`
            ]
        },
        {
            items: ['starbunclemania:source_fluid_bucket'],
            text: [`使用魔源凝聚器将魔源转换为液体形态。`]
        },
        {
            items: ['starbunclemania:source_condenser'],
            text: [`将附近魔源罐中的魔源转换为液态魔源，并放置在其下方的任何储罐中。`]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_1'],
            text: [`● 悬停模式（会丢失高度）`, `● 智能悬浮`, `● 最慢的等级`]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_2'],
            text: [`● 悬停模式（会丢失高度）`, `● 智能悬浮`, `● 比上一级更快`]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_3'],
            text: [
                `● 建筑模式（会丢失高度）`,
                `● 悬停模式（会丢失高度）`,
                `● 智能悬浮`,
                `● 比上一级更快`
            ]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_4'],
            text: [
                `● 建筑模式（会丢失高度）`,
                `● 悬停模式（会丢失高度）`,
                `● 智能悬浮`,
                `● 飞行稳定器`,
                `● 比上一级更快`
            ]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_5'],
            text: [
                `● 建筑模式（保持高度）`,
                `● 悬停模式（保持高度）`,
                `● 智能悬浮`,
                `● 飞行稳定器`,
                `● 最快的等级`
            ]
        },
        {
            items: ['supplementaries:antique_ink'],
            text: [
                `可以在瓮中获取，也可以从制图师处购买，或者通过钓鱼获得（非常稀有）。`,
                ` `,
                `试试装有垃圾打捞网的水产捕捞器，以获得更方便的供应！`
            ]
        },
        {
            items: [
                'hexerei:sage_seed',
                'immersiveengineering:seed',
                'occultism:datura_seeds',
                'sushigocrafting:cucumber_seeds',
                'sushigocrafting:soy_seeds',
                'sushigocrafting:wasabi_seeds',
                'sushigocrafting:sesame_seeds'
            ],
            text: ['从小市场中购买获得。']
        },
        {
            items: ['starbunclemania:fluid_jar'],
            text: [`存储在该罐中的流体药水会自动输入放置在其顶部的药水罐中。`]
        },
        {
            items: ['starbunclemania:fluid_jar'],
            text: [
                `这使得机械动力、热力系列、沉浸工程或魔法巫师的药水流体可以轻松转换以用于烧瓶或混合。`
            ]
        },
        {
            items: ['ars_nouveau:potion_jar'],
            text: [`存储在该罐下方的流体罐中的流体药水会自动被输入进该罐。`]
        },
        {
            items: ['ars_nouveau:potion_jar'],
            text: [
                `这使得机械动力、热力系列、沉浸工程或魔法巫师的药水流体可以轻松转换以用于烧瓶或混合。`
            ]
        },
        {
            items: ['twilightforest:borer_essence'],
            text: [`掉落自塔木蛀虫，破坏黑暗高塔中的虫蛀塔木可以找到它们。`]
        },
        {
            items: ['twilightforest:liveroot'],
            text: [`掉落自暮色森林树木底下的活根。`]
        },
        {
            items: [
                'starbunclemania:fluid_scroll_deny',
                'starbunclemania:fluid_scroll_allow',
                'ars_nouveau:deny_scroll',
                'ars_nouveau:allow_scroll'
            ],
            text: [
                `将卷轴放在主手，物品放在右手，然后右击以进行配置。潜行右击以移除配置。`,
                ` `,
                `也可以在抄写台进行配置。`
            ]
        },
        {
            items: ['mekanism:cardboard_box'],
            text: [
                `纸箱的功能被限制于搬运普通的箱子、桶、板条箱和其他不能被轻松搬运的容器。`
            ]
        },
        {
            items: ['twilightforest:red_thread'],
            text: [
                `这个长得像线的物品可以放置在方块的任意面上。手持时，它会发光并且你可以透过其他方块看见它。有助于标记或找到回家的路。`
            ]
        },
        {
            items: ['supplementaries:quiver'],
            text: [`在物品栏中拿起箭袋并右击箭来装入它们。`]
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            // console.log(`Descriptions: ${item}`);
            event.addItem(item, description.text);
        });
    });

    // generatableCobblestone.forEach((cobblestone) => {
    //     event.addItem(
    //         cobblestone,
    //         'Can be generated in a Vanilla Cobblestone Generator. The block below where the Cobblestone generates needs to be a Block of Iron.'
    //     );
    // });

    // generatableStone.forEach((stone) => {
    //     event.addItem(
    //         stone,
    //         'Can be generated in a Vanilla Stone Generator. The block below where the Stone generates needs to be a Block of Diamond.'
    //     );
    // });

    jei.base.items.disabled.forEach((item) => {
        if (item !== air) {
            // console.log(`Disabled: ${item}`);
            event.addItem(item, disabled_item_message);
        }
    });
});
