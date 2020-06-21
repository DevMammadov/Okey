export * from "./useTranslator";
export * from "./StyleWord";
export * from "./translator";

/*
useTranslator:
if hook dont have any property than returns all lang object as one object
if hook have one "main" prop than will return only main props
if hook have other page props than it will return "main" and "other page props"
second argument array, its for adding another page words to lang object
*/

/*
translator:
function translator works as simple function which returns lang object same as useTranslator but requires lang property

*/
