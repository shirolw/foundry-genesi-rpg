/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    "systems/genesi-rpg/templates/actor/parts/actor-features.hbs",
    "systems/genesi-rpg/templates/actor/parts/actor-items.hbs",
    "systems/genesi-rpg/templates/actor/parts/actor-spells.hbs",
    "systems/genesi-rpg/templates/actor/parts/actor-effects.hbs",
    "systems/genesi-rpg/templates/actor/parts/actor-character-header.hbs",
    // Item partials
    "systems/genesi-rpg/templates/item/parts/item-effects.hbs",
  ]);
};
