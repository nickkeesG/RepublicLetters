import { getAllCollections } from "../../lib/vulcan-lib/getCollection";
import { createIndex, dropIndex } from "./meta/utils";

export const up = async ({db}: MigrationContext) => {
  for (const collection of getAllCollections()) {
    if (collection.isPostgres()) {
      const table = collection.getTable();
      for (const index of table.getIndexes()) {
        if (index.isUnique() || index.getPartialFilterExpression()) {
          try {
            await dropIndex(db, collection, index);
            // eslint-disable-next-line no-empty
          } catch {}
          await createIndex(db, collection, index);
        }
      }
    }
  }
}
