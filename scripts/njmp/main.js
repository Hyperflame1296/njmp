import * as s from "@minecraft/server";
import * as ui from "@minecraft/server-ui";
import * as gt from "@minecraft/server-gametest";
import * as cmn from '@minecraft/common';
import * as dbg from '@minecraft/debug-utilities';

let njmp = {
    ver: 'v0.2.1-ncbrefactor',
    reach: 3.4,
    item_stats: {
        default: {
            speed: 4,
            damage: 1.0
        },

        // swords
        wooden_sword: {
            speed: 1.6,
            damage: 4.0
        },
        stone_sword: {
            speed: 1.6,
            damage: 5.0
        },
        copper_sword: {
            speed: 1.6,
            damage: 5.0
        },
        iron_sword: {
            speed: 1.6,
            damage: 6.0
        },
        golden_sword: {
            speed: 1.6,
            damage: 4.0
        },
        diamond_sword: {
            speed: 1.6,
            damage: 7.0
        },
        netherite_sword: {
            speed: 1.6,
            damage: 8.0
        },

        // axes
        wooden_axe: {
            speed: 0.8,
            damage: 7.0
        },
        stone_axe: {
            speed: 0.8,
            damage: 9.0
        },
        copper_axe: {
            speed: 0.8,
            damage: 9.0
        },
        iron_axe: {
            speed: 0.9,
            damage: 9.0
        },
        golden_axe: {
            speed: 1.0,
            damage: 7.0
        },
        diamond_axe: {
            speed: 1.0,
            damage: 9.0
        },
        netherite_axe: {
            speed: 1.0,
            damage: 10.0
        },

        // pickaxes
        wooden_pickaxe: {
            speed: 1.2,
            damage: 2.0
        },
        stone_pickaxe: {
            speed: 1.2,
            damage: 3.0
        },
        copper_pickaxe: {
            speed: 1.2,
            damage: 3.0
        },
        iron_pickaxe: {
            speed: 1.2,
            damage: 4.0
        },
        golden_pickaxe: {
            speed: 1.2,
            damage: 2.0
        },
        diamond_pickaxe: {
            speed: 1.2,
            damage: 5.0
        },
        netherite_pickaxe: {
            speed: 1.2,
            damage: 6.0
        },

        // shovels
        wooden_shovel: {
            speed: 1.0,
            damage: 2.5
        },
        stone_shovel: {
            speed: 1.0,
            damage: 3.5
        },
        copper_shovel: {
            speed: 1.0,
            damage: 3.5
        },
        iron_shovel: {
            speed: 1.0,
            damage: 4.5
        },
        golden_shovel: {
            speed: 1.0,
            damage: 2.5
        },
        diamond_shovel: {
            speed: 1.0,
            damage: 5.5
        },
        netherite_shovel: {
            speed: 1.0,
            damage: 6.5
        },

        // hoes
        wooden_hoe: {
            speed: 1.0,
            damage: 1.0
        },
        stone_hoe: {
            speed: 2.0,
            damage: 1.0
        },
        copper_hoe: {
            speed: 1.0,
            damage: 3.5
        },
        iron_hoe: {
            speed: 3.0,
            damage: 1.0
        },
        golden_hoe: {
            speed: 1.0,
            damage: 1.0
        },
        diamond_hoe: {
            speed: 4.0,
            damage: 1.0
        },
        netherite_hoe: {
            speed: 4.0,
            damage: 1.0
        },

        // miscellaneous
        trident: {
            speed: 1.1,
            damage: 9.0
        },
        mace: {
            speed: 0.6,
            damage: 6.0
        }
    },
    armor_stats: {
        default: {
            armor: 0,
            tough: 0,
            kbr: 0
        },

        // leather armor
        leather_helmet: {
            armor: 1,
            tough: 0,
            kbr: 0
        },
        leather_chestplate: {
            armor: 3,
            tough: 0,
            kbr: 0
        },
        leather_leggings: {
            armor: 2,
            tough: 0,
            kbr: 0
        },
        leather_boots: {
            armor: 1,
            tough: 0,
            kbr: 0
        },
        leather_horse_armor: {
            armor: 3,
            tough: 0,
            kbr: 0
        },

        // chainmail armor
        chainmail_helmet: {
            armor: 2,
            tough: 0,
            kbr: 0
        },
        chainmail_chestplate: {
            armor: 5,
            tough: 0,
            kbr: 0
        },
        chainmail_leggings: {
            armor: 4,
            tough: 0,
            kbr: 0
        },
        chainmail_boots: {
            armor: 1,
            tough: 0,
            kbr: 0
        },

        // iron armor
        iron_helmet: {
            armor: 2,
            tough: 0,
            kbr: 0
        },
        iron_chestplate: {
            armor: 6,
            tough: 0,
            kbr: 0
        },
        iron_leggings: {
            armor: 5,
            tough: 0,
            kbr: 0
        },
        iron_boots: {
            armor: 2,
            tough: 0,
            kbr: 0
        },
        iron_horse_armor: {
            armor: 5,
            tough: 0,
            kbr: 0
        },

        // golden armor
        golden_helmet: {
            armor: 2,
            tough: 0,
            kbr: 0
        },
        golden_chestplate: {
            armor: 5,
            tough: 0,
            kbr: 0
        },
        golden_leggings: {
            armor: 3,
            tough: 0,
            kbr: 0
        },
        golden_boots: {
            armor: 1,
            tough: 0,
            kbr: 0
        },
        golden_horse_armor: {
            armor: 7,
            tough: 0,
            kbr: 0
        },

        // diamond Armor 				 
        diamond_helmet: {
            armor: 3,
            tough: 2,
            kbr: 0
        },
        diamond_chestplate: {
            armor: 8,
            tough: 2,
            kbr: 0
        },
        diamond_leggings: {
            armor: 6,
            tough: 2,
            kbr: 0
        },
        diamond_boots: {
            armor: 3,
            tough: 2,
            kbr: 0
        },
        diamond_horse_armor: {
            armor: 11,
            tough: 2,
            kbr: 0
        },

        // netherite Armor 
        netherite_helmet: {
            armor: 3,
            tough: 3,
            kbr: 1
        },
        netherite_chestplate: {
            armor: 8,
            tough: 3,
            kbr: 1
        },
        netherite_leggings: {
            armor: 6,
            tough: 3,
            kbr: 1
        },
        netherite_boots: {
            armor: 3,
            tough: 3,
            kbr: 1
        },

        // miscellaneous

        turtle_helmet: {
            armor: 2,
            tough: 0,
            kbr: 0
        },
        wolf_armor: {
            armor: 11,
            tough: 0,
            kbr: 0
        }
    },
    no_knockback: [
        'minecraft:item',
        'minecraft:tnt',
        'minecraft:falling_block',
        'minecraft:eye_of_ender_signal',
        'minecraft:snowball',
        'minecraft:egg',
        'minecraft:ender_pearl',
        'minecraft:arrow',
        'minecraft:xp_orb',
        'minecraft:xp_bottle',
        'minecraft:npc',
        'minecraft:boat',
        'minecraft:wind_charge_projectile'
    ],
    no_hit: [
        'minecraft:item',
        'minecraft:tnt',
        'minecraft:falling_block',
        'minecraft:splash_potion',
        'minecraft:lingering_potion',
        'minecraft:eye_of_ender_signal',
        'minecraft:xp_orb',
        'minecraft:xp_bottle',
        'minecraft:snowball',
        'minecraft:egg',
        'minecraft:ender_pearl',
        'minecraft:arrow',
        'minecraft:xp_orb',
        'minecraft:xp_bottle',
        'minecraft:splash_potion',
        'minecraft:lingering_potion',
    ],
    ambience: {
        loop: [
            {
                id: 'underwater',
                sample_rate: 48000,
                sample_count: 1_208_474,
                sound_id: 'ambient.underwater.loop',
                condition: function(player) {
                    let headLoc = {
                        x: player.getHeadLocation().x,
                        y: njmp.methods.clamp(player.getHeadLocation().y, -64, 320),
                        z: player.getHeadLocation().z
                    }
                    let in_water = njmp.dimensions.overworld.getBlock(headLoc)?.type.id === 'minecraft:water' || njmp.dimensions.overworld.getBlock(headLoc)?.type.id === 'minecraft:flowing_water' || njmp.dimensions.overworld.getBlock(headLoc)?.isWaterlogged
                    return in_water && player.isInWater && player.getGameMode() !== 'Spectator'
                }
            }
        ],
        additions: [
            {
                id: 'underwater.additions',
                interval: [60, 120],
                sound_id: 'ambient.underwater.loop.additions',
                condition: function(player) {
                    let headLoc = {
                        x: player.getHeadLocation().x,
                        y: njmp.methods.clamp(player.getHeadLocation().y, -64, 320),
                        z: player.getHeadLocation().z
                    }
                    let in_water = njmp.dimensions.overworld.getBlock(headLoc)?.type.id === 'minecraft:water' || njmp.dimensions.overworld.getBlock(headLoc)?.type.id === 'minecraft:flowing_water' || njmp.dimensions.overworld.getBlock(headLoc)?.isWaterlogged
                    return in_water && player.isInWater
                }
            },
            {
                id: 'underwater.additions.rare',
                interval: [1000, 1500],
                sound_id: 'ambient.underwater.loop.additions.rare',
                condition: function(player) {
                    let r = Math.random()
                    let headLoc = {
                        x: player.getHeadLocation().x,
                        y: njmp.methods.clamp(player.getHeadLocation().y, -64, 320),
                        z: player.getHeadLocation().z
                    }
                    let in_water = njmp.dimensions.overworld.getBlock(headLoc)?.type.id === 'minecraft:water' || njmp.dimensions.overworld.getBlock(headLoc)?.type.id === 'minecraft:flowing_water' || njmp.dimensions.overworld.getBlock(headLoc)?.isWaterlogged
                    return in_water && player.isInWater
                }
            },
            {
                id: 'underwater.additions.ultra_rare',
                interval: [2000, 3000],
                sound_id: 'ambient.underwater.loop.additions.ultra_rare',
                condition: function(player) {
                    let r = Math.random()
                    let headLoc = {
                        x: player.getHeadLocation().x,
                        y: njmp.methods.clamp(player.getHeadLocation().y, -64, 320),
                        z: player.getHeadLocation().z
                    }
                    let in_water = njmp.dimensions.overworld.getBlock(headLoc)?.type.id === 'minecraft:water' || njmp.dimensions.overworld.getBlock(headLoc)?.type.id === 'minecraft:flowing_water' || njmp.dimensions.overworld.getBlock(headLoc)?.isWaterlogged
                    return in_water && player.isInWater
                }
            }
        ],
    },
    methods: {
        check_op: function(player) { // wrap the operator check, to make things easier
            if (player.commandPermissionLevel >= 2) return true;
            return false
        },
        // njmp methods
        get_item_info: function (item) {
            if (item?.typeId.replace('minecraft:', '') && typeof njmp.item_stats[item?.typeId.replace('minecraft:', '')] !== 'undefined') {
                return njmp.item_stats[item?.typeId.replace('minecraft:', '') ?? 'default']
            } else return njmp.item_stats.default
        },
        get_armor_info: function (item) {
            if (item?.typeId.replace('minecraft:', '') && typeof njmp.armor_stats[item?.typeId.replace('minecraft:', '')] !== 'undefined') {
                return njmp.armor_stats[item?.typeId.replace('minecraft:', '') ?? 'default']
            } else return njmp.armor_stats.default
        },
        has_item_info: item => njmp.item_stats[item?.typeId.replace('minecraft:', '')],
        has_armor_info: item => njmp.armor_stats[item?.typeId.replace('minecraft:', '')],
        // math
        dist   : (a, b) => Math.sqrt(((b.x - a.x) ** 2) + ((b.y - a.y) ** 2) + ((b.z - a.z) ** 2)),
        clamp  : (v, a, b) => Math.min(Math.max(v, a), b),
        random2: (a, b) => (Math.random() * (b - a)) + a,
        get_knockback_direction: (a, b) => Math.atan2(b.z - a.z, b.x - a.x),
    },
    debug: {
        run_thru: function(v) {
            return eval(v);
        }
    },
    listeners: {
        before_events: {

        },
        after_events: {
            itemStartUse: function(e) {
                e.source && e.source.isValid ? e.source.setDynamicProperty('njmp:is_using_item', true) : void 0;
            },
            itemStopUse: function(e) {
                e.source && e.source.isValid ? e.source.setDynamicProperty('njmp:is_using_item', false) : void 0;
            },
            projectileHitEntity: function(e) {
                try {
                    if (!e.source || !e.source.isValid)
                        return;

                    if (!e.getEntityHit()?.entity || !e.getEntityHit()?.entity.isValid)
                        return;

                    if (e.source.typeId === 'minecraft:player')
                        return;

                    if (e.getEntityHit()?.entity.id !== e.source.id)
                        return;

                    if (e.projectile.typeId !== 'minecraft:arrow')
                        return;

                    e.source.playSound('entity.arrow.hit_player', {
                        pitch: 0.5,
                        location: e.source.location,
                        volume: 1.0
                    })
                    e.projectile?.isValid ? e.projectile?.remove() : void 0;
                } catch (err) {
                    njmp.send_error(err)
                }
            },
            entityHitBlock: function(e) {
                if (!e.damagingEntity || !e.damagingEntity.isValid)
                    return;

                if (!e.hitBlock || !e.hitBlock.isValid)
                    return;

                if (typeof e.damagingEntity !== 'undefined') {
                    let attacker = e.damagingEntity
                    let target = e.hitBlock;

                    if (!attacker.hasTag('njmp:player.enable_1.9_pvp'))
                        return;

                    if (typeof attacker !== 'undefined' && typeof target !== 'undefined' && attacker.isValid && target.isValid) {
                        if (attacker.typeId === 'minecraft:player') {
                            let attacker_equippable = attacker.getComponent('minecraft:equippable')

                            let attacker_equipment = typeof attacker_equippable !== 'undefined' ? {
                                head: attacker_equippable.getEquipment('Head'),
                                chest: attacker_equippable.getEquipment('Chest'),
                                legs: attacker_equippable.getEquipment('Legs'),
                                feet: attacker_equippable.getEquipment('Feet'),
                                mainhand: attacker_equippable.getEquipment('Mainhand'),
                                offhand: attacker_equippable.getEquipment('Offhand'),
                            } : void 0;
                            let attacker_haste = (attacker.getEffect('haste') ?? {
                                amplifier: -1
                            }).amplifier + 1
                            let attacker_mining_fatigue = (attacker.getEffect('mining_fatigue') ?? {
                                amplifier: -1
                            }).amplifier + 1
                            let attack_speed = njmp.methods.clamp((njmp.methods.get_item_info(attacker_equipment.mainhand).speed * (1 + attacker_haste)) * (1 - attacker_mining_fatigue), 0, 20)
                            attacker.setDynamicProperty('njmp:timer.player.hit', 10);
                            attacker.setDynamicProperty('njmp:timer.player.block', 5);
                            s.world.getDynamicProperty('njmp:gamerule.enable_attack_cooldown') ?? true ? attacker.setDynamicProperty('njmp:timer.player.attack', s.TicksPerSecond / attack_speed) : void 0;;
                            attacker.setDynamicProperty('njmp:player.ticks_since_last_hit', 0);
                        }
                    }
                }
            },
            entityHitEntity: function(e) {
                if (!e.damagingEntity || !e.damagingEntity.isValid)
                    return;

                if (!e.hitEntity || !e.hitEntity.isValid)
                    return;

                if (e.damagingEntity.typeId !== 'minecraft:player')
                    return;
                if (!e.damagingEntity.hasTag('njmp:player.enable_1.9_pvp'))
                    return;

                if (e.damagingEntity.hasTag('njmp:player.cannot_attack_entities') && e.hitEntity.typeId !== 'minecraft:player') {
                    if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) e.hitEntity.dimension.playSound('entity.player.attack.nodamage', e.hitEntity.location)
                    return;
                }
                if (e.damagingEntity.hasTag('njmp:player.cannot_attack_players') && e.hitEntity.typeId === 'minecraft:player') {
                    if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) e.hitEntity.dimension.playSound('entity.player.attack.nodamage', e.hitEntity.location)
                    return;
                }
                if (e.hitEntity.getGameMode?.() === 'Creative') {
                    if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) e.hitEntity.dimension.playSound('entity.player.attack.nodamage', e.hitEntity.location)
                    return;
                }

                let attacker = e.damagingEntity
                let target = e.hitEntity;
                if (njmp.methods.dist(attacker.location, target.location) <= njmp.reach) {
                    let r = Math.random();
                    // Get player info
                    let attacker_equippable = attacker.getComponent('minecraft:equippable')
                    let target_equippable = target.getComponent('minecraft:equippable')
                    let attacker_equipment = attacker_equippable ? {
                        head: attacker_equippable.getEquipment('Head'),
                        chest: attacker_equippable.getEquipment('Chest'),
                        legs: attacker_equippable.getEquipment('Legs'),
                        feet: attacker_equippable.getEquipment('Feet'),
                        mainhand: attacker_equippable.getEquipment('Mainhand'),
                        offhand: attacker_equippable.getEquipment('Offhand'),
                    } : void 0;
                    let target_equipment = target_equippable ? {
                        head: target_equippable.getEquipment('Head'),
                        chest: target_equippable.getEquipment('Chest'),
                        legs: target_equippable.getEquipment('Legs'),
                        feet: target_equippable.getEquipment('Feet'),
                        mainhand: target_equippable.getEquipment('Mainhand'),
                        offhand: target_equippable.getEquipment('Offhand'),
                    } : void 0;
                    let attacker_enchantable = attacker_equipment ? {
                        head: attacker_equipment.head ? attacker_equipment.head.getComponent('minecraft:enchantable') : void 0,
                        chest: attacker_equipment.chest ? attacker_equipment.chest.getComponent('minecraft:enchantable') : void 0,
                        legs: attacker_equipment.legs ? attacker_equipment.legs.getComponent('minecraft:enchantable') : void 0,
                        feet: attacker_equipment.feet ? attacker_equipment.feet.getComponent('minecraft:enchantable') : void 0,
                        mainhand: attacker_equipment.mainhand ? attacker_equipment.mainhand.getComponent('minecraft:enchantable') : void 0,
                        offhand: attacker_equipment.offhand ? attacker_equipment.offhand.getComponent('minecraft:enchantable') : void 0,
                    } : void 0;
                    let target_enchantable = target_equipment ? {
                        head: target_equipment.head ? target_equipment.head.getComponent('minecraft:enchantable') : void 0,
                        chest: target_equipment.chest ? target_equipment.chest.getComponent('minecraft:enchantable') : void 0,
                        legs: target_equipment.legs ? target_equipment.legs.getComponent('minecraft:enchantable') : void 0,
                        feet: target_equipment.feet ? target_equipment.feet.getComponent('minecraft:enchantable') : void 0,
                        mainhand: target_equipment.mainhand ? target_equipment.mainhand.getComponent('minecraft:enchantable') : void 0,
                        offhand: target_equipment.offhand ? target_equipment.offhand.getComponent('minecraft:enchantable') : void 0,
                    } : void 0;
                    // Register hit
                    let attacker_haste = (attacker.getEffect('haste') ?? {
                        amplifier: -1
                    }).amplifier + 1
                    let attacker_mining_fatigue = (attacker.getEffect('mining_fatigue') ?? {
                        amplifier: -1
                    }).amplifier + 1
                    let attacker_strength = (attacker.getEffect('strength') ?? {
                        amplifier: -1
                    }).amplifier + 1
                    let attacker_weakness = (attacker.getEffect('weakness') ?? {
                        amplifier: -1
                    }).amplifier + 1
                    let target_resistance = (target.getEffect('resistance') ?? {
                        amplifier: -1
                    }).amplifier + 1
                    let attack_speed = njmp.methods.clamp((njmp.methods.get_item_info(attacker_equipment.mainhand).speed * (1 + attacker_haste)) * (1 - attacker_mining_fatigue), 0, 20)
                    let attack_damage = njmp.methods.get_item_info(attacker_equipment.mainhand).damage;
                    let attack_meter = njmp.methods.clamp((1 - ((s.TicksPerSecond / attack_speed) - (attacker.getDynamicProperty('njmp:timer.player.attack') ?? -1))) / -(s.TicksPerSecond / attack_speed), 0, 1)
                    if (!njmp.no_hit.includes(target.typeId)) {
                        let attacker_sharpness = attacker_equipment && attacker_equipment.mainhand && attacker_enchantable.mainhand ? (attacker_enchantable.mainhand.getEnchantment('minecraft:sharpness') ?? {
                            level: 0
                        }).level : 0
                        let attacker_efficiency = attacker_equipment && attacker_equipment.mainhand && attacker_enchantable.mainhand ? (attacker_enchantable.mainhand.getEnchantment('minecraft:efficiency') ?? {
                            level: 0
                        }).level : 0
                        let attacker_unbreaking = attacker_equipment && attacker_equipment.mainhand && attacker_enchantable.mainhand ? (attacker_enchantable.mainhand.getEnchantment('minecraft:unbreaking') ?? {
                            level: 0
                        }).level : 0
                        let attacker_fire_aspect = attacker_equipment && attacker_equipment.mainhand && attacker_enchantable.mainhand ? (attacker_enchantable.mainhand.getEnchantment('minecraft:fire_aspect') ?? {
                            level: 0
                        }).level : 0
                        let target_protection_head = target_equipment && target_equipment.head && target_enchantable.head ? (target_enchantable.head.getEnchantment('minecraft:protection') ?? {
                            level: 0
                        }).level : 0
                        let target_protection_chest = target_equipment && target_equipment.chest && target_enchantable.chest ? (target_enchantable.chest.getEnchantment('minecraft:protection') ?? {
                            level: 0
                        }).level : 0
                        let target_protection_legs = target_equipment && target_equipment.legs && target_enchantable.legs ? (target_enchantable.legs.getEnchantment('minecraft:protection') ?? {
                            level: 0
                        }).level : 0
                        let target_protection_feet = target_equipment && target_equipment.feet && target_enchantable.feet ? (target_enchantable.feet.getEnchantment('minecraft:protection') ?? {
                            level: 0
                        }).level : 0
                        let attacker_protection_head = attacker_equipment && attacker_equipment.head && attacker_enchantable.head ? (attacker_enchantable.head.getEnchantment('minecraft:protection') ?? {
                            level: 0
                        }).level : 0
                        let attacker_protection_chest = attacker_equipment && attacker_equipment.chest && attacker_enchantable.chest ? (attacker_enchantable.chest.getEnchantment('minecraft:protection') ?? {
                            level: 0
                        }).level : 0
                        let attacker_protection_legs = attacker_equipment && attacker_equipment.legs && attacker_enchantable.legs ? (attacker_enchantable.legs.getEnchantment('minecraft:protection') ?? {
                            level: 0
                        }).level : 0
                        let attacker_protection_feet = attacker_equipment && attacker_equipment.feet && attacker_enchantable.feet ? (attacker_enchantable.feet.getEnchantment('minecraft:protection') ?? {
                            level: 0
                        }).level : 0
                        let target_unbreaking_head = target_equipment && target_equipment.head && target_enchantable.head ? (target_enchantable.head.getEnchantment('minecraft:unbreaking') ?? {
                            level: 0
                        }).level : 0
                        let target_unbreaking_chest = target_equipment && target_equipment.chest && target_enchantable.chest ? (target_enchantable.chest.getEnchantment('minecraft:unbreaking') ?? {
                            level: 0
                        }).level : 0
                        let target_unbreaking_legs = target_equipment && target_equipment.legs && target_enchantable.legs ? (target_enchantable.legs.getEnchantment('minecraft:unbreaking') ?? {
                            level: 0
                        }).level : 0
                        let target_unbreaking_feet = target_equipment && target_equipment.feet && target_enchantable.feet ? (target_enchantable.feet.getEnchantment('minecraft:unbreaking') ?? {
                            level: 0
                        }).level : 0
                        let target_thorns_head = target_equipment && target_equipment.head && target_enchantable.head ? (target_enchantable.head.getEnchantment('minecraft:thorns') ?? {
                            level: 0
                        }).level : 0
                        let target_thorns_chest = target_equipment && target_equipment.chest && target_enchantable.chest ? (target_enchantable.chest.getEnchantment('minecraft:thorns') ?? {
                            level: 0
                        }).level : 0
                        let target_thorns_legs = target_equipment && target_equipment.legs && target_enchantable.legs ? (target_enchantable.legs.getEnchantment('minecraft:thorns') ?? {
                            level: 0
                        }).level : 0
                        let target_thorns_feet = target_equipment && target_equipment.feet && target_enchantable.feet ? (target_enchantable.feet.getEnchantment('minecraft:thorns') ?? {
                            level: 0
                        }).level : 0
                        let holding_dmg_item = attacker_equipment.mainhand && attacker_equipment && (attacker_equipment.mainhand.hasTag('minecraft:is_sword') || attacker_equipment.mainhand.hasTag('minecraft:is_axe') || attacker_equipment.mainhand.hasTag('minecraft:is_pickaxe') || attacker_equipment.mainhand.hasTag('minecraft:is_shovel') || attacker_equipment.mainhand.hasTag('minecraft:is_hoe') || attacker_equipment.mainhand.typeId === 'minecraft:trident' || attacker_equipment.mainhand.typeId === 'minecraft:mace')
                        let tool_damage_chance = attacker_unbreaking !== 0 ? 1 / (attacker_unbreaking + 1) : 1;
                        let thorns_chance = {
                            head: target_thorns_head * 0.15,
                            chest: target_thorns_chest * 0.15,
                            legs: target_thorns_legs * 0.15,
                            feet: target_thorns_feet * 0.15
                        }
                        let armor_damage_chance = {
                            head: attacker_unbreaking !== 0 ? 0.6 + (0.4 / (target_unbreaking_head + 1)) : 1,
                            chest: attacker_unbreaking !== 0 ? 0.6 + (0.4 / (target_unbreaking_chest + 1)) : 1,
                            legs: attacker_unbreaking !== 0 ? 0.6 + (0.4 / (target_unbreaking_legs + 1)) : 1,
                            feet: attacker_unbreaking !== 0 ? 0.6 + (0.4 / (target_unbreaking_feet + 1)) : 1
                        }
                        let armor_points = target_equipment ? (njmp.methods.get_armor_info(target_equipment.head ?? new s.ItemStack('minecraft:stone', 1)).armor) + (njmp.methods.get_armor_info(target_equipment.chest ?? new s.ItemStack('minecraft:stone', 1)).armor) + (njmp.methods.get_armor_info(target_equipment.legs ?? new s.ItemStack('minecraft:stone', 1)).armor) + (njmp.methods.get_armor_info(target_equipment.feet ?? new s.ItemStack('minecraft:stone', 1)).armor) : 0;
                        let attacker_armor_points = attacker_equipment ? (njmp.methods.get_armor_info(attacker_equipment.head ?? new s.ItemStack('minecraft:stone', 1)).armor) + (njmp.methods.get_armor_info(attacker_equipment.chest ?? new s.ItemStack('minecraft:stone', 1)).armor) + (njmp.methods.get_armor_info(attacker_equipment.legs ?? new s.ItemStack('minecraft:stone', 1)).armor) + (njmp.methods.get_armor_info(attacker_equipment.feet ?? new s.ItemStack('minecraft:stone', 1)).armor) : 0;
                        let damage_reduction = (target_protection_head * 0.04) + (target_protection_chest * 0.04) + (target_protection_legs * 0.04) + (target_protection_feet * 0.04)
                        let attacker_damage_reduction = (attacker_protection_head * 0.04) + (attacker_protection_chest * 0.04) + (attacker_protection_legs * 0.04) + (attacker_protection_feet * 0.04)
                        let total_toughness = target_equipment ? (njmp.methods.get_armor_info(target_equipment.head ?? new s.ItemStack('minecraft:stone', 1)).tough) + (njmp.methods.get_armor_info(target_equipment.chest ?? new s.ItemStack('minecraft:stone', 1)).tough) + (njmp.methods.get_armor_info(target_equipment.legs ?? new s.ItemStack('minecraft:stone', 1)).tough) + (njmp.methods.get_armor_info(target_equipment.feet ?? new s.ItemStack('minecraft:stone', 1)).tough) : 0;
                        let attacker_total_toughness = attacker_equipment ? (njmp.methods.get_armor_info(attacker_equipment.head ?? new s.ItemStack('minecraft:stone', 1)).tough) + (njmp.methods.get_armor_info(attacker_equipment.chest ?? new s.ItemStack('minecraft:stone', 1)).tough) + (njmp.methods.get_armor_info(attacker_equipment.legs ?? new s.ItemStack('minecraft:stone', 1)).tough) + (njmp.methods.get_armor_info(attacker_equipment.feet ?? new s.ItemStack('minecraft:stone', 1)).tough) : 0;
                        let break_;
                        //console.log(damage_reduction)
                        if (r < tool_damage_chance && attacker_equipment.mainhand && holding_dmg_item && attacker.getGameMode?.() !== 'Creative') {
                            let durability = attacker_equipment.mainhand.getComponent('minecraft:durability');
                            let d = attacker_equipment.mainhand.hasTag('minecraft:is_sword') || attacker_equipment.mainhand.hasTag('minecraft:is_hoe') || attacker_equipment.mainhand.typeId === 'minecraft:mace' ? 1 : 2;
                            if (durability) {
                                if ((durability.damage + d) >= durability.maxDurability) {
                                    break_ = true
                                    attacker_equippable.setEquipment('Mainhand', null);
                                } else {
                                    durability.damage += d;
                                    attacker_equippable.setEquipment('Mainhand', attacker_equipment.mainhand);
                                }
                            }
                        }
                        if ((attacker.getDynamicProperty('njmp:timer.player.hit') ?? 0) <= 0) {
                            // order: base damage, effects, enchatments
                            let shield_disable_chance = s.world.getDynamicProperty('njmp:gamerule.enable_shield_chance') ?? true ? (0.25 + attacker_efficiency * 0.05) + (attacker.isSprinting && attack_meter >= 0.848 ? 0.75 : 0) : 1.0;
                            let hit_info = {
                                critical: attack_meter >= 0.848 && !attacker.isSprinting && attacker.isFalling && !attacker.isInWater,
                                knockback: attacker.isSprinting && attack_meter >= 0.848,
                                sweep: !attacker.isSprinting && attacker.isOnGround && attack_meter >= 0.848 && attacker_equipment.mainhand && attacker_equipment.mainhand.hasTag('minecraft:is_sword') && attacker_equipment.mainhand.typeId !== 'minecraft:mace',
                                break: break_,
                                enchanted: attacker_sharpness !== 0,
                                blocked: typeof target.getProperty('njmp:player.blocking') !== 'undefined' ? target.getProperty('njmp:player.blocking') : false,
                                shield_disabled: r < shield_disable_chance && attacker_equipment.mainhand && attacker_equipment.mainhand.hasTag('minecraft:is_axe')
                            }
                            let attack_knockback_horizontal = 0.8 * (hit_info.knockback ? 1.3 : 1.0);
                            let attack_knockback_vertical = 0.4 * (hit_info.knockback ? 1.3 : 1.0) * (target.isOnGround ? 1.0 : 0.0);
                            let t = attacker.getDynamicProperty('njmp:player.ticks_since_last_hit') ?? 0;
                            let T = s.TicksPerSecond / attack_speed;
                            let base_damage = s.world.getDynamicProperty('njmp:gamerule.enable_attack_cooldown') ?? true ? attack_damage * njmp.methods.clamp(0.2 + ((t + 0.5) / T) ** 2 * 0.8, 0.2, 1.0) : attack_damage
                            let base_damage_armor = Math.max(((base_damage * (1 - (Math.max(armor_points / 5, armor_points - ((4 * base_damage) / (total_toughness + 8)))) / 25))), 0);
                            let attacker_effect_damage = ((base_damage_armor + (3 * attacker_strength)) - (4 * attacker_weakness)) * (hit_info.critical ? 1.5 : 1.0)
                            let attacker_enchantment_damage = attacker_effect_damage + (attacker_sharpness !== 0 ? 0.5 * attacker_sharpness + 0.5 : 0);
                            let target_effect_damage = attacker_enchantment_damage - (0.2 * target_resistance);
                            let target_enchantment_damage = target_effect_damage * (1 - damage_reduction);
                            let final_damage = target_enchantment_damage;
                            let thorns_damage = Math.min((Math.random() < thorns_chance.head ? njmp.methods.random2(1, 5) : 0) + (Math.random() < thorns_chance.chest ? njmp.methods.random2(1, 5) : 0) + (Math.random() < thorns_chance.legs ? njmp.methods.random2(1, 5) : 0) + (Math.random() < thorns_chance.feet ? njmp.methods.random2(1, 5) : 0), 5)
                            if (!hit_info.blocked) {
                                if (attack_meter <= 0.848) {
                                    if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) target.dimension.playSound('entity.player.attack.weak', attacker.location)
                                } else if (final_damage <= 0) {
                                    if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) target.dimension.playSound('entity.player.attack.nodamage', attacker.location)
                                } else {
                                    if (hit_info.knockback) {
                                        if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) target.dimension.playSound('entity.player.attack.knockback', attacker.location, {
                                            pitch: 1.0,
                                            volume: 0.7
                                        })
                                    } else if (hit_info.critical) {
                                        target.dimension.spawnParticle('minecraft:critical_hit_emitter', {
                                            x: target.location.x,
                                            y: Math.min(((target.location.y + target.getHeadLocation().y) / 2) + 1, 320),
                                            z: target.location.z,
                                        })
                                        if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) target.dimension.playSound('entity.player.attack.crit', attacker.location)
                                    } else if (hit_info.sweep) {
                                        target.dimension.spawnParticle('njmp:attacks.sweep', {
                                            x: target.location.x,
                                            y: Math.min(((target.location.y + target.getHeadLocation().y) / 2), 320),
                                            z: target.location.z,
                                        })
                                        let nearby_entities = target.dimension.getEntities({
                                            location: {
                                                x: target.location.x - 0.5,
                                                y: target.location.y - 0.5,
                                                z: target.location.z - 0.5
                                            },
                                            volume: {
                                                x: 1,
                                                y: 0.25,
                                                z: 1
                                            }
                                        });
                                        for (let entity of nearby_entities) {
                                            let dist = Math.sqrt(
                                                (entity.location.x - attacker.location.x) ** 2 +
                                                (entity.location.y - attacker.location.y) ** 2 +
                                                (entity.location.z - attacker.location.z) ** 2
                                            );

                                            if (!entity || !entity.isValid)
                                                continue;

                                            if (njmp.no_hit.includes(entity.typeId))
                                                continue;

                                            if (attacker.hasTag('njmp:player.cannot_attack_entities') && entity.typeId !== 'minecraft:player')
                                                return;

                                            if (attacker.hasTag('njmp:player.cannot_attack_players') && entity.typeId === 'minecraft:player')
                                                return

                                            if (dist <= 3 && entity.id !== target.id && entity.id !== attacker.id) {
                                                let sweeping_damage = 1;    
                                                sweeping_damage > 0 && !njmp.no_knockback.includes(entity.typeId) ?
                                                    entity.applyKnockback({
                                                        x: attacker.getViewDirection().x * (attack_knockback_horizontal * 0.8),
                                                        z: attacker.getViewDirection().z * (attack_knockback_horizontal * 0.8)
                                                    }, attack_knockback_vertical) 
                                                :
                                                    void 0;
                                                sweeping_damage > 0 && !njmp.no_hit.includes(entity.typeId) ? 
                                                    entity.applyDamage(sweeping_damage, {
                                                        cause: 'override'
                                                    })
                                                : 
                                                    void 0;
                                                sweeping_damage > 0 && !njmp.no_hit.includes(entity.typeId) ? 
                                                    entity.applyDamage(0, {
                                                        cause: 'contact',
                                                        damagingEntity: attacker
                                                    })
                                                : 
                                                    void 0;
                                                sweeping_damage > 0 && attacker_fire_aspect > 0 ?
                                                    entity.setOnFire(attacker_fire_aspect * 4)
                                                :
                                                    void 0;
                                            }
                                        }
                                        if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) target.dimension.playSound('entity.player.attack.sweep', attacker.location);
                                    } else {
                                        if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) target.dimension.playSound('entity.player.attack.strong', attacker.location)
                                    }
                                }
                            } else {
                                target.dimension.playSound('item.shield.block', target.location, {
                                    pitch: njmp.methods.random2(0.8, 1.2)
                                })
                                s.world.getDynamicProperty('njmp:gamerule.do_shield_knockback') ?? true ?
                                    attacker.applyKnockback({
                                        x: Math.cos(njmp.methods.get_knockback_direction(target.location, attacker.location)) * 0.8,
                                        z: Math.sin(njmp.methods.get_knockback_direction(target.location, attacker.location)) * 0.8
                                    }, 0.4)
                                :
                                    void 0;
                                if (hit_info.shield_disabled) {
                                    target.dimension.playSound('random.break', target.location, {
                                        pitch: njmp.methods.random2(0.8, 1.2)
                                    })
                                    target.setDynamicProperty('njmp:timer.player.shield_disable', 100)
                                }
                            }
                            if (hit_info.break) {
                                attacker.dimension.playSound('random.break', attacker.location, {
                                    pitch: njmp.methods.random2(0.8, 1.2)
                                })
                            }
                            if (!hit_info.blocked) {
                                if (target_equipment) {
                                    let list = ['Head', 'Chest', 'Legs', 'Feet'];
                                    for (let s of list) {
                                        let equ = target_equipment[s.toLowerCase()];
                                        if (Math.random() < armor_damage_chance[s.toLowerCase()] && equ) {
                                            let durability = target_equipment[s.toLowerCase()].getComponent('minecraft:durability');
                                            if (durability) {
                                                let dmg = Math.max(Math.floor(final_damage / 4), 1)
                                                if ((durability.damage + dmg) >= durability.maxDurability) {
                                                    attacker.dimension.playSound('random.break', attacker.location, {
                                                        pitch: njmp.methods.random2(0.8, 1.2)
                                                    })
                                                    target_equippable.setEquipment(s, null);
                                                } else {
                                                    durability.damage += dmg;
                                                    target_equippable.setEquipment(s, target_equipment[s.toLowerCase()]);
                                                }
                                            }
                                        }
                                    }
                                }
                                final_damage > 0 && !njmp.no_hit.includes(target.typeId) ? target.applyDamage(final_damage, {
                                    cause: 'override'
                                }) : void 0;
                                final_damage > 0 && !njmp.no_hit.includes(target.typeId) ? target.applyDamage(0, {
                                    cause: 'contact',
                                    damagingEntity: attacker
                                }) : void 0;
                                final_damage > 0 && !njmp.no_hit.includes(target.typeId) ? attacker.applyDamage((Math.max(((thorns_damage * (1 - (Math.max(attacker_armor_points / 5, attacker_armor_points - ((4 * thorns_damage) / (attacker_total_toughness + 8)))) / 25))), 0)) * (1 - attacker_damage_reduction), {
                                    cause: 'override',
                                    damagingEntity: target
                                }) : void 0;
                                thorns_damage > 0 ? target.dimension.playSound('damage.thorns', attacker.location, {
                                    pitch: njmp.methods.random2(0.8, 1.2)
                                }) : void 0;
                                final_damage > 0 && !njmp.no_hit.includes(target.typeId) && !njmp.no_knockback.includes(target.typeId) ?
                                    target.applyKnockback({
                                        x: attacker.getViewDirection().x * attack_knockback_horizontal,
                                        z: attacker.getViewDirection().z * attack_knockback_horizontal
                                    }, attack_knockback_vertical) 
                                :
                                    void 0;
                                final_damage > 0 && !njmp.no_hit.includes(target.typeId) && attacker_fire_aspect > 0 ?
                                    target.setOnFire(attacker_fire_aspect * 4)
                                :
                                    void 0;
                                attacker.setDynamicProperty('njmp:player.last_dmg', final_damage);
                            } else {
                                if (target_equipment) {
                                    let durability = target_equipment.offhand.getComponent('minecraft:durability');
                                    let dmg = final_damage >= 3 ? Math.ceil(final_damage) : 1;
                                    if (durability) {
                                        if ((durability.damage + dmg) >= durability.maxDurability) {
                                            attacker.dimension.playSound('random.break', attacker.location, {
                                                pitch: njmp.methods.random2(0.8, 1.2)
                                            })
                                            target_equippable.setEquipment('Offhand', null);
                                        } else {
                                            durability.damage += dmg;
                                            target_equippable.setEquipment('Offhand', target_equipment.offhand);
                                        }
                                    }
                                }
                            }
                        } else {
                            if (s.world.getDynamicProperty('njmp:gamerule.enable_combat_sounds') ?? true) target.dimension.playSound('entity.player.attack.nodamage', target.location)
                        }
                    }
                    // change hit & attack timers
                    (attacker.getDynamicProperty('njmp:timer.player.hit') ?? 0) <= 0 ? attacker.setDynamicProperty('njmp:timer.player.hit', 10) : void 0;
                    (attacker.getDynamicProperty('njmp:timer.player.block') ?? 0) <= 0 ? attacker.setDynamicProperty('njmp:timer.player.block', 5) : void 0;
                    s.world.getDynamicProperty('njmp:gamerule.enable_attack_cooldown') ?? true ? attacker.setDynamicProperty('njmp:timer.player.attack', s.TicksPerSecond / attack_speed) : void 0;
                    attacker.setDynamicProperty('njmp:player.ticks_since_last_hit', 0);
                }
            },
            playerSpawn: function(e) {
                e.player.setDynamicProperty('njmp:timer.ambience.underwater', -2)
                e.player.setDynamicProperty('njmp:timer.ambience.underwater.additions', 160)
            }
        }
    },
    listeners_system: {
        before_events: {
            
        },
        after_events: {
            
        }
    },
    on_tick: function() {
        // runs every game tick
        s.system.runInterval(() => {
            for (let player of s.world.getAllPlayers()) {
                if (player) {
                    player.setDynamicProperty('njmp:player.ticks_since_last_hit', (player.getDynamicProperty('njmp:player.ticks_since_last_hit') ?? 0) + 1)
                    !(s.world.getDynamicProperty('njmp:gamerule.enable_attack_cooldown') ?? true) ? player.setDynamicProperty('njmp:timer.player.attack', -1) : void 0;

                    let props = player.getDynamicPropertyIds()
                    for (let prop of props)
                        if (prop.startsWith('njmp:timer.'))
                            (player.getDynamicProperty(prop) ?? -1) > -1 ? player.setDynamicProperty(prop, (player.getDynamicProperty(prop) ?? -1) - 1) : void 0;
                    let player_equippable = player.getComponent('minecraft:equippable')
                    let player_equipment = player_equippable ? {
                        head: player_equippable.getEquipment('Head'),
                        chest: player_equippable.getEquipment('Chest'),
                        legs: player_equippable.getEquipment('Legs'),
                        feet: player_equippable.getEquipment('Feet'),
                        mainhand: player_equippable.getEquipment('Mainhand'),
                        offhand: player_equippable.getEquipment('Offhand'),
                    } : void 0;

                    let player_enchantable = player_equipment ? {
                        head: player_equipment.head ? player_equipment.head.getComponent('minecraft:enchantable') : void 0,
                        chest: player_equipment.chest ? player_equipment.chest.getComponent('minecraft:enchantable') : void 0,
                        legs: player_equipment.legs ? player_equipment.legs.getComponent('minecraft:enchantable') : void 0,
                        feet: player_equipment.feet ? player_equipment.feet.getComponent('minecraft:enchantable') : void 0,
                        mainhand: player_equipment.mainhand ? player_equipment.mainhand.getComponent('minecraft:enchantable') : void 0,
                        offhand: player_equipment.offhand ? player_equipment.offhand.getComponent('minecraft:enchantable') : void 0,
                    } : void 0;

                    let inventory = player.getComponent('inventory').container
                    if (player.hasTag('njmp:player.enable_1.9_pvp')) {
                        let list = ['Head', 'Chest', 'Legs', 'Feet', 'Offhand']
                        for (let i = 0; i < 36; i++) {
                            let item = inventory.getItem(i)

                            if (!item)
                                continue;

                            let item_enchantable = item.getComponent('minecraft:enchantable')
                            let sharpness = item_enchantable ? item_enchantable.getEnchantment('minecraft:sharpness') ?? {
                                level: 0
                            }.level : 0

                            if (njmp.methods.has_item_info(item)) {
                                let durability = item.getComponent('minecraft:durability')
                                let stats = njmp.methods.get_item_info(item)
                                item.setLore([
                                    `\xa7r\xa7iWhen in Main Hand:`,
                                    `\xa7r \xa72${(stats.damage + (sharpness !== 0 ? 0.5 * sharpness + 0.5 : 0))} Attack Damage`,
                                    `\xa7r \xa72${stats.speed} Attack Speed`,
                                    durability ? `\xa7r\xa7fDurability: ${durability.maxDurability - durability.damage} / ${durability.maxDurability}` : ''
                                ])
                                inventory.setItem(i, item)
                            } else if (njmp.methods.has_armor_info(item)) {
                                let durability = item.getComponent('minecraft:durability')
                                let stats = njmp.methods.get_armor_info(item)
                                if (stats.tough > 0) {
                                    item.setLore([
                                        `\xa7r\xa7iWhen worn:`,
                                        `\xa7r \xa79+${stats.armor} Armor`,
                                        `\xa7r \xa79+${stats.tough} Armor Toughness`,
                                        durability ? `\xa7r\xa7fDurability: ${durability.maxDurability - durability.damage} / ${durability.maxDurability}` : ''
                                    ])
                                } else {
                                    item.setLore([
                                        `\xa7r\xa7iWhen worn:`,
                                        `\xa7r \xa79+${stats.armor} Armor`,
                                        durability ? `\xa7r\xa7fDurability: ${durability.maxDurability - durability.damage} / ${durability.maxDurability}` : ''
                                    ])
                                }
                                inventory.setItem(i, item)
                            }
                        }
                        for (let i = 0; i < 5; i++) {
                            let item = player_equipment[list[i].toLowerCase()]

                            if (!item)
                                continue;

                            if (njmp.methods.has_item_info(item)) {
                                let durability = item.getComponent('minecraft:durability')
                                let stats = njmp.methods.get_item_info(item)
                                item.setLore([
                                    `\xa7r\xa7iWhen in Main Hand:`,
                                    `\xa7r \xa72${(stats.damage + (sharpness !== 0 ? 0.5 * sharpness + 0.5 : 0))} Attack Damage`,
                                    `\xa7r \xa72${stats.speed} Attack Speed`,
                                    durability ? `\xa7r\xa7fDurability: ${durability.maxDurability - durability.damage} / ${durability.maxDurability}` : ''
                                ])
                                inventory.setItem(i, item)
                            } else if (njmp.methods.has_armor_info(item)) {
                                let durability = item.getComponent('minecraft:durability')
                                let stats = njmp.methods.get_armor_info(item)
                                if (stats.tough > 0) {
                                    item.setLore([
                                        `\xa7r\xa7iWhen worn:`,
                                        `\xa7r \xa79+${stats.armor} Armor`,
                                        `\xa7r \xa79+${stats.tough} Armor Toughness`,
                                        durability ? `\xa7r\xa7fDurability: ${durability.maxDurability - durability.damage} / ${durability.maxDurability}` : ''
                                    ])
                                } else {
                                    item.setLore([
                                        `\xa7r\xa7iWhen worn:`,
                                        `\xa7r \xa79+${stats.armor} Armor`,
                                        durability ? `\xa7r\xa7fDurability: ${durability.maxDurability - durability.damage} / ${durability.maxDurability}` : ''
                                    ])
                                }
                                player_equippable.setEquipment(list[i], item)
                            }
                        }
                    }
                    let atkm = njmp.methods.clamp((1 - ((s.TicksPerSecond / njmp.methods.get_item_info(player_equipment.mainhand).speed) - (player.getDynamicProperty('njmp:timer.player.attack') ?? -1))) / -(s.TicksPerSecond / njmp.methods.get_item_info(player_equipment.mainhand).speed), 0, 1)
                    let isholdingweapon = (
                        player_equipment && 
                        player_equipment.mainhand && 
                        (
                            player_equipment.mainhand.hasTag('minecraft:is_sword') || 
                            player_equipment.mainhand.hasTag('minecraft:is_axe') || 
                            player_equipment.mainhand.hasTag('minecraft:is_pickaxe') || 
                            player_equipment.mainhand.hasTag('minecraft:is_shovel') || 
                            player_equipment.mainhand.typeId === 'minecraft:trident' || 
                            player_equipment.mainhand.typeId === 'minecraft:mace'
                        ) && 
                        player.hasTag('njmp:player.enable_1.9_pvp')
                    ) ? true : false
                    typeof player.getProperty('njmp:player.attack_meter') !== 'undefined' ? player.setProperty('njmp:player.attack_meter', atkm) : void 0
                    
                    let view = player.getEntitiesFromViewDirection()
                    if (view && view.length > 0 && view[0] && view[0].entity && view[0].entity.typeId !== 'minecraft:item' && njmp.methods.dist(player.location, view[0].entity.location) <= njmp.reach)
                        typeof player.getProperty('njmp:player.looking_at_entity') !== 'undefined' ? player.setProperty('njmp:player.looking_at_entity', true) : void 0
                    else {
                        typeof player.getProperty('njmp:player.looking_at_entity') !== 'undefined' ? player.setProperty('njmp:player.looking_at_entity', false) : void 0
                    }
                    if (player.hasTag('njmp:player.enable_1.9_pvp')) {
                        typeof player.getProperty('njmp:player.holding_weapon') !== 'undefined' ? player.setProperty('njmp:player.holding_weapon', atkm >= 1.0 && isholdingweapon) : void 0 // w
                    } else {
                        typeof player.getProperty('njmp:player.holding_weapon') !== 'undefined' ? player.setProperty('njmp:player.holding_weapon', false) : void 0
                    }
                    if (player.hasTag('njmp:player.enable_1.9_pvp') || player.hasTag('njmp:player.nullify_damage')) {
                        player.triggerEvent('njmp:enable_1.9_pvp')
                    } else {
                        player.triggerEvent('njmp:disable_1.9_pvp')
                    }
                    if (
                        player.isSneaking && 
                        player_equipment.offhand && 
                        player_equipment.offhand.typeId === 'minecraft:shield' && 
                        !player.getDynamicProperty('njmp:is_using_item') && 
                        (player.getDynamicProperty('njmp:timer.player.shield_disable') ?? 0) <= 0 && 
                        (player.getDynamicProperty('njmp:timer.player.block') ?? 0) <= 0
                    ) {
                        typeof player.getProperty('njmp:player.blocking') !== 'undefined' ? player.setProperty('njmp:player.blocking', 1.0) : void 0
                    } else {
                        typeof player.getProperty('njmp:player.blocking') !== 'undefined' ? player.setProperty('njmp:player.blocking', 0.0) : void 0
                    }

                    if (s.world.getDynamicProperty('njmp:gamerule.do_custom_ambience') ?? true)
                    for (let a of this.ambience.loop) {
                        let ticklength = (a.sample_count / a.sample_rate) * s.TicksPerSecond
                        if (a.condition(player)) {
                            player.getDynamicProperty(`njmp:timer.ambience.${a.id}`) === -2 ? player.setDynamicProperty(`njmp:timer.ambience.${a.id}`, -1) : void 0;
                            if ((player.getDynamicProperty(`njmp:timer.ambience.${a.id}`) ?? 0) > -2 && (player.getDynamicProperty(`njmp:timer.ambience.${a.id}`) ?? 0) <= 0) {
                                player.playSound(a.sound_id)
                                player.setDynamicProperty(`njmp:timer.ambience.${a.id}`, Math.floor(ticklength))
                            }
                        } else {
                            player.setDynamicProperty(`njmp:timer.ambience.${a.id}`, -2)
                            player.stopSound(a.sound_id)
                        }
                    }
                    for (let a of this.ambience.additions) {
                        if (a.condition(player)) {
                            player.getDynamicProperty(`njmp:timer.ambience.${a.id}`) === -2 ? player.setDynamicProperty(`njmp:timer.ambience.${a.id}`, -1) : void 0;
                            if ((player.getDynamicProperty(`njmp:timer.ambience.${a.id}`) ?? 0) > -2 && (player.getDynamicProperty(`njmp:timer.ambience.${a.id}`) ?? 0) <= 0) {
                                player.playSound(a.sound_id)
                                player.setDynamicProperty(`njmp:timer.ambience.${a.id}`, Math.floor(njmp.methods.random2(a.interval[0], a.interval[1])))
                            }
                        } else {
                            player.setDynamicProperty(`njmp:timer.ambience.${a.id}`, a.interval[0])
                        }
                    }
                }
            }
        });
    },
    on_load: function() {
        // runs when the script is loaded
        s.world.sendMessage(`\xa7fScript reloaded\xa7i! (NJMP)`);
    }
}
s.system.beforeEvents.startup.subscribe(e => {
    e.customCommandRegistry.registerEnum('njmp:custom_gamerule', [
        'enableCombatSounds',
        'enableShieldChance',
        'enableAttackCooldown',
        'doShieldKnockback',
        'doCustomAmbience'
    ])
    e.customCommandRegistry.registerCommand(
        {
            name: 'njmp:njmpgamerule',
            description: 'Sets or queries an NJMP game rule value.',
            permissionLevel: 2,
            cheatsRequired: false,
            mandatoryParameters: [
                {
                    type: 'Enum',
                    name: 'njmp:custom_gamerule'
                }
            ],
            optionalParameters: [
                {
                    type: 'Boolean',
                    name: 'value'
                }
            ]
        },
        function(origin, gamerule, value) {
            let gamerule_map = {
                'enableCombatSounds': {
                    name: 'njmp:gamerule.enable_combat_sounds',
                    default: true
                },
                'enableShieldChance': {
                    name: 'njmp:gamerule.enable_shield_chance',
                    default: true
                },
                'enableAttackCooldown': {
                    name: 'njmp:gamerule.enable_attack_cooldown',
                    default: true
                },
                'doShieldKnockback': {
                    name: 'njmp:gamerule.do_shield_knockback',
                    default: true
                },
                'doCustomAmbience': {
                    name: 'njmp:gamerule.do_custom_ambience',
                    default: true
                }
            }

            if (typeof value === 'undefined') {
                origin.sourceEntity.sendMessage?.(`\xa7i[\xa7aNJMP\xa7i] \xa7i[\xa7fquery\xa7i] \xa7fGamerule \xa7b${gamerule} \xa7fis currenty equal to \xa7e${s.world.getDynamicProperty(gamerule_map[gamerule]?.name) ?? gamerule_map[gamerule]?.default}\xa7i.`)
            } else {
                s.world.setDynamicProperty(gamerule_map[gamerule]?.name, value)
                origin.sourceEntity.sendMessage?.(`\xa7i[\xa7aNJMP\xa7i] \xa7i[\xa7fset\xa7i] \xa7fGamerule \xa7b${gamerule} \xa7fhas been set to \xa7e${value}\xa7i.`)
            }
        }
    )
})
s.world.afterEvents.worldLoad.subscribe(e => {
    for (let key of Object.keys(njmp.listeners.before_events)) {
        s.world.beforeEvents[key].subscribe(njmp.listeners.before_events[key]);
    }
    for (let key of Object.keys(njmp.listeners.after_events)) {
        s.world.afterEvents[key].subscribe(njmp.listeners.after_events[key]);
    }
    for (let key of Object.keys(njmp.listeners_system.before_events)) {
        s.system.beforeEvents[key].subscribe(njmp.listeners_system.before_events[key]);
    }
    for (let key of Object.keys(njmp.listeners_system.after_events)) {
        s.system.afterEvents[key].subscribe(njmp.listeners_system.after_events[key]);
    }
    njmp.dimensions = {
        overworld: s.world.getDimension('minecraft:overworld'),
        nether: s.world.getDimension('minecraft:nether'),
        the_end: s.world.getDimension('minecraft:the_end')
    }
    njmp.on_load();
    njmp.on_tick();
})