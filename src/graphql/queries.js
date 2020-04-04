/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShip = /* GraphQL */ `
  query GetShip($id: ID!) {
    getShip(id: $id) {
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
export const listShips = /* GraphQL */ `
  query ListShips(
    $filter: ModelShipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        upgrades {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
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
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        skills {
          nextToken
        }
        abilities {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      description
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
