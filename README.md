
# FoundryVTT DnD5E Spell Automation 

Setting up spell effects, animations, and all the automation with MIDI, DAE, AA - it's a pain. This module does it all for you!

## Usage

The module comes in two parts. 

The part the module that actually runs handles the automation of applying dynamic active effects. When an item is created, updated, or imported, a check will be done against the item's name.
If it matches then it will apply an active effect directly to the item.

The other component is the compendium and autorec.json file within this repo. These files are generated and are used by automated animations to apply VFX in tandum with spells being used and dynamic effects being enabled/disabled.
After enabling the module, navigate to the Automated Animations menu and import the autorec.json file. It's advisable to overwrite the existing menu.

## Dependencies

- [**MIDI QOL**](https://gitlab.com/tposney/midi-qol) for the workflow functionality it provides as well as the flags which are used with DAE.
- [**Automated Animations**](https://github.com/otigon/automated-jb2a-animations) 
- [**Dynamic Active Effects**](https://gitlab.com/tposney/dae) for spells with visual effects that persist based on a condition.
- [**Sequencer**](https://github.com/fantasycalendar/FoundryVTT-Sequencer)
- [**J2BA's Animated Assets**](https://www.jb2a.com) (Patreon Edition)
- [**WarpGate**](https://github.com/trioderegion/warpgate) For summons and spells like dancing lights, spiritual weapon, etc

## Contributing

If you want to contribute scripts to this repository, please feel free to submit a pull request! Ideally anything contributed should conform to the styles visible in the preview folders. Anything requiring additional dependencies not already listed above, such as TMFX, won't be accepted. 
Macro file names must match exactly the spell name they are meant to run, and have correct metadata within them. 

### Commands
- Running `npm run aa` will generate a new autorec.json for importing into automated animations.
- Running `npm run pack` will generate a new compendium pack file for importing the macros.
- Running `npm run pack-dbg` will generate a new compendium pack file with debug information (console logs) present.

## Credit
- [**IrateRedKite**](https://github.com/IrateRedKite) who has made most of the visual effect macros within this repo.
- [**Wasp**](https://github.com/fantasycalendar) who's examples and tutorials are the basis for any effect-based macro in this repository.
