/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShip = /* GraphQL */ `
  mutation CreateShip(
    $input: CreateShipInput!
    $condition: ModelShipConditionInput
  ) {
    createShip(input: $input, condition: $condition) {
      id
      name
      upgrades {
        items {
          id
          shipID
          upgradeID
        }
        nextToken
      }
    }
  }
`;
export const updateShip = /* GraphQL */ `
  mutation UpdateShip(
    $input: UpdateShipInput!
    $condition: ModelShipConditionInput
  ) {
    updateShip(input: $input, condition: $condition) {
      id
      name
      upgrades {
        items {
          id
          shipID
          upgradeID
        }
        nextToken
      }
    }
  }
`;
export const deleteShip = /* GraphQL */ `
  mutation DeleteShip(
    $input: DeleteShipInput!
    $condition: ModelShipConditionInput
  ) {
    deleteShip(input: $input, condition: $condition) {
      id
      name
      upgrades {
        items {
          id
          shipID
          upgradeID
        }
        nextToken
      }
    }
  }
`;
export const createShipUpgrade = /* GraphQL */ `
  mutation CreateShipUpgrade(
    $input: CreateShipUpgradeInput!
    $condition: ModelShipUpgradeConditionInput
  ) {
    createShipUpgrade(input: $input, condition: $condition) {
      id
      shipID
      upgradeID
      upgrade {
        id
        name
        description
      }
    }
  }
`;
export const updateShipUpgrade = /* GraphQL */ `
  mutation UpdateShipUpgrade(
    $input: UpdateShipUpgradeInput!
    $condition: ModelShipUpgradeConditionInput
  ) {
    updateShipUpgrade(input: $input, condition: $condition) {
      id
      shipID
      upgradeID
      upgrade {
        id
        name
        description
      }
    }
  }
`;
export const deleteShipUpgrade = /* GraphQL */ `
  mutation DeleteShipUpgrade(
    $input: DeleteShipUpgradeInput!
    $condition: ModelShipUpgradeConditionInput
  ) {
    deleteShipUpgrade(input: $input, condition: $condition) {
      id
      shipID
      upgradeID
      upgrade {
        id
        name
        description
      }
    }
  }
`;
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
      id
      name
      avatarURL
      HP
      maxHP
      armor
      XP
      strength
      agility
      intelligence
      willpower
      money
      gear
      classID
      class {
        id
        name
        description
        abilities {
          nextToken
        }
      }
      skills {
        items {
          id
          characterID
          skillID
        }
        nextToken
      }
      abilities {
        items {
          id
          characterID
          abilityID
        }
        nextToken
      }
    }
  }
`;
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
      id
      name
      avatarURL
      HP
      maxHP
      armor
      XP
      strength
      agility
      intelligence
      willpower
      money
      gear
      classID
      class {
        id
        name
        description
        abilities {
          nextToken
        }
      }
      skills {
        items {
          id
          characterID
          skillID
        }
        nextToken
      }
      abilities {
        items {
          id
          characterID
          abilityID
        }
        nextToken
      }
    }
  }
`;
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
      id
      name
      avatarURL
      HP
      maxHP
      armor
      XP
      strength
      agility
      intelligence
      willpower
      money
      gear
      classID
      class {
        id
        name
        description
        abilities {
          nextToken
        }
      }
      skills {
        items {
          id
          characterID
          skillID
        }
        nextToken
      }
      abilities {
        items {
          id
          characterID
          abilityID
        }
        nextToken
      }
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const createCharacterSkill = /* GraphQL */ `
  mutation CreateCharacterSkill(
    $input: CreateCharacterSkillInput!
    $condition: ModelCharacterSkillConditionInput
  ) {
    createCharacterSkill(input: $input, condition: $condition) {
      id
      characterID
      skillID
      skill {
        id
        name
        description
      }
    }
  }
`;
export const updateCharacterSkill = /* GraphQL */ `
  mutation UpdateCharacterSkill(
    $input: UpdateCharacterSkillInput!
    $condition: ModelCharacterSkillConditionInput
  ) {
    updateCharacterSkill(input: $input, condition: $condition) {
      id
      characterID
      skillID
      skill {
        id
        name
        description
      }
    }
  }
`;
export const deleteCharacterSkill = /* GraphQL */ `
  mutation DeleteCharacterSkill(
    $input: DeleteCharacterSkillInput!
    $condition: ModelCharacterSkillConditionInput
  ) {
    deleteCharacterSkill(input: $input, condition: $condition) {
      id
      characterID
      skillID
      skill {
        id
        name
        description
      }
    }
  }
`;
export const createCharacterAbility = /* GraphQL */ `
  mutation CreateCharacterAbility(
    $input: CreateCharacterAbilityInput!
    $condition: ModelCharacterAbilityConditionInput
  ) {
    createCharacterAbility(input: $input, condition: $condition) {
      id
      characterID
      abilityID
      ability {
        id
        name
        description
        classID
      }
    }
  }
`;
export const updateCharacterAbility = /* GraphQL */ `
  mutation UpdateCharacterAbility(
    $input: UpdateCharacterAbilityInput!
    $condition: ModelCharacterAbilityConditionInput
  ) {
    updateCharacterAbility(input: $input, condition: $condition) {
      id
      characterID
      abilityID
      ability {
        id
        name
        description
        classID
      }
    }
  }
`;
export const deleteCharacterAbility = /* GraphQL */ `
  mutation DeleteCharacterAbility(
    $input: DeleteCharacterAbilityInput!
    $condition: ModelCharacterAbilityConditionInput
  ) {
    deleteCharacterAbility(input: $input, condition: $condition) {
      id
      characterID
      abilityID
      ability {
        id
        name
        description
        classID
      }
    }
  }
`;
