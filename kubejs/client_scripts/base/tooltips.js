ItemEvents.tooltip((event) => {
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
            items: ['kubejs:altered_recipe_indicator'],
            text: [Text.of('被Enigmatica 9：专家更改的配方。请查阅JEI。').gold()]
        },
        {
            items: ['kubejs:disabled_recipe_indicator', 'kubejs:disabled_structure_indicator'],
            text: [Text.of('被Enigmatica 9禁用的配方').gold()]
        },
        {
            items: [
                'create:stockpile_switch',
                'minecraft:comparator',
                'create:content_observer',
                'ars_nouveau:item_detector'
            ],
            text: [Text.of('红石装置：物品栏监视器').darkRed()]
        },
        {
            items: ['quark:ender_watcher'],
            text: [Text.of('红石装置：检测玩家是否看向它').darkRed()]
        },
        {
            items: ['quark:obsidian_pressure_plate'],
            text: [Text.of('红石装置：检测玩家').darkRed()]
        },
        {
            items: ['quark:obsidian_pressure_plate'],
            text: [Text.of('红石装置：输出一个可调节强度的红石信号').darkRed()]
        },
        {
            items: ['quark:abacus'],
            text: [Text.of('测量工具').gold()]
        },
        {
            items: ['quark:grate'],
            text: [Text.of('可使物品从中落下').gold()]
        },
        {
            items: ['quark:trowel'],
            text: [Text.of('建筑工具：随机方块放置').gold()] 
        },
        {
            items: ['quark:slime_in_a_bucket'],
            text: [Text.of('定位史莱姆区块').gold()]
        },
        {
            items: ['quark:iron_button'],
            text: [Text.of('红石装置：长脉冲').darkRed()]
        },
        {
            items: ['quark:gold_button'],
            text: [Text.of('红石装置：短脉冲').darkRed()]
        },
        {
            items: [/^.*:(?!gold|iron).*_button$/],
            text: [Text.of('红石装置：中等脉冲').darkRed()]
        },
        {
            items: [
                'naturesaura:animal_generator',
                'naturesaura:projectile_generator',
                'naturesaura:chorus_generator',
                'naturesaura:oak_generator',
                'naturesaura:slime_split_generator',
                'naturesaura:firework_generator',
                'naturesaura:moss_generator',
                'naturesaura:flower_generator',
                'naturesaura:potion_generator'
            ],
            text: [Text.of(`奥术装置：灵气产生器`).green()]
        },
        {
            items: ['naturesaura:snow_creator'],
            text: [Text.of(`奥术装置：冰雪制造器`).green()]
        },
        {
            items: ['naturesaura:light_staff', 'ars_nouveau:jar_of_light'],
            text: [Text.of(`奥术工具：制造光源`).gold()]
        },
        {
            items: ['naturesaura:cave_finder'],
            text: [Text.of(`奥术工具：高亮周围的黑暗区域`).gold()]
        },
        {
            items: ['naturesaura:loot_finder'],
            text: [Text.of(`奥术工具：高亮周围的容器`).gold()]
        },
        {
            items: ['naturesaura:netherite_finder'],
            text: [Text.of(`奥术工具：高亮周围的远古残骸`).gold()]
        },
        {
            items: ['naturesaura:death_ring'],
            text: [Text.of(`奥术工具：防止死亡`).gold()]
        },
        {
            items: ['naturesaura:shockwave_creator'],
            text: [Text.of(`奥术工具：击退敌人`).gold()]
        },
        {
            items: ['naturesaura:fortress_finder'],
            text: [Text.of(`定位下界要塞`).gold()]
        },
        {
            items: ['naturesaura:end_city_finder'],
            text: [Text.of(`定位末地城`).gold()]
        },
        {
            items: ['naturesaura:outpost_finder'],
            text: [Text.of(`定位掠夺者前哨站`).gold()]
        },
        {
            items: ['minecraft:ender_eye'],
            text: [Text.of(`定位要塞`).gold()]
        },
        {
            items: ['naturesaura:aura_timer'],
            text: [Text.of(`奥术装置：计时器`).green()]
        },
        {
            items: ['naturesaura:animal_container'],
            text: [Text.of(`奥术装置：隐形栅栏`).green()]
        },
        {
            items: ['naturesaura:field_creator'],
            text: [Text.of(`奥术装置：方块破坏器`).green()]
        },
        {
            items: ['naturesaura:placer'],
            text: [Text.of(`奥术装置：方块放置器`).green()]
        },
        {
            items: ['naturesaura:grated_chute'],
            text: [Text.of(`奥术装置：可过滤漏斗`).green()]
        },
        {
            items: [
                'ars_nouveau:glyph_pickup',
                'functionalstorage:collector_upgrade',
                'naturesaura:hopper_upgrade',
                'pneumaticcraft:magnet_upgrade',
                'sophisticatedbackpacks:advanced_magnet_upgrade',
                'sophisticatedbackpacks:advanced_pickup_upgrade',
                'sophisticatedbackpacks:magnet_upgrade',
                'sophisticatedbackpacks:pickup_upgrade',
                'sophisticatedstorage:advanced_magnet_upgrade',
                'sophisticatedstorage:advanced_pickup_upgrade',
                'sophisticatedstorage:magnet_upgrade',
                'sophisticatedstorage:pickup_upgrade',
                'thermal:device_collector'
            ],
            text: [Text.of(`物品收集器`).green()]
        },
        {
            items: [
                'hexerei:dried_sage_bundle',
                'hexerei:sage_burning_plate',
                'naturesaura:spawn_lamp',
                'immersiveengineering:electric_lantern',
                'ars_nouveau:ritual_sanctuary'
            ],
            text: [Text.of(`阻止怪物生成`).green()]
        },
        {
            items: ['naturesaura:rf_converter'],
            text: [Text.of(`奥术装置：用灵气产生FE`).red()]
        },
        {
            items: ['naturesaura:spring', 'ars_elemental:everfull_urn'],
            text: [Text.of(`奥术装置：无限水源`).green()]
        },
        {
            items: ['naturesaura:aura_detector'],
            text: [Text.of(`奥术装置：探测灵气等级`).green()]
        },
        {
            items: ['naturesaura:pickup_stopper'],
            text: [Text.of(`奥术装置：反向磁铁`).green()]
        },
        {
            items: ['naturesaura:weather_changer'],
            text: [Text.of(`奥术装置：操纵天气`).green()]
        },
        {
            items: ['naturesaura:time_changer'],
            text: [Text.of(`奥术装置：操纵时间`).green()]
        },
        {
            items: ['naturesaura:furnace_heater'],
            text: [Text.of(`奥术装置：灵气供能熔炉`).green()]
        },
        {
            items: ['naturesaura:blast_furnace_booster'],
            text: [Text.of(`奥术装置：矿石加工`).green()]
        },
        {
            items: ['naturesaura:range_visualizer'],
            text: [Text.of(`奥术工具：可视化装置效果范围`).green()]
        },
        {
            items: [
                'naturesaura:ender_crate',
                'naturesaura:ender_access',
                'minecraft:ender_chest',
                'functionalstorage:ender_drawer',
                'occultism:stable_wormhole',
                'occultism:storage_controller',
                'mekanism:qio_dashboard',
                'mekanism:qio_drive_array',
                'mekanism:portable_qio_dashboard',
                'occultism:storage_remote',
                'hexerei:ender_satchel'
            ],
            text: [Text.of(`跨维度存储`).darkPurple()]
        },
        {
            items: [
                'mekanism:quantum_entangloporter',
                'mekanism:qio_redstone_adapter',
                'mekanism:qio_exporter',
                'mekanism:qio_importer',
                'ae2:quantum_link',
                'ae2:quantum_ring'
            ],
            text: [Text.of(`跨维度物流`).darkPurple()]
        },
        {
            items: ['ars_nouveau:enchanters_mirror'],
            text: [Text.of(`奥术施法工具：自身`).gold()]
        },
        {
            items: ['ars_elemental:spell_horn'],
            text: [Text.of(`奥术施法工具：范围`).gold()]
        },
        {
            items: ['ars_nouveau:wand'],
            text: [Text.of(`奥术施法工具：弹射物`).gold()]
        },
        {
            items: ['ars_nouveau:enchanters_sword'],
            text: [Text.of(`奥术施法工具：触摸`).gold()]
        },
        {
            items: ['ars_nouveau:enchanters_shield'],
            text: [Text.of(`奥术工具：抵挡攻击后提升法术伤害和魔力再生`).lightPurple()]
        },
        {
            items: ['ars_nouveau:splash_flask_cannon'],
            text: [Text.of(`奥术工具：将药水转换为喷溅型药水`).lightPurple()]
        },
        {
            items: ['ars_nouveau:lingering_flask_cannon'],
            text: [Text.of(`奥术工具：将药水转换为滞留型药水`).lightPurple()]
        },
        {
            items: ['ars_nouveau:void_jar'],
            text: [Text.of(`奥术工具：将物品转换为魔源`).lightPurple()]
        },
        {
            items: ['ars_nouveau:potion_diffuser'],
            text: [Text.of(`奥术装置：在一定范围内施加药水效果`).lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [Text.of(`奥术工具：使穿戴者可以悬浮`).lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_unstable_gifts'],
            text: [Text.of(`奥术工具：获得随机的药水效果`).lightPurple()]
        },
        {
            items: ['ars_nouveau:ring_of_lesser_discount', 'ars_nouveau:ring_of_greater_discount'],
            text: [Text.of(`奥术工具：减少法术消耗`).lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_boost'],
            text: [Text.of(`奥术工具：增加个人魔力储量`).lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_regen'],
            text: [Text.of(`奥术工具：增加个人魔力再生速率`).lightPurple()]
        },
        {
            items: [
                'ae2:certus_quartz_wrench',
                'ae2:memory_card',
                'ae2:memory_card_black',
                'ae2:memory_card_blue',
                'ae2:memory_card_brown',
                'ae2:memory_card_cyan',
                'ae2:memory_card_gray',
                'ae2:memory_card_green',
                'ae2:memory_card_light_blue',
                'ae2:memory_card_light_gray',
                'ae2:memory_card_lime',
                'ae2:memory_card_magenta',
                'ae2:memory_card_orange',
                'ae2:memory_card_pink',
                'ae2:memory_card_purple',
                'ae2:memory_card_red',
                'ae2:memory_card_white',
                'ae2:memory_card_yellow',
                'ae2:nether_quartz_wrench',
                'ars_nouveau:dominion_wand',
                'create:wrench',
                'framedblocks:framed_wrench',
                'functionalstorage:configuration_tool',
                'functionalstorage:linking_tool',
                'littlelogistics:conductors_wrench',
                'mekanism:configuration_card',
                'mekanism:configurator',
                'pneumaticcraft:camo_applicator',
                'pneumaticcraft:logistics_configurator',
                'pneumaticcraft:pneumatic_wrench',
                'powah:wrench',
                'rftoolsbase:smartwrench',
                'rftoolsbase:smartwrench_select',
                'sophisticatedstorage:storage_tool',
                'supplementaries:wrench',
                'thermal:wrench'
            ],
            text: [Text.of(`配置工具`).gold()]
        },
        {
            items: ['kubejs:summon_death_tome'],
            text: [Text.of(`召唤一群死灵书。`).darkRed()]
        },
        {
            items: ['kubejs:spell_night_vision'],
            text: [Text.of(`获得夜视效果。`).darkRed()]
        },
        {
            items: ['kubejs:teleport_everdawn'],
            text: [Text.of(`传送至恒晓之地。`).darkRed()]
        },
        {
            items: ['kubejs:teleport_everbright'],
            text: [Text.of(`传送至永昼之地。`).darkRed()]
        },
        {
            items: [
                'ars_nouveau:wixie_cauldron',
                'ars_nouveau:wixie_charm',
                'mekanism:crafting_formula',
                'mekanism:formulaic_assemblicator',
                'create:mechanical_crafter',
                'naturesaura:auto_crafter',
                'thermal:machine_crafter',
                'immersiveengineering:assembler'
            ],
            text: [Text.of(`自动合成装置`).green()]
        },
        {
            items: ['functionalstorage:armory_cabinet'],
            text: [Text.of(`大容量不可堆叠存储`).green()]
        },
        {
            items: [
                'engineersdecor:rebar_concrete_tile_stairs',
                'engineersdecor:rebar_concrete_tile_slab',
                'engineersdecor:rebar_concrete_tile',
                'engineersdecor:rebar_concrete_wall',
                'engineersdecor:rebar_concrete_stairs',
                'engineersdecor:rebar_concrete_slab',
                'engineersdecor:rebar_concrete',
                'engineersdecor:panzerglass_block',
                'engineersdecor:panzerglass_slab',
                'thermal:lumium_glass',
                'thermal:signalum_glass',
                'thermal:obsidian_glass',
                'thermal:enderium_glass'
            ],
            text: [Text.of('免疫凋灵爆炸').color('#9a1be3')]
        },
        {
            items: ['industrialforegoing:mob_duplicator', 'spirit:soul_cage', 'pneumaticcraft:pressurized_spawner'],
            text: [Text.of('刷怪笼').green()]
        },
        {
            items: ['supplementaries:cog_block'],
            text: [Text.of('红石装置：传输红石信号').darkRed()]
        },
        {
            items: ['supplementaries:wind_vane'],
            text: [Text.of('红石装置：天气探测器').darkRed()]
        },
        {
            items: ['supplementaries:crystal_display'],
            text: [Text.of('红石装置：显示红石信号').darkRed()]
        },
        {
            items: ['supplementaries:relayer'],
            text: [Text.of('红石装置：无损传输红石信号').darkRed()]
        },
        {
            items: ['supplementaries:spring_launcher'],
            text: [Text.of('红石装置：实体发射器').darkRed()]
        },
        {
            items: ['supplementaries:speaker_block'],
            text: [Text.of('红石装置：向周围玩家发送消息').darkRed()]
        },
        {
            items: ['supplementaries:turn_table'],
            text: [Text.of('红石装置：旋转方块和实体').darkRed()]
        },
        {
            items: ['supplementaries:pulley_block'],
            text: [Text.of('红石装置：旋转时抬升或降下锁链和绳子').darkRed()]
        },
        {
            items: [
                'chimes:amethyst_chimes',
                'chimes:copper_chimes',
                'chimes:carved_bamboo_chimes',
                'chimes:iron_chimes',
                'chimes:bamboo_chimes'
            ],
            text: [Text.of('阻止幻翼靠近的轻柔铃声').aqua()]
        },
        {
            items: ['kubejs:aura_leaf'],
            text: [Text.of('在周围生成一些灵气').gold()]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_producer',
                'enigmaticunity:bright_source_producer',
                'enigmaticunity:dim_source_producer'
            ],
            text: [Text.of('奥术装置：将能量转换为魔源和灵气').green()]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_generator',
                'enigmaticunity:bright_source_generator',
                'enigmaticunity:dim_source_generator'
            ],
            text: [Text.of('奥术装置：将魔源和灵气转换为能量').green()]
        },
        {
            items: [
                'create:mechanical_pump',
                'industrialforegoing:water_condensator',
                'thermal:device_water_gen',
                'mekanism:electric_pump',
                'immersiveengineering:fluid_pump',
                'pneumaticcraft:gas_lift'
            ],
            text: [Text.of(`流体泵`).gold()]
        },
        {
            items: ['online_detector:online_detector', 'online_detector:advanced_online_detector'],
            text: [Text.of(`红石装置：检测玩家是否在线。`).darkRed()]
        },
        {
            items: ['immersiveengineering:logic_unit', 'redstonepen:control_box', 'pneumaticcraft:redstone_module'],
            text: [Text.of(`红石装置：可编程红石逻辑系统。`).darkRed()]
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
            text: [
                Text.of('这些种子不会从草中掉落！').green(),
                Text.of('它需要从小市场中购买。').green()
            ]
        },
        {
            items: [
                'ars_nouveau:red_sbed',
                'ars_nouveau:blue_sbed',
                'ars_nouveau:green_sbed',
                'ars_nouveau:yellow_sbed',
                'ars_nouveau:purple_sbed',
                'ars_nouveau:orange_sbed'
            ],
            text: [Text.of(`星宝石兽装备：红石控制`).green()]
        },
        {
            items: ['starbunclemania:wyrm_degree'],
            text: [Text.of(`星宝石兽装备：物品运输升级`).green()]
        },
        {
            items: ['starbunclemania:direction_scroll'],
            text: [Text.of(`星宝石兽装备：使其能够以特定方向交互`).green()]
        },
        {
            items: ['ars_nouveau:starbuncle_shades'],
            text: [Text.of(`星宝石兽装备：看起来很酷，并使其保持工作`).green()]
        },
        {
            items: ['ars_nouveau:wixie_hat'],
            text: [Text.of(`星宝石兽装备：药水运输`).green()]
        },
        {
            items: ['starbunclemania:star_battery'],
            text: [Text.of(`星宝石兽装备：能量运输`).green()]
        },
        {
            items: ['starbunclemania:star_bucket'],
            text: [Text.of(`星宝石兽装备：液体运输`).green()]
        },
        {
            items: ['starbunclemania:star_balloon'],
            text: [Text.of(`星宝石兽装备：气体运输`).green()]
        },
        {
            items: ['starbunclemania:star_bin'],
            text: [Text.of(`星宝石兽装备：销毁物品`).green()]
        },
        {
            items: ['superiorshields:flux_shield'],
            text: [Text.of(`可接受整合组件`).green()]
        },
        {
            items: ['mekanism:cardboard_box'],
            text: [Text.of(`用于移动容器`).green()]
        },

        {
            items: [
                'createaddition:electric_motor',
                'create:steam_engine',
                'create:windmill_bearing',
                'create:water_wheel',
                'create:large_water_wheel'
            ],
            text: [Text.of(`产生旋转力`).green()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });

    jei.base.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
