const traitNames = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'W',
  'X',
  'Y',
  'Z'
];

/**
 * Returns name of given trait.
 *
 * @param  {Integer} traitID Trait ID
 * @return {string}         Trait Name
 */
export default function getTraitName(traitID) {
  return traitNames[traitID] || `F[${traitID - traitNames.length}]`;
}
