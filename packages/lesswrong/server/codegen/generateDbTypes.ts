import { Collections } from '../../lib/vulcan-lib';
import { generatedFileHeader, simplSchemaTypeToTypescript } from './typeGenerationUtils';
import { isUniversalField } from '../../lib/collectionUtils';

const dbTypesFileHeader = generatedFileHeader+`//
// Contains Typescript signatures for database objects, generated by
// server/codegen/generateDbTypes.ts.
//
`

export function generateDbTypes(): string {
  const sb: Array<string> = [];
  sb.push(dbTypesFileHeader);
  for (let collection of Collections) {
    sb.push(generateCollectionType(collection));
    sb.push(generateCollectionDbType(collection));
  }
  
  sb.push(generateNameMapTypes());
  return sb.join('');
}

function generateCollectionType(collection: any): string {
  let sb: Array<string> = [];
  const collectionName = collection.collectionName;
  const typeName = collection.typeName;
  
  sb.push(`interface ${collectionName}Collection extends CollectionBase<Db${typeName}> {\n`);
  sb.push("}\n\n");
  
  return sb.join('');
}

function generateCollectionDbType(collection: any): string {
  let sb: Array<string> = [];
  const typeName = collection.typeName;
  const schema = collection.simpleSchema()._schema;
  
  sb.push(`interface Db${typeName} extends DbObject {\n`);
  
  for (let fieldName of Object.keys(schema)) {
    // Resolver-only field?
    if (schema[fieldName].resolveAs && !schema[fieldName].resolveAs.addOriginalField) {
      // HACK: Special case for make_editable
      if (schema[fieldName].resolveAs?.type !== "Revision") {
        continue;
      }
    }
    // Universal field (therefore in base type)?
    if (isUniversalField(fieldName)) {
      continue;
    }
    // Subtype?
    if (fieldName.indexOf(".$") >= 0) {
      continue;
    }
    
    const typeName = simplSchemaTypeToTypescript(schema, fieldName, schema[fieldName].type);
    
    sb.push(`  ${fieldName}: ${typeName}\n`);
  }
  
  sb.push(`}\n\n`);
  
  return sb.join('');
}

function generateNameMapTypes(): string {
  let sb: Array<string> = [];
  sb.push('interface CollectionsByName {\n');
  for (let collection of Collections) {
    const collectionName = collection.collectionName;
    sb.push(`  ${collectionName}: ${collectionName}Collection\n`);
  }
  sb.push('}\n\n');
  
  sb.push('interface DbTypesByCollectionName {\n');
  for (let collection of Collections) {
    const collectionName = collection.collectionName;
    const typeName = collection.typeName;
    sb.push(`  ${collectionName}: Db${typeName}\n`);
  }
  sb.push('}\n\n');
  
  return sb.join('');
}


