// Each mutation has a name, description, and effect.
var mutations = [
  [
    "Occular Accuity",
    "This wyvern has grown four eyes in straight lines on each side of its head to replace the two a wyvern would normally have. These eight eyes have no pupils to be seen, and are instead one solid color of your choosing. These eyes, while useful for taking in their surroundings, often give wyverns a menacing appearance.",
    "This wyvern gains proficiency in Perception and Intimidation."
  ],
  [
    "Avian Ancestry",
    "This wyvern has awakened its Avian Ancestry. Bird like features, such as feathers, may present themselves on mutated wyverns. They can range from full coverings to appearing only along joints and any amount in between. They vary in size, shape, and color, and physiology, so each avian mutation is uniquely different. These mutations result in lighter overall body structures, granting a more nimble frame that becomes more brittle, but much more agile in the process.",
    "This wyvern decreases its Constitution by 1. Additionally, this wyvern increases its Dexterity by 1, and its Flying Speed by 10."
  ],
  [
    "Delta Wings",
    "Variations in wing styles reflect the amount of drag and stability imposed on the wyverns aerobatic features. This wyvern has Delta Wings that have folds that carry down each side of the spine and through to the tail, allowing them to be more stable in flight at higher speeds.",
    "This wyvern has increases its Dexterity by 1, and its Flying Speed by 10."
  ],
  [
    "Swept Wings",
    "Variations in wing styles reflect the amount of drag and stability imposed on the wyverns aerobatic features. This wyvern has Swept Wings, granting them a smaller set of stabilizer wings on their back legs, allowing them to be more agile during flight.",
    "This wyvern has increases its Dexterity by 1, and its AC by 1."
  ],
  [
    "Glauceal Wings",
    "Variations in wing styles reflect the amount of drag and stability imposed on the wyverns aerobatic features. This wyvern has Glauceal Wings, granting it two smaller sets of stabilizer wings, one pair on its hind legs and the other pair halfway down its tail, granting them incredible agility during flight.",
    "This wyvern increases its Dexterity by 2, its AC by 2, and its Flying Speed by 10 feet."
  ],
  [
    "Adaptive Carapace",
    "Sometimes, an incredible ability to manipulate appearance is present in some wyverns, with the skin beneath their scales having the ability to mottle its color and texture. This wyvern has the ability to camouflage in to various environments such as mountain hills, grassy plains, or vast deserts.",
    "This wyvern gains the ability to cast the 'Invisibility' spell once with this trait and regains the ability to do so when it finishes a long rest."
  ],
  [
    "Adherent Grasp",
    "This wyvern has increased muscle strength and differeng talon tensile strengths, which can give a wyvern great ability to scale sheer faces, and even move up entire mountain stealthily by holding on to their faces without being detected.",
    "This wyvern gains proficiency in Stealth, and a Climbing Speed equivalent to its Walking Speed"
  ],
  [
    "Titanous Form",
    "This wyvern will have increased metabolisim and muscle density in their youth, which might cause it to reach a titanous size by adulthood, often growing up to twice as large as a normal wyvern. This, while it makes them proportionally slower in flight and less aerobatic compared to their smaller kin, gives them incredible strength and an astoundingly fortified constitution.",
    "This wyvern doubles in size and now has the Size Category of 'Huge'. Its AC is decreased by 4, and its Dexterity is decreased by 3. Additionally, its Strength, Maximum Strength, Constitution, and Maximum Constitution increase by 3."
  ],
  [
    "Acquatic Adaptation",
    "Some mutations can completely change the natural homes of a wyvern. This wyvern has an affinity for the sea, growing a set of Gills, a Dorsal Fin, and a Caudal Fin on its tail similar to that of a Shark.",
    "This wyvern gains a Swimming Speed of 60 feet, and it can breathe Air and Water."
  ],
  [
    "Armor of Pangol",
    "This wyvern is kin to the well defended Pangolin, and as such its scales might grow larger on their body, creating a natural armor plating often paired with a wider and equally armored tail. While slowed down considerably, it makes up for its lessened aerobatic accuity with one of the most robust carapaces observed in nature.",
    "This wyverns Flying speed is reduced by 30 feet, and its AC is increaded by 3"
  ],
  [
    "Mydo'Kin Scales",
    "Additional muscle and scale growth can lead to imposing wyvern mutations that make them much more agile in the air. Several of the scales on this wyvern grow to the size of tower shields, and may be raised swiftly to create large amounts of drag when flying. This ability can be used to swiftly maneuver while flying, allowing for acute directional changes. Additionally, these scales can be rasised simply for their imposing size and grandeur, creating an incredibly intimidating presence.",
    "This wyvern gains proficiency in Intimidation. Additionally, it gains the ability to take the 'Dodge' action as a bonus action twice with this trait and regains all uses of this ability when it finishes a long rest.""
  ],
  [
    "Vicious Crown",
    "While almost all kin of draconic ancestry have menacing horns across their forms, one mutation for wyverns allows them to grow incredibly imposing horns of all shapes and sizes. This wyvern has larger and more destructive horns than most, crowning it with a might unbeknownst to the rest of its kin.",
    "If this wyvern moves at least 10 feet straight toward a target and then hits it with a melee attack on the same turn, the wyvern can then strike the target with its horns as well, and the target takes an extra 9 (2d8) piercing damage. If the target is a creature of a size category equal to or less than this wyvern, it must succeed on a contested athletics check with this wyvern or be pushed up to 10 feet away and knocked prone."
  ],
  [
    "Colossal Wingspan",
    "Some wyverns have mutations that expand their wings to those of colossal proportions. This wyvern has been bestowed with such a mutation, and as such has a wingspan twice as large as a normal wyvern.",
    "This wyvern counts as one size larger when determining its wingspan. Additionally, its Flying speed is increased by 40."
  ],
  [
    "Arcane Skeleton",
    "This wyvern has retained some of the magics used to incubate it. Its skeleton has been enhanced, and is considered magical.",
    "Any melee attack made by this wyvern is considered magical."
  ]
];
