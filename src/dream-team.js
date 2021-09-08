import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  var name = "";

  if (!Array.isArray(members)) return false;

  for (var i = 0; i < members.length; i++)
    if (typeof members[i] == "string") {
      var currValue = members[i].trim();
      if (currValue.length > 0) name += currValue[0].toUpperCase();
    }

  name = name.split("").sort().join("");

  if (name == "") return false;
  return name;
}
